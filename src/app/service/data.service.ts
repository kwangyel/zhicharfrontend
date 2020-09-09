import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  authenticateUser(uid, pass) {
    const user = {
      user: uid,
      password: pass
    };

    return this.http
      .post<any>(`${API_URL}/login`, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDzongkhags() {
    return this.http
      .get<any>(`${API_URL}/get-all-dzo`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getZones(dzongkhagId) {
    return this.http
      .get<any>(`${API_URL}/get-zones/${dzongkhagId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getSubZones(zoneId) {
    return this.http
      .get<any>(`${API_URL}/get-subzones/${zoneId}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  validateQRCode(requestType, uuid) {
    return this.http
      .get<any>(`${API_URL}/validate-qr/${requestType}/${uuid}`, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postRegistration(item) {
    return this.http
      .post(`${API_URL}/household-details`, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postUpdateHouseHold(item, houseHoldId) {
    return this.http
      .put(`${API_URL}/household-details/${houseHoldId}`, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  postUnit(item){
    return this.http
      .post<any>(`${API_URL}/createunit`,item,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  postHousehold(item){
    return this.http
      .post<any>(`${API_URL}/create-household`,item,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  postShop(item){
    return this.http
      .post<any>(`${API_URL}/create-shop`,item,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateBuilding(item){
    return this.http
      .post<any>(`${API_URL}/updatebuilding`,item,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  uploadImg(item){
    return this.http
      .post<any>(`${API_URL}/upload-img`,item,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postCompletion(buildingId) {
    return this.http
      .post(`${API_URL}/mark-building-completed/${buildingId}`, '', this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postAtms(items){
    return this.http
      .post(`${API_URL}/create-bulk-atm`,items,this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  postNewBuilding(item) {
    return this.http
      .post<any>(`${API_URL}/buildings`, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  postQRScan(item) {
    return this.http
      .post<any>(`${API_URL}/scan`, item, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
