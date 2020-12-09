import { Component, OnInit, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { environment } from '../../environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';

export class Building {
  lat: number;
  lng: number;
  sub_zone_id: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  API_URL = environment.API_URL;
  BASE_URL = environment.BASE_URL;
  searchForm: FormGroup;
  searchmarker: L.GeoJSON;
  searchedId: any;

  latitude: number;
  longitude: number;
  accuracy: number;
  json: any;
  bound: any;
  buildingId: number;
  imgs:any;
  units:any;
  isAddAllowed = false;
  building: Building;
  watchId;
  mylocation: L.Marker;
  mycircle: L.Circle;
  resident: any;

  map: L.Map;

  greenMarker = L.icon({
    iconUrl: 'assets/marker-green.png',
    iconSize: [15, 15]
  });

  redMarker = L.icon({
    iconUrl: 'assets/marker-red.png',
    iconSize: [15, 15]
  });
  
  yellowMarker = L.icon({
    iconUrl: 'assets/marker-yellow.png',
    iconSize: [15,15]
  })

  myMarker = L.icon({
    iconUrl: 'assets/mymarker.png',
    iconSize: [20, 20]
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private fb: FormBuilder,
  ) {
    this.building = new Building();
  }

  ngOnInit() {
    this.renderMap();
    this.searchForm = this.fb.group({
      searchBuilding:[]
    })
  }

  submit(){
    let result = this.searchForm.get("searchBuilding").value;
    console.log(result);
    this.dataService.getStructure(result).subscribe(resp=>{
      let structure = resp;
      this.zoomToSearched(structure)
    });

  }

  zoomToSearched(response:any){
    let lat,lng,id = 0
    if(response.success === "false"){
      alert("Building not found");
    }else{
      if(this.searchmarker !== undefined){
        this.map.removeLayer(this.searchmarker);  
        this.searchmarker = null;
      }
      lat = response.data.lat
      lng = response.data.lng

      this.map.flyTo([lat,lng],18)
      var responseJson = {
        "type":"Point",
        "coordinates":[lng,lat],
        "properties":{
          "building_id":response.data.id
        }
      };
      this.searchmarker = L.geoJSON(<GeoJSON.Point>responseJson, {
        onEachFeature: (feature, layer) => {
            layer.on('click', (e) => {
              this.buildingId = feature.properties.building_id;
              this.http.get(`${this.API_URL}/getunits/${this.buildingId}`).subscribe((json: any) => {
                this.resident=null;
                this.units = json.data;
              });

              this.http.get(`${this.API_URL}/get-img/${this.buildingId}`).subscribe((json: any) => {
                this.imgs= json.data;
              });
            });
          }, pointToLayer: (feature, latLng) => {
              return L.marker(latLng,{icon: this.myMarker});
          }
        }).addTo(this.map);
    }
  }


  getMyLocation(){
    this.map.locate({setView:true,watch:true,enableHighAccuracy:true});
  }

  // getLocation(): void {
  //   if (navigator.geolocation) {
  //       const iconRetinaUrl = 'assets/mymarker.png';
  //       const iconUrl = 'assets/mymarker.png';
  //       const iconDefault = L.icon({
  //         iconRetinaUrl,
  //         iconUrl,
  //         iconSize: [20, 20],
  //         iconAnchor: [12, 41],
  //         popupAnchor: [1, -34],
  //         tooltipAnchor: [16, -28],
  //         shadowSize: [41, 41]
  //       });

  //       // const options = {
  //       //   enableHighAccuracy: true,
  //       //   timeout: 5000,
  //       //   maximumAge: 0
  //       // };

  //       navigator.geolocation.getCurrentPosition((position) => {
  //         this.longitude = position.coords.longitude;
  //         this.latitude = position.coords.latitude;
  //         this.accuracy = position.coords.accuracy;

  //         if (this.accuracy > 100) {
  //           L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
  //           .bindPopup('You are here')
  //           .openPopup();
  //           this.map.flyTo([this.latitude, this.longitude], 19);
  //           navigator.geolocation.clearWatch(this.watchId);
  //         } else {
  //           L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
  //           .bindPopup('You are here')
  //           .openPopup();
  //           L.circle([this.latitude, this.longitude], {
  //             color: '#3498db',
  //             fillColor: '#3498db',
  //             fillOpacity: 0.3,
  //             radius: this.accuracy
  //           }).addTo(this.map);
  //           this.map.flyTo([this.latitude, this.longitude], 19);
  //         }

  //       }, err => {
  //         if (err.code === 0) {
  //           this.snackBar.open('Couldnot pull your location, please try again later', '', {
  //             verticalPosition: 'top',
  //             duration: 5000,
  //             panelClass: ['error-snackbar']
  //           });
  //         }
  //         if (err.code === 1) {
  //           this.snackBar.open('Location service is disabled, please enable it and try again', '', {
  //             verticalPosition: 'top',
  //             duration: 5000,
  //             panelClass: ['error-snackbar']
  //           });
  //         }
  //         if (err.code === 2) {
  //           this.snackBar.open('Your location couldnot be determined', '', {
  //             verticalPosition: 'top',
  //             duration: 5000,
  //             panelClass: ['error-snackbar']
  //           });
  //         }
  //         if (err.code === 3) {
  //             this.snackBar.open('Couldnot get your location', '', {
  //               verticalPosition: 'top',
  //               duration: 5000,
  //               panelClass: ['error-snackbar']
  //             });
  //           }
  //       } );

  //   } else {
  //      console.error('No support for geolocation');
  //   }
  // }

  // renderMap() {
  //   this.map = L.map('map').setView([89.64191, 27.4712], 13);
  //   const tiles = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
  //     maxZoom: 20,
  //     minZoom: 13,
  //     attribution: ''
  //   });
  //   tiles.addTo(this.map);

  //   const streeTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
  //     layers: 'bhutan:street_11august',
  //     maxZoom: 20,
  //     minZoom: 13,
  //     format: 'image/png',
  //     transparent: true
  //   });
  //   streeTile.addTo(this.map);

  //   const bldgTile = L.tileLayer.wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
  //     layers: 'bhutan:building_numbers_11august',
  //     maxZoom: 20,
  //     minZoom: 13,
  //     format: 'image/png',
  //     transparent: true
  //   });
  //   bldgTile.addTo(this.map);

  //   this.onMapReady(this.map);

  //   let newMarker: any;
  //   this.map.on('click', <LeafletMouseEvent>($e) => {
  //     if (this.isAddAllowed) {
  //       if (newMarker !== undefined) {
  //         this.map.removeLayer(newMarker);
  //       }
  //       newMarker = L.marker($e.latlng, {icon: this.myMarker}).addTo(this.map);
  //       this.presentAlert($e.latlng);
  //     }
  //   });
  // }

  renderMap(){
    var sat = L.tileLayer('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      minZoom: 9,
    });
    var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 9,
    });
    this.map = L.map('map',{
      center:[27.4712,89.64191],
      zoom: 13,
      maxZoom: 20,
      minZoom: 9,
      layers: [sat]
    });
    var baseMaps = {
      "Satellite Image": sat,
      "OSM base map": osm 
    };

    L.control.layers(baseMaps,null,{position:"bottomleft"}).addTo(this.map);
    this.onMapReady(this.map);
  
    this.map.on('locationerror',(err)=>{
          if (err.code === 0) {
            this.snackBar.open('Couldnot pull your location, please try again later', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 1) {
            this.snackBar.open('Location service is disabled, please enable it and try again', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 2) {
            this.snackBar.open('Your location couldnot be determined', '', {
              verticalPosition: 'top',
              duration: 3000
            });
          }
          if (err.code === 3) {
              this.snackBar.open('Couldnot get your location', '', {
                verticalPosition: 'top',
                duration: 3000
              });
            }
    });

    this.map.on('locationfound',(e)=>{
      var radius = e.accuracy;
      if(this.mylocation !== undefined){
        this.map.removeLayer(this.mylocation);
      }
      this.mylocation = L.marker(e.latlng,{icon: this.myMarker}).addTo(this.map);

      if(radius<100){
        if(this.mycircle !== undefined){
          this.map.removeLayer(this.mycircle);
        }
        this.mycircle = L.circle(e.latlng,radius).addTo(this.map);
      }
    });


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
    const geojson = this.http.get(`/assets/geojson/conv_T${zoneId}.geojson`).subscribe((json:any)=>{
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

    this.http.get(`${this.API_URL}/get-buildings-json/${zoneId}`).subscribe((json: any) => {
      this.json = json;
      console.log(json);
      const geoJson = L.geoJSON(this.json, {
        onEachFeature: (feature, layer) => {
            layer.on('click', (e) => {
              this.buildingId = feature.properties.building_id;
              this.http.get(`${this.API_URL}/getunits/${this.buildingId}`).subscribe((json: any) => {
                this.resident=null;
                this.units = json.data;
              });

              this.http.get(`${this.API_URL}/get-img/${this.buildingId}`).subscribe((json: any) => {
                this.imgs= json.data;
              });
            });
          }, pointToLayer: (feature, latLng) => {
            if(feature.properties.status == 'INCOMPLETE'){
              return L.marker(latLng, {icon: this.redMarker});
            }else if(feature.properties.status == "PROGRESS"){
              return L.marker(latLng, {icon: this.yellowMarker});
            } else{
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
  showResident(unitid){
    this.resident = null;
    this.dataService.getResident(unitid).subscribe(resp=>{
      this.resident = resp.data;
      console.log(this.resident);
    });
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
