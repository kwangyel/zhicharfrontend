import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DataService } from '../service/data.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { SoundService } from '../service/sound.service';

export class Qrcode {
  qr_code_id: number;
  sub_zone_id: number;
  user_id: number;
  household_detail_id: number;
  lat: number;
  lng: number;
  accuracy: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  qrcode: Qrcode;
  longitude: number;
  latitude: number;
  accuracy: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private soundService: SoundService
  ) {
    this.qrcode = new Qrcode();
  }

  ngOnInit() {
    sessionStorage.setItem('buildingId',this.route.snapshot.params['id'])
  }

  redirect(path) {
    sessionStorage.setItem('transactionType', 'registration');
    this.router.navigate([path]);
  }

  gotocamera(){
    this.router.navigate(['camera']);
  }

  goback(){
    this.router.navigate(['map']);
  }

  update() {
    sessionStorage.setItem('transactionType', 'update');
    this.router.navigate(['map']);
  }
  markcomplete(){
    this.dataService.postCompletion(sessionStorage.getItem('buildingId')).subscribe(response=>{
      if(response['success'] == "true"){
          this.snackBar.open('building Marked Complete' , '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
      }else{
          this.snackBar.open('Could not mark Complete' , '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
      }
    })   
  }
  // unit(){
  //   this.router.navigate([])
  // }

  regHouse(){
    this.router.navigate(['unit']);
  }
  unit(){
    this.router.navigate(['register']);
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
