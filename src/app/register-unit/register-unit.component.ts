import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { all } from 'q';

interface ATM{
  id: string;
  name: string;
  checked: boolean,
}
interface BuildingUse{
  id: string,
  name: string
}
export class BuildingData{
  building_id: number;
  building_name: string;
  owner_name: string;
  contact: string;
  use: string;
}

@Component({
  selector: 'app-register-unit',
  templateUrl: './register-unit.component.html',
  styleUrls: ['./register-unit.component.scss']
})

export class RegisterUnitComponent implements OnInit {
  showOtherField = false;
  buildingform: FormGroup;
  buildingUse: string;
  buildingId : number;
  buildingData: BuildingData;

  atms: ATM[] = [
    {id: '0', name: 'PNB', checked:false},
    {id: '1', name: 'BNB', checked:false},
    {id: '2', name: 'BOB', checked:false},
    {id: '3', name: 'TBank',checked:false},
    {id: '4', name: 'BDBL', checked:false},
  ];
  uses: BuildingUse[] = [
    {id:'1', name:"Residential"},
    {id:'2', name:"Commercial"},
    {id:'3', name:"Mixed User"},
    {id:'4', name:"Institution"},
    {id:'5', name:"School"},
    {id:'6', name:"Religious"},
    {id:'7', name:"Hospital"},
    {id:'8', name:"Religious"},
    {id:'9', name:"Others"},
  ]

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private snackBar: MatSnackBar
  ) {
    this.buildingData = new BuildingData();
   }

  ngOnInit() {
    this.reactiveForms();
    this.buildingId = Number(sessionStorage.getItem('buildingId'));
  }
  addbuilding(){
    this.router.navigate(['dashboard']);
  }
  atmSelect(atm,$event){
    this.atms[atm.id].checked = $event.checked;
  }
  selectUse($event){
    this.buildingUse = this.uses[$event.value-1]['name'];
    if($event.value === '9'){
      this.showOtherField = true;
    }else{
      this.showOtherField = false;
    }
  }
  submit(){
    let atmdata = [];
    this.atms.forEach((item,index)=>{
      if(item['checked'] === true){
        atmdata.push({"building_id":this.buildingId, "type":item['name']});
      }
    });
    this.buildingData.building_id = this.buildingId;
    this.buildingData.building_name = this.buildingform.get('buildingNameControl').value;
    this.buildingData.owner_name= this.buildingform.get('ownerNameControl').value;
    this.buildingData.contact= this.buildingform.get('contactControl').value;
    if(this.buildingUse === "Others"){
      this.buildingUse = this.buildingform.get('otherUseControl').value;
    }
    this.buildingData.use = this.buildingUse;

    this.dataService.updateBuilding(this.buildingData).subscribe(response=>{
      if(response.success === "true"){
        if(atmdata.length > 0){
          let jsonobjet = {
            "atms":atmdata
          }
          this.registerAtm(jsonobjet);
        }
        this.router.navigate(['dashboard',this.buildingId]);
        this.snackBar.open('Building registered', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else if(response.success === "false"){
        this.snackBar.open('Could not register building'+response.msg, '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }else if(response.success === "error"){
        this.snackBar.open('Error registering building', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    });

  }

  registerAtm(atms){
    this.dataService.postAtms(atms).subscribe(response=>{
      if(response['success'] === "true"){
        this.router.navigate(['dashboard',this.buildingId]);
        this.snackBar.open('Building registered', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else{
        this.snackBar.open('Building registration error', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  reactiveForms() {
    this.buildingform= this.fb.group({
      buildingNameControl: [''],
      ownerNameControl: [''],
      contactControl: [''],
      otherUseControl: ['']
    });
  }
}
