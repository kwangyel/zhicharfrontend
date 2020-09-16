import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../service/data.service';

interface Nationality {
  id: string;
  name: string;
}

interface ShopType{
  id: string;
  name: string;
}

interface UnitType{
  id: string;
  name: string;
}

export class Unit{
  unit_name : string;
  use: string;
  building_id: number;
}

export class Shop{
  unit_name: string;
  building_id: number;
  unit_id: number;
  type: string;
  name: string;
  contact: string;

}

export class Household {
  building_id: number;
  hh_name: string;
  contact: string;
  male_10: number;
  female_10: number;
  male_10_60: number;
  female_10_60: number;
  male_60: number;
  female_60: number;
  different_abled: string;
  unit_id: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  shopform: FormGroup;
  unitform: FormGroup;
  ageGender: FormGroup;
  showScanner = false;
  buildingId: number;
  qrId: string;
  houseHoldId: number;
  household: Household;
  unit: Unit;
  shop: Shop;
  unitUse: string;
  shopUse: string;
  unitId: number;

  latitude: number;
  longitude: number;
  accuracy: number;

  disableForm = false;
  displayForm = true;
  displayCamera = false;
  displayShopForm = false;
  displayResdForm = false;
  showOtherType = false;
  showOtherShopType=false;

  nationalities: Nationality[] = [
    {id: 'true', name: 'yes'},
    {id: 'false', name: 'no'}
  ];

  shoptypes: ShopType[] = [
    {id: '1', name: 'Grocery Shop'},
    {id: '2', name: 'Liquor Shop'},
    {id: '3', name: 'Pharmacy'},
    {id: '4', name: 'Meat Shop'},
    {id: '5', name: 'Vegetable Shop'},
    {id: '6', name: 'Others'},
  ];

  unittypes: UnitType[] = [
    {id: '1', name: 'Shop'},
    {id: '2', name: 'Residential'},
    {id: '3', name: 'Office'},
    {id: '4', name: 'Others'},
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private dataService: DataService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.household= new Household();
    this.shop = new Shop();
    this.unit = new Unit();
  }

  ngOnInit() {
    this.buildingId = Number(sessionStorage.getItem('buildingId'));
    this.reactiveForms();
  }

  reactiveForms() {
    this.registerForm = this.fb.group({
      mobileNoControl: ['', Validators.compose([Validators.required, Validators.maxLength(8), Validators.minLength(8)])],
      householdControl: [ ],
      diffabledControl: [ ],
    });
    this.shopform = this.fb.group({
      shopTypeControl:[],
      shopNameControl: [],
      shopPhControl: [],
      otherShopControl: []
    });
    this.unitform = this.fb.group({
      unitTypeControl: [],
      unitIdControl:[],
      otherUnitUseControl:[],
    });
    this.ageGender = this.fb.group({
      male10Control :[],
      male1060Control :[],
      male60Control :[],
      female10Control :[],
      female1060Control :[],
      female60Control :[],
    });
  }

  submit(){
    // this.router.navigate(['dashboard']);
    this.registerUnit();
  }
  selectShopType($event){
    this.showOtherShopType = false;
    this.shopUse = this.shoptypes[$event.value-1]['name'];
    console.log(this.shopUse);
    if($event.value === '6'){
      this.showOtherShopType = true;
    }
  }
  changeDiff($event){
    this.displayResdForm = false;
    this.displayShopForm = false;
    this.showOtherType = false;
    this.unitUse = this.unittypes[$event.value-1]['name'];

    if($event.value === '1'){
      this.displayShopForm = true;
    }else if ($event.value === '2'){
      this.displayResdForm = true;
    }else if ($event.value === '4'){
      this.showOtherType = true;
    }
  }

  registerUnit(){
    this.unit.unit_name = this.unitform.get('unitIdControl').value;
    this.unit.building_id = Number(sessionStorage.getItem('buildingId'));
    if(this.unitUse == 'Others'){
      this.unitUse = this.unitform.get('otherUnitUseControl').value;
    }
    this.unit.use = this.unitUse;

    this.dataService.postUnit(this.unit).subscribe(response=>{
      if(response.success === "true"){
        this.unitId = response.data.id
        if(this.unitUse === "Shop"){
          this.registerShop(this.unitId)
        }else if(this.unitUse === "Residential"){
          this.registerHousehold(this.unitId)
        }else{
          this.snackBar.open('Registration complete', '', {
            duration: 5000,
            verticalPosition: 'bottom',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['dashboard',this.buildingId])
        }
      }else if (response.success === "false"){
        this.snackBar.open('Cannot register unit', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }else if(response.success === "error"){
        this.snackBar.open('Error Registering unit', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    });
  }
  registerHousehold(unitid){
    this.household.building_id = Number(sessionStorage.getItem('buildingId'));
    this.household.contact = this.registerForm.get('mobileNoControl').value;
    this.household.hh_name =  this.registerForm.get('householdControl').value;
    this.household.different_abled = this.registerForm.get('diffabledControl').value;
    this.household.male_10 = this.ageGender.get('male10Control').value;
    this.household.female_10 = this.ageGender.get('female10Control').value;
    this.household.male_10_60 = this.ageGender.get('male1060Control').value;
    this.household.female_10_60 = this.ageGender.get('female1060Control').value;
    this.household.male_60 = this.ageGender.get('male60Control').value;
    this.household.female_60 = this.ageGender.get('female60Control').value;
    this.household.unit_id = unitid;

    this.dataService.postHousehold(this.household).subscribe(response=>{
      if(response.success === "true"){
        this.router.navigate(['dashboard',this.buildingId]);
        this.snackBar.open('Household Registration Complete', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else if(response.success === "false"){
        this.snackBar.open('Could not register Household'+response.msg, '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }else if(response.success === "error"){
        this.snackBar.open('Error registering Household', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    })
  }

  registerShop(unitid){
    this.shop.building_id = Number(sessionStorage.getItem("buildingId"));
    this.shop.contact = this.shopform.get('shopPhControl').value;
    this.shop.name = this.shopform.get('shopNameControl').value;
    if(this.shopUse === "Others"){
      this.shopUse = this.shopform.get('otherShopControl').value;
    }
    this.shop.unit_id = unitid;
    this.shop.type = this.shopUse;

    this.dataService.postShop(this.shop).subscribe(response=>{
      if(response.success === "true"){
        this.router.navigate(['dashboard',this.buildingId]);
        this.snackBar.open('Shop Registration Complete', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['success-snackbar']
        });
      }else if(response.success === "false"){
        this.snackBar.open('Could not register shop'+response.msg, '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }else if(response.success === "error"){
        this.snackBar.open('Error registering Household', '', {
          duration: 5000,
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  getLocation(): void {
    if (navigator.geolocation) {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition((position) => {
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.accuracy = position.coords.accuracy;
        }, error => {
          console.error('No support for geolocation');
        }, options);
    } else {
       console.error('No support for geolocation');
    }
  }
}
