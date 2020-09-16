import { Component, OnInit, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { environment } from '../../environments/environment';

export class Building {
  lat: number;
  lng: number;
  sub_zone_id: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  API_URL = environment.API_URL;
  BASE_URL = environment.BASE_URL;

  latitude: number;
  longitude: number;
  accuracy: number;
  json: any;
  bound: any;
  buildingId: number;
  isAddAllowed = false;
  building: Building;
  watchId;

  map: L.Map;

  greenMarker = L.icon({
    iconUrl: 'assets/marker-green.png',
    iconSize: [15, 15]
  });

  redMarker = L.icon({
    iconUrl: 'assets/marker-red.png',
    iconSize: [15, 15]
  });

  myMarker = L.icon({
    iconUrl: 'assets/marker-icon.png',
    iconSize: [20, 20]
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private zone: NgZone
  ) {
    this.building = new Building();
  }

  ngOnInit() {
    this.renderMap();
  }

  getMyLocation() {
    if (navigator.geolocation) {
      const iconRetinaUrl = 'assets/mymarker.png';
      const iconUrl = 'assets/mymarker.png';
      const iconDefault = L.icon({
        iconRetinaUrl,
        iconUrl,
        iconSize: [20, 20],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition((position) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.accuracy = position.coords.accuracy;

        if (this.accuracy > 100) {
          L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
          .bindPopup('You are here')
          .openPopup();
          this.map.flyTo([this.latitude, this.longitude], 19);
          navigator.geolocation.clearWatch(this.watchId);
        } else {
          L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
          .bindPopup('You are here')
          .openPopup();
          L.circle([this.latitude, this.longitude], {
            color: '#3498db',
            fillColor: '#3498db',
            fillOpacity: 0.3,
            radius: this.accuracy
          }).addTo(this.map);
          this.map.flyTo([this.latitude, this.longitude], 19);
        }
      }, error => {
        console.error('No support for geolocation');
      }, options);
    }
  }

  getLocation(): void {
    if (navigator.geolocation) {
        const iconRetinaUrl = 'assets/mymarker.png';
        const iconUrl = 'assets/mymarker.png';
        const iconDefault = L.icon({
          iconRetinaUrl,
          iconUrl,
          iconSize: [20, 20],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        });

        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        navigator.geolocation.getCurrentPosition((position) => {
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          this.accuracy = position.coords.accuracy;

          if (this.accuracy > 100) {
            L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
            .bindPopup('You are here')
            .openPopup();
            this.map.flyTo([this.latitude, this.longitude], 19);
            navigator.geolocation.clearWatch(this.watchId);
          } else {
            L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
            .bindPopup('You are here')
            .openPopup();
            L.circle([this.latitude, this.longitude], {
              color: '#3498db',
              fillColor: '#3498db',
              fillOpacity: 0.3,
              radius: this.accuracy
            }).addTo(this.map);
            this.map.flyTo([this.latitude, this.longitude], 19);
          }

        }, err => {
          if (err.code === 0) {
            this.snackBar.open('Couldnot pull your location, please try again later', '', {
              verticalPosition: 'top',
              duration: 5000,
              panelClass: ['error-snackbar']
            });
          }
          if (err.code === 1) {
            this.snackBar.open('Location service is disabled, please enable it and try again', '', {
              verticalPosition: 'top',
              duration: 5000,
              panelClass: ['error-snackbar']
            });
          }
          if (err.code === 2) {
            this.snackBar.open('Your location couldnot be determined', '', {
              verticalPosition: 'top',
              duration: 5000,
              panelClass: ['error-snackbar']
            });
          }
          if (err.code === 3) {
              this.snackBar.open('Couldnot get your location', '', {
                verticalPosition: 'top',
                duration: 5000,
                panelClass: ['error-snackbar']
              });
            }
        }, options);

    } else {
       console.error('No support for geolocation');
    }
  }

  renderMap() {
    this.map = L.map('map').setView([89.64191, 27.4712], 13);
    const tiles = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 13,
      attribution: ''
    });
    tiles.addTo(this.map);

    const streeTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
      layers: 'bhutan:street_11august',
      maxZoom: 20,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    });
    streeTile.addTo(this.map);

    const bldgTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
      layers: 'bhutan:building_numbers_11august',
      maxZoom: 20,
      minZoom: 13,
      format: 'image/png',
      transparent: true
    });
    bldgTile.addTo(this.map);

    this.onMapReady(this.map);

    let newMarker: any;
    this.map.on('click', <LeafletMouseEvent>($e) => {
      if (this.isAddAllowed) {
        if (newMarker !== undefined) {
          this.map.removeLayer(newMarker);
        }
        newMarker = L.marker($e.latlng, {icon: this.myMarker}).addTo(this.map);
        this.presentAlert($e.latlng);
      }
    });
  }

  onMapReady(map: L.Map) {
    const zoneId = Number(sessionStorage.getItem('subZoneId'));
    const geojson = this.http.get(`${this.BASE_URL}/assets/geojson/conv_T${zoneId}.geojson`).subscribe((json:any)=>{
      this.bound= L.geoJSON(json,{
        style: (feature)=>{
          return {
            color:"red",
            fillOpacity:0
          }
        }
      }).addTo(this.map);
      this.map.fitBounds(this.bound.getBounds());
    })

    //   this.getLocation();
    // });

    // this.http.get(`https://outpassdashboard.desuung.org.bt/api/buildings?sub_zone_id=${zoneId}`).subscribe((json: any) => {

    this.http.get(`${this.API_URL}/get-buildings-json/${zoneId}`).subscribe((json: any) => {
      this.json = json;
      console.log(json);
      const geoJson = L.geoJSON(this.json, {
        onEachFeature: (feature, layer) => {
            layer.on('click', (e) => {
              this.buildingId = feature.properties.building_id;
              if(feature.properties.status === "INCOMPLETE"){
                this.router.navigate(['dashboard', this.buildingId]);
                this.snackBar.open('Building number ' + this.buildingId + ' was successfully selected', '', {
                  duration: 5000,
                  verticalPosition: 'top',
                  panelClass: ['success-snackbar']
                });
              }else{
                this.snackBar.open('Building marked complete. Cannot edit', '', {
                  duration: 5000,
                  verticalPosition: 'top',
                  panelClass: ['error-snackbar']
                });
              }
            });
          }, pointToLayer: (feature, latLng) => {
            if(feature.properties.status == 'INCOMPLETE'){
              return L.marker(latLng, {icon: this.redMarker});
            }else{
              return L.marker(latLng, {icon: this.greenMarker});
            }
          }
        }).addTo(map);
    });
  }

  toggleAdd() {
    this.snackBar.open('Tap on the structure/building you want to add', '', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['info-snackbar']
    });
    this.isAddAllowed = true;
  }

  presentAlert(latlng) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to add the selected building?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.building.lat = latlng.lat;
        this.building.lng = latlng.lng;
        this.building.sub_zone_id = Number(sessionStorage.getItem('subZoneId'));
        this.dataService.postNewBuilding(this.building).subscribe(response => {
          console.log(response);
          this.buildingId = response.data.id;
          this.snackBar.open('Building number ' + this.buildingId + ' has been successfully identified', '', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['dashboard', this.buildingId]);
        });
      }
    });
  }
  
}