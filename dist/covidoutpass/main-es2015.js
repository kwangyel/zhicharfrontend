(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"back button\" (click)=\"back()\" *ngIf=\"isUserLoggedIn\">\n        <mat-icon>arrow_back</mat-icon>\n      </button>\n      <img src=\"../assets/app-logo.png\" style=\"height:90%\">\n      <h1 style=\"margin-left: 10px;\">ZHI CHAR APP | BHUTAN</h1>\n      <span class=\"menu-spacer\"></span>\n      <button mat-icon-button (click)=\"logout()\" *ngIf=\"isUserLoggedIn\">\n        <mat-icon>settings_power</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/camera/camera.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/camera/camera.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n\t<div>\n\t\t<webcam [height]=\"300\" [width]=\"300\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n\t\t [allowCameraSwitch]=\"allowCameraSwitch\" [switchCamera]=\"nextWebcamObservable\" [videoOptions]=\"videoOptions\" (cameraSwitched)=\"cameraWasSwitched($event)\"\n\t\t (initError)=\"handleInitError($event)\"></webcam>\n\n\t\t<br/>\n\t\t<div class=\"actionBtn\" (click)=\"triggerSnapshot();\" title=\"Take Picture\">\n\t\t\t<mat-icon >camera</mat-icon> \n\t\t</div>\n\t\t<div class=\"actionBtn\" (click)=\"showNextWebcam(true);\" title=\"Switch Camera\">\n\t\t\t<mat-icon>sync</mat-icon> \n\t\t</div>\n\t</div>\n</div>\n\n<h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n<ul *ngFor=\"let error of errors\">\n\t<li>{{error | json}}</li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Change Password</span>\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"changePasswordForm\">\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"password\" placeholder=\"Old Password\" class=\"form-input\" name=\"oldPass\" formControlName=\"oldPass\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"password\" placeholder=\"New Password\" class=\"form-input\" name=\"newPass\" formControlName=\"newPass\" required>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"changePassword()\" color=\"primary\" [disabled]=\"!changePasswordForm.valid\">\n        <mat-icon>send</mat-icon> Change\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/confirm-dialog/confirm-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/confirm-dialog/confirm-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  {{data.message}}\n</div>\n<div mat-dialog-actions>\n  <button mat-button value=\"Confirm\" [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n  <button mat-button value=\"Cancel\"  [mat-dialog-close]=\"false\">No</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"redirect('map')\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        contacts\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Household Registration\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      register household information\n    </div>\n  </div>\n</div> -->\n<div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"regHouse()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        home\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n     Register Building \n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Enter Bulding Information\n    </div>\n  </div>\n</div>\n\n<div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"unit()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        book\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n     Register Unit \n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Enter Unit Information\n    </div>\n  </div>\n</div>\n\n<div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"gotocamera()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        camera\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Take Picture of Building\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Take Picture of Building\n    </div>\n  </div>\n</div>\n\n<div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"goback()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        arrow_left\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Go back to map\n    </div>\n  </div>\n</div>\n<!-- <div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"update()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        update\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Update details\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Update holdhold details\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>Oops!</h1>\n      <h2>404 - The Page can't be found</h2>\n    </div>\n    <a href=\"#\" [routerLink]=\"['/login']\">Go To Homepage</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wraper\" >\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n      <img src=\"../../assets/app-logo.png\"  class=\"main-lock-icon\" alt=\"\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"loginForm\">\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"number\" placeholder=\"CID Number\" class=\"form-input\" name=\"cid\" formControlName=\"cid\" [ngClass]=\"{ 'is-invalid': submitted && f.cid.errors }\" required autofocus>\n          <div *ngIf=\"submitted && f.cid.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cid.errors.required\">CID number is required</div>\n          <div *ngIf=\"f.cid.errors.minlength\">CID number must be atleast 11 characters</div>\n            <div *ngIf=\"f.cid.errors.maxlength\">CID number must be less then 11 characters</div>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" class=\"form-input\" name=\"password\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': submitted && f.cid.errors }\" required>\n          <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n        <button mat-raised-button class=\"btn custom-btn\" (click)=\"login()\" color=\"primary\" [disabled]=\"!loginForm.valid\"><mat-icon>input</mat-icon> Login</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Select a structure</span>\n  <span class=\"menu-spacer\"></span>\n  <button mat-raised-button (click)=\"toggleAdd()\" color=\"primary\">\n    <mat-icon>add</mat-icon>\n    <mat-label>Add Structure</mat-label>\n  </button>\n</mat-toolbar>\n<div class=\"map-container\">\n  <div class=\"map-frame\">\n    <div id=\"map\">\n      <div class=\"leaflet-bottom leaflet-right\">\n          <button style=\"\n          width: 42px;\n          border-radius: 23px;\n          height: 42px;\n          background: #ffffffa3;\n          margin-bottom: 20px;\n          border: none;\" value=\"Cancel\" class=\" span3 leaflet-control\" (click)=\"getMyLocation()\">\n            <mat-icon style=\"color: blue;\">location_searching</mat-icon>\n          </button>\n      </div>\n      <div class=\"leaflet-top leaflet-right\">\n        <mat-label style=\"\n        margin-bottom: 20px;\n        font-size: 13px;\n        font-weight: bold;\n        color: white;\n        background-color: #df1515;\n        padding: 5px;\n        margin-right: 30px;\">Select a building by clicking on the red dot</mat-label>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Take Picture</h1>\n<div mat-dialog-content>\n  <zxing-scanner (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-unit/register-unit.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-unit/register-unit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Register Building</span>\n  <span class=\"menu-spacer\"></span>\n</mat-toolbar>\n<div class=\"form-wraper\" style=\"text-align:center\">\n  <div class=\"form-container card\" >\n    <div class=\"form-body\">\n      <form [formGroup]=\"buildingform\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Building Name</mat-label>\n          <input matInput type=\"text\" name=\"mobileNo\" formControlName=\"buildingNameControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Name of Building Owner</mat-label>\n          <input matInput type=\"text\" name=\"mobileNo\" formControlName=\"ownerNameControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Contact Number</mat-label>\n          <input matInput type=\"tel\" name=\"totalMale\" formControlName=\"contactControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Building Use</mat-label>\n          <mat-select name=\"building use\" (selectionChange) = \"selectUse($event)\" required>\n            <mat-option *ngFor=\"let use of uses\" [value]=\"use.id\">\n              {{use.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\" *ngIf=\"showOtherField\">\n          <mat-label>Specify other use</mat-label>\n          <input matInput type=\"text\" name=\"otherUse\" formControlName=\"otherUseControl\" min=\"0\"  required>\n        </mat-form-field>\n        <div style=\"text-align:left;padding-top:10px;\">\n          <mat-label>Select ATMs present:</mat-label>\n            <span class=\"example-list-section\">\n              <ul>\n                <li *ngFor=\"let atm of atms\">\n                  <mat-checkbox [checked]=\"atm.checked\" (change) = \"atmSelect(atm,$event)\">\n                    {{atm.name}}\n                  </mat-checkbox>\n                </li>\n              </ul>\n            </span>\n        </div>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"submit()\" >\n        <mat-icon>note_add</mat-icon> REGISTER\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Registration</span>\n  <span class=\"menu-spacer\"></span>\n</mat-toolbar>\n<div class=\"form-wraper\" style=\"text-align:center\">\n  <button *ngIf=\"displayCamera\" mat-raised-button color=\"primary\" (click)=\"triggerCamera()\" aria-label=\"Click to open camera for qr code scanning\">\n    <mat-icon>camera_alt</mat-icon> CLICK TO SCAN QR CODE\n  </button>\n  <div class=\"form-container card\" *ngIf=\"displayForm\">\n    <div class=\"form-body\">\n\n      <form [formGroup]=\"unitform\">\n\n        <mat-form-field class=\"justifier\">\n          <mat-label>Unit ID</mat-label>\n          <input matInput type=\"text\" name=\"unitid\" formControlName=\"unitIdControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Unit Use</mat-label>\n          <mat-select name=\"typeshop\" formControlName=\"unitTypeControl\" (selectionChange)=\"changeDiff($event)\"[readonly]=\"disableForm\" required>\n            <mat-option *ngFor=\"let unittype of unittypes\" [value]=\"unittype.id\">\n              {{unittype.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"justifier\" *ngIf=\"showOtherType\">\n          <mat-label>Specify other unit use</mat-label>\n          <input matInput type=\"text\" name=\"otheruse\" formControlName=\"otherUnitUseControl\" required min=\"0\" required autofocus>\n        </mat-form-field>\n      </form>\n      <form [formGroup]=\"shopform\" *ngIf=\"displayShopForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Type of Shop</mat-label>\n          <mat-select name=\"typeshop\" formControlName=\"shopTypeControl\" (selectionChange) = \"selectShopType($event)\" [readonly]=\"disableForm\" required>\n            <mat-option *ngFor=\"let shoptype of shoptypes\" [value]=\"shoptype.id\">\n              {{shoptype.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\" *ngIf = \"showOtherShopType\">\n          <mat-label>Specify shop type</mat-label>\n          <input matInput type=\"text\" name=\"otherShopType\" formControlName=\"otherShopControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Name of shop</mat-label>\n          <input matInput type=\"text\" name=\"mobileNo\" formControlName=\"shopNameControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n\n        <mat-form-field class=\"justifier\">\n          <mat-label>Contact Number</mat-label>\n          <input matInput type=\"text\" name=\"mobileNo\" formControlName=\"shopPhControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n\n      </form>\n\n      <form [formGroup]=\"registerForm\" *ngIf=\"displayResdForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Head of Household</mat-label>\n          <input matInput type=\"text\" name=\"mobileNo\" formControlName=\"householdControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Contact Number</mat-label>\n          <input matInput type=\"number\" name=\"mobileNo\" formControlName=\"mobileNoControl\" required min=\"0\" [readonly]=\"disableForm\" required autofocus>\n        </mat-form-field>\n        <form [formGroup]=\"ageGender\" >\n          <div >\n            <mat-form-field appearance=\"outline\" style=\"width:50%;\">\n              <mat-label>Male below 10</mat-label>\n              <input matInput type =\"number\" name=\"male_10\" formControlName=\"male10Control\">\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\"style=\"width:50%;\">\n              <mat-label>Female below 10</mat-label>\n              <input matInput type =\"number\" name=\"female_10\" formControlName=\"female10Control\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field appearance=\"outline\" style=\"width:50%;\">\n              <mat-label>Male 10-60</mat-label>\n              <input matInput type =\"number\" name=\"male_60\" formControlName=\"male60Control\">\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\"style=\"width:50%;\">\n              <mat-label>Female 10-60</mat-label>\n              <input matInput type =\"number\" name=\"female_1060\" formControlName=\"female1060Control\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field appearance=\"outline\" style=\"width:50%;\">\n              <mat-label>Male above 60</mat-label>\n              <input matInput type =\"number\" name=\"male_60\" formControlName=\"male60Control\">\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\"style=\"width:50%;\">\n              <mat-label>Female above 60</mat-label>\n              <input matInput type =\"number\" name=\"female_60\" formControlName=\"female60Control\">\n            </mat-form-field>\n          </div>\n        </form>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Differently abled</mat-label>\n          <mat-select name=\"nationality\" formControlName=\"diffabledControl\" [readonly]=\"disableForm\" required>\n            <mat-option *ngFor=\"let nationality of nationalities\" [value]=\"nationality.id\">\n              {{nationality.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- <mat-form-field class=\"justifier\">\n          <mat-label>Emergency Mobile Number</mat-label>\n          <input matInput type=\"number\" name=\"emergencyMobileNo\" formControlName=\"emergencyMobileNoControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field> -->\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"submit()\" color=\"primary\" >\n        <mat-icon>note_add</mat-icon> REGISTER\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/select-zone/select-zone.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/select-zone/select-zone.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Select Zone</span>\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"zoneForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Dzongkhag</mat-label>\n          <mat-select #dzongkhag formControlName=\"dzongkhagControl\" name=\"dzongkhag\" (selectionChange)=\"getZoneList(dzongkhag.value)\" required>\n            <mat-option *ngFor=\"let dzongkhag of dzongkhags\" [value]=\"dzongkhag.id\">\n              {{dzongkhag.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Zone</mat-label>\n          <mat-select #zone formControlName=\"zoneControl\" name=\"zone\" (selectionChange)=\"getSubzoneList(zone.value)\" required>\n            <mat-option *ngFor=\"let zone of zones\" [value]=\"zone.id\">\n              {{zone.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Sub-zone</mat-label>\n          <mat-select formControlName=\"subZoneControl\" name=\"subZone\" required>\n            <mat-option *ngFor=\"let subZone of subZones\" [value]=\"subZone.id\">\n              {{subZone.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!-- <mat-form-field class=\"justifier\">\n          <mat-label>Shop</mat-label>\n          <mat-select name=\"shop\" formControlName=\"shopControl\">\n            <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\">\n              {{shop.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field> -->\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"redirectToDashboard()\" color=\"primary\" [disabled]=\"!zoneForm.valid\">\n        <mat-icon>arrow_forward</mat-icon> Proceed\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update-household/update-household.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-household/update-household.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Update Household Details</span>\n  <span class=\"menu-spacer\"></span>\n  <!-- <button mat-mini-fab color=\"primary\" (click)=\"triggerCamera()\" aria-label=\"Click to open camera for qr code scanning\">\n    <mat-icon>camera_alt</mat-icon>\n  </button> -->\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-body\">\n      <form [formGroup]=\"updateForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Mobile Number</mat-label>\n          <input matInput type=\"number\" name=\"mobileNo\" formControlName=\"mobileNoControl\" required min=\"0\" [readonly]=\"disableForm\" autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Total Male</mat-label>\n          <input matInput type=\"number\" name=\"totalMale\" formControlName=\"totalMaleControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Total Female</mat-label>\n          <input matInput type=\"number\" name=\"totalFemale\" formControlName=\"totalFemaleControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Members (Age over 60)</mat-label>\n          <input matInput type=\"number\" name=\"ageOverFifty\" formControlName=\"ageOverFiftyControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Members (Age below 10)</mat-label>\n          <input matInput type=\"number\" name=\"ageBelowTen\" formControlName=\"ageBelowTenControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Nationality</mat-label>\n          <mat-select name=\"nationality\" formControlName=\"nationalityControl\" [readonly]=\"disableForm\" required>\n            <mat-option *ngFor=\"let nationality of nationalities\" [value]=\"nationality.id\">\n              {{nationality.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Emergency Mobile Number</mat-label>\n          <input matInput type=\"number\" name=\"emergencyMobileNo\" formControlName=\"emergencyMobileNoControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"update()\" color=\"primary\" [disabled]=\"!updateForm.valid\">\n        <mat-icon>note_add</mat-icon> UPDATE\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/upload-image/upload-image.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/upload-image/upload-image.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Take Picture</h1>\n<div>\n    <div class=\"snapshot\" *ngIf=\"webcamImage\">\n        <img [src]=\"webcamImage.imageAsDataUrl\" />\n\t\t<div title=\"Take Picture\">\n            <div>\n                <mat-icon class=\"actionBtn\" (click)=\"uploadImg()\">check</mat-icon> \n            </div>\n            <div>\n                <mat-icon  class=\"actionBtn\"(click)=\"clearImg()\">clear</mat-icon> \n            </div>\n\t\t</div>\n    </div>\n    <app-camera (pictureTaken)=\"handleImage($event)\" *ngIf=\"!webcamImage\"></app-camera>\n\n    <div class=\" snapshot form-container card\" (click)=\"goback()\" style=\"background-color: #f2f8f9;\">\n        <div (click)=\"goback();\" title=\"Go back to dashboard\">\n            <mat-icon>arrow_left</mat-icon> \n        </div>\n        <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n            Go back to dashboard \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-zone/select-zone.component */ "./src/app/select-zone/select-zone.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _service_route_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/route.guard */ "./src/app/service/route.guard.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _register_unit_register_unit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-unit/register-unit.component */ "./src/app/register-unit/register-unit.component.ts");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/upload-image/upload-image.component.ts");












const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'selectzone', component: _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_6__["SelectZoneComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    // {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard]},
    { path: 'dashboard/:id', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    { path: 'unit', component: _register_unit_register_unit_component__WEBPACK_IMPORTED_MODULE_10__["RegisterUnitComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    // {path: 'update-household/:id', component: UpdateHouseholdComponent, canActivate: [RouteGuard]},
    // {path: 'changepassword', component: ChangePasswordComponent, canActivate: [RouteGuard]},
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    { path: 'camera', component: _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__["UploadImageComponent"], canActivate: [_service_route_guard__WEBPACK_IMPORTED_MODULE_8__["RouteGuard"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 16px;\n}\n\nmat-sidenav {\n  background-color: lightcoral;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFBST0pFQ1RTXFx6aGljaGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiIsIi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICB3aWR0aDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MatMenuListItem, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuListItem", function() { return MatMenuListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







class MatMenuListItem {
}
let AppComponent = class AppComponent {
    constructor(authService, router, changeDetectorRef, dialog, location) {
        this.authService = authService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.dialog = dialog;
        this.location = location;
        this.menuList = [
            {
                menuLinkText: 'Registration',
                menuIcon: 'contacts',
                routerLink: 'register'
            },
            {
                menuLinkText: 'Scan',
                menuIcon: 'crop_free',
                routerLink: 'scan'
            },
            {
                menuLinkText: 'Change Password',
                menuIcon: 'refresh',
                routerLink: 'changepassword'
            }
        ];
    }
    ngOnInit() {
        this.authService.authState.subscribe(value => {
            this.isUserLoggedIn = value;
        });
    }
    redirect(menuItem) {
        this.router.navigate([menuItem.routerLink]);
        this.changeDetectorRef.detectChanges();
    }
    logout() {
        const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                title: 'Confirmation',
                message: 'Do you really want to logout?'
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result) {
                this.authService.logout();
                this.router.navigate(['login']);
            }
        });
    }
    back() {
        if (this.router.url === '/selectzone') {
            this.logout();
        }
        else {
            this.location.back();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
// export const API_URL = 'http://covidoutpass.local/api';
// export const API_URL = 'https://outpassdashboard.desuung.org.bt/api';
const API_URL = 'http://localhost:8000';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-zone/select-zone.component */ "./src/app/select-zone/select-zone.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/http-interceptor.service */ "./src/app/service/http-interceptor.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @zxing/ngx-scanner */ "./node_modules/@zxing/ngx-scanner/fesm2015/zxing-ngx-scanner.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _update_household_update_household_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./update-household/update-household.component */ "./src/app/update-household/update-household.component.ts");
/* harmony import */ var _register_unit_register_unit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./register-unit/register-unit.component */ "./src/app/register-unit/register-unit.component.ts");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/camera/camera.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/upload-image/upload-image.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
            _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_9__["SelectZoneComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"],
            _modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"],
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogComponent"],
            _update_household_update_household_component__WEBPACK_IMPORTED_MODULE_22__["UpdateHouseholdComponent"],
            _register_unit_register_unit_component__WEBPACK_IMPORTED_MODULE_23__["RegisterUnitComponent"],
            _camera_camera_component__WEBPACK_IMPORTED_MODULE_24__["CameraComponent"],
            _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_26__["UploadImageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_17__["ZXingScannerModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_25__["WebcamModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["HttpInterceptorService"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_20__["ModalComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/camera/camera.component.scss":
/*!**********************************************!*\
  !*** ./src/app/camera/camera.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".actionBtn {\n  cursor: pointer;\n}\n\n.mat-icon {\n  font-size: 40px;\n}\n\nul.links {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL0Q6XFxQUk9KRUNUU1xcemhpY2hhclxcZnJvbnRlbmQvc3JjXFxhcHBcXGNhbWVyYVxcY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRFFBO0VBQ0UsZUFBQTtBQ0xGOztBRE9BO0VBQ0Usb0JBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uQnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLy8gLnNuYXBzaG90IHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgaW1nIHtcclxuLy8gICAgIG1heC13aWR0aDogODAwcHg7XHJcbi8vICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLm1hdC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG51bC5saW5rcyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIiwiLmFjdGlvbkJ0biB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG51bC5saW5rcyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/camera/camera.component.ts":
/*!********************************************!*\
  !*** ./src/app/camera/camera.component.ts ***!
  \********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CameraComponent = class CameraComponent {
    constructor() {
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_2__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage);
        this.pictureTaken.emit(webcamImage);
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CameraComponent.prototype, "pictureTaken", void 0);
CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: __webpack_require__(/*! raw-loader!./camera.component.html */ "./node_modules/raw-loader/index.js!./src/app/camera/camera.component.html"),
        styles: [__webpack_require__(/*! ./camera.component.scss */ "./src/app/camera/camera.component.scss")]
    })
], CameraComponent);



/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.reactiveForm();
    }
    reactiveForm() {
        this.changePasswordForm = this.fb.group({
            oldPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            newPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    changePassword() { }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-dialog',
        template: __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/confirm-dialog/confirm-dialog.component.html"),
        styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/confirm-dialog/confirm-dialog.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmDialogComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  display: block;\n  top: 0px;\n  position: relative;\n  max-width: 262px;\n  background-color: #f2f8f9;\n  border-radius: 4px;\n  padding: 32px 24px;\n  margin: 12px;\n  text-decoration: none;\n  z-index: 0;\n  overflow: hidden;\n  border: 1px solid #f2f8f9;\n}\n.custom-card:hover {\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);\n  top: -4px;\n  border: 1px solid #cccccc;\n  background-color: white;\n}\n.custom-card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: -16px;\n  right: -16px;\n  background: #00838d;\n  height: 32px;\n  width: 32px;\n  border-radius: 32px;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transition: -webkit-transform 0.15s ease-out;\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n.custom-card:hover:before {\n  -webkit-transform: scale(2.15);\n          transform: scale(2.15);\n}\n.content {\n  padding: 16px;\n}\n.content > mat-card {\n  margin-bottom: 16px;\n}\n.css-grid {\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: 33% 67%;\n  grid-template-rows: 33% 67%;\n  height: 100%;\n  width: 100%;\n}\n.css-grid .css-grid-tile.top-left {\n  grid-column: 1/2;\n}\n.css-grid .css-grid-tile.top-right {\n  grid-column: 2/3;\n}\n.css-grid .css-grid-tile.bottom {\n  grid-column: 1/3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxQUk9KRUNUU1xcemhpY2hhclxcZnJvbnRlbmQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNBRjtBREVFO0VBQ0UscUNBQUE7RUFBQSw2QkFBQTtFQUNBLDZDQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxvREFBQTtFQUFBLDRDQUFBO0VBQUEsb0NBQUE7RUFBQSxzRUFBQTtBQ0RKO0FESUU7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDRko7QURNQTtFQUNFLGFBQUE7QUNIRjtBRE1BO0VBQ0UsbUJBQUE7QUNIRjtBRE1BO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIRjtBREtNO0VBQ0UsZ0JBQUE7QUNIUjtBREtNO0VBQ0UsZ0JBQUE7QUNIUjtBREtNO0VBQ0UsZ0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jdXN0b20tY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDI2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmOGY5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDMycHggMjRweDtcbiAgbWFyZ2luOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmY4Zjk7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgzOCwgMzgsIDM4LCAwLjIpO1xuICAgIHRvcDogLTRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRvcDogLTE2cHg7XG4gICAgcmlnaHQ6IC0xNnB4O1xuICAgIGJhY2tncm91bmQ6ICMwMDgzOGQ7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLW91dDtcbiAgfVxuXG4gICY6aG92ZXI6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIuMTUpO1xuICB9XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jc3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA4cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDY3JTsgLy8gdHdvIGNvbHVtbnNcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMyUgNjclOyAvLyB0d28gcm93c1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAuY3NzLWdyaWQtdGlsZSB7XG4gICAgICAmLnRvcC1sZWZ0IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgICAgfVxuICAgICAgJi50b3AtcmlnaHQge1xuICAgICAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgICB9XG4gICAgICAmLmJvdHRvbSB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiIsIi5jdXN0b20tY2FyZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDI2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmOGY5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDMycHggMjRweDtcbiAgbWFyZ2luOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmY4Zjk7XG59XG4uY3VzdG9tLWNhcmQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgzOCwgMzgsIDM4LCAwLjIpO1xuICB0b3A6IC00cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmN1c3RvbS1jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogLTE2cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYmFja2dyb3VuZDogIzAwODM4ZDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2Utb3V0O1xufVxuLmN1c3RvbS1jYXJkOmhvdmVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMi4xNSk7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5jc3MtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiA4cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDY3JTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMyUgNjclO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNzcy1ncmlkIC5jc3MtZ3JpZC10aWxlLnRvcC1sZWZ0IHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cbi5jc3MtZ3JpZCAuY3NzLWdyaWQtdGlsZS50b3AtcmlnaHQge1xuICBncmlkLWNvbHVtbjogMi8zO1xufVxuLmNzcy1ncmlkIC5jc3MtZ3JpZC10aWxlLmJvdHRvbSB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: Qrcode, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qrcode", function() { return Qrcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _service_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/sound.service */ "./src/app/service/sound.service.ts");








class Qrcode {
}
let DashboardComponent = class DashboardComponent {
    constructor(router, route, dialog, dataService, snackBar, soundService) {
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.soundService = soundService;
        this.qrcode = new Qrcode();
    }
    ngOnInit() {
        sessionStorage.setItem('buildingId', this.route.snapshot.params['id']);
    }
    redirect(path) {
        sessionStorage.setItem('transactionType', 'registration');
        this.router.navigate([path]);
    }
    gotocamera() {
        this.router.navigate(['camera']);
    }
    goback() {
        this.router.navigate(['map']);
    }
    update() {
        sessionStorage.setItem('transactionType', 'update');
        this.router.navigate(['map']);
    }
    // unit(){
    //   this.router.navigate([])
    // }
    regHouse() {
        this.router.navigate(['unit']);
    }
    unit() {
        this.router.navigate(['register']);
    }
    scan() {
        this.getLocation();
        const dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            width: '300px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(result => {
            this.dataService.validateQRCode('scan', result).subscribe(response => {
                this.soundService.successBeep();
                if (response.status_code === 'ACTIVE') {
                    if (response.data.building_id === 0) {
                        const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                            data: {
                                title: 'Alert!',
                                message: 'This QR Code is not associated with a building, please select a building.'
                            }
                        });
                        confirmDialog.afterClosed().subscribe(confirmResult => {
                            if (confirmResult) {
                                sessionStorage.setItem('transactionType', 'update');
                                sessionStorage.setItem('qrUUID', result);
                                this.router.navigate(['map']);
                            }
                        });
                        this.qrcode.qr_code_id = response.qr_code_id;
                        this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
                        this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
                        this.qrcode.household_detail_id = response.data.id;
                        this.qrcode.lat = this.latitude;
                        this.qrcode.lng = this.longitude;
                        this.qrcode.accuracy = this.accuracy;
                        this.dataService.postQRScan(this.qrcode).subscribe(resp => {
                            console.log('QR Scan successful');
                        });
                    }
                    else {
                        this.qrcode.qr_code_id = response.qr_code_id;
                        this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
                        this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
                        this.qrcode.household_detail_id = response.data.id;
                        this.qrcode.lat = this.latitude;
                        this.qrcode.lng = this.longitude;
                        this.qrcode.accuracy = this.accuracy;
                        this.dataService.postQRScan(this.qrcode).subscribe(resp => {
                            this.snackBar.open('QR code successfully scanned with the current location', '', {
                                duration: 5000,
                                verticalPosition: 'top',
                                panelClass: ['success-snackbar']
                            });
                        });
                    }
                }
                else if (response.status_code === 'INVALID') {
                    const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                        data: {
                            title: 'Alert!',
                            message: 'The QR code is invalid. Please reissue a new QR code?'
                        }
                    });
                    confirmDialog.afterClosed().subscribe(confirmResult => {
                        if (confirmResult) {
                            this.router.navigate(['map']);
                            sessionStorage.setItem('requestType', 'SCAN');
                            sessionStorage.setItem('qrCodeId', 'NA');
                            sessionStorage.setItem('transactionType', 'registration');
                        }
                    });
                }
                else if (response.status_code === 'INACTIVE') {
                    const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                        data: {
                            title: 'Alert!',
                            message: 'Scan failed, this QR Code has not been registered with any household. Please register a new household?'
                        }
                    });
                    confirmDialog.afterClosed().subscribe(confirmResult => {
                        if (confirmResult) {
                            this.router.navigate(['map']);
                            sessionStorage.setItem('requestType', 'REGISTER');
                            sessionStorage.setItem('qrCodeId', response.qr_code_id);
                            sessionStorage.setItem('transactionType', 'registration');
                        }
                    });
                }
                else {
                    this.snackBar.open('QR Code scan failed, please try again.', '', {
                        duration: 5000,
                        verticalPosition: 'top',
                        panelClass: ['error-snackbar']
                    });
                }
            }, err => {
                this.soundService.failureBeep();
                this.snackBar.open('QR Code scan failed, please try again.', '', {
                    duration: 5000,
                    verticalPosition: 'top',
                    panelClass: ['error-snackbar']
                });
            });
        });
    }
    getLocation() {
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
        }
        else {
            console.error('No support for geolocation');
        }
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _service_sound_service__WEBPACK_IMPORTED_MODULE_7__["SoundService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 200px;\n  margin: 0px auto 20px;\n  z-index: -1;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 236px;\n  font-weight: 200;\n  margin: 0px;\n  color: #211b19;\n  text-transform: uppercase;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound .notfound-404 h2 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #211b19;\n  background: #fff;\n  padding: 10px 5px;\n  margin: auto;\n  display: inline-block;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.notfound a {\n  font-family: \"Montserrat\", sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 13px 23px;\n  background: #ff6300;\n  font-size: 18px;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n}\n\n.notfound a:hover {\n  color: #ff6300;\n  background: #211b19;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 h1 {\n    font-size: 148px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 148px;\n    margin: 0px auto 10px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 86px;\n  }\n\n  .notfound .notfound-404 h2 {\n    font-size: 16px;\n  }\n\n  .notfound a {\n    padding: 7px 15px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvRDpcXFBST0pFQ1RTXFx6aGljaGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcZXJyb3JcXGVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVVLHNCQUFBO0FDQ1Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0NBQUE7RUFFUSxnQ0FBQTtBQ0NWOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBRVEsZ0NBQUE7QUNDVjs7QURFQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGdCQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHFCQUFBO0VDQUY7O0VERUE7SUFDRSxlQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7O0VEQUE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbiNub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMzZweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMjExYjE5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzIxMWIxOTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEzcHggMjNweDtcbiAgYmFja2dyb3VuZDogI2ZmNjMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLm5vdGZvdW5kIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNjMwMDtcbiAgYmFja2dyb3VuZDogIzIxMWIxOTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiAxNDhweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcbiAgfVxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiA4NnB4O1xuICB9XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLm5vdGZvdW5kIGEge1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuIiwiKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuI25vdGZvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQge1xuICBtYXgtd2lkdGg6IDUyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjM2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzIxMWIxOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzIxMWIxOTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTNweCAyM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmY2MzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4ubm90Zm91bmQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmY2MzAwO1xuICBiYWNrZ3JvdW5kOiAjMjExYjE5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LXNpemU6IDE0OHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcbiAgfVxuXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LXNpemU6IDg2cHg7XG4gIH1cblxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLm5vdGZvdW5kIGEge1xuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFBST0pFQ1RTXFx6aGljaGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn1cbiIsIi5teS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VhNjE1Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let LoginComponent = class LoginComponent {
    constructor(router, fb, authService, snackBar) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.hide = true;
        this.submitted = false;
    }
    ngOnInit() {
        this.reactiveForm();
    }
    get f() { return this.loginForm.controls; }
    reactiveForm() {
        this.loginForm = this.fb.group({
            cid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.loginForm.controls.cid.setValue(localStorage.getItem('loginId'));
    }
    login() {
        this.submitted = true;
        if (this.loginForm.valid) {
            const loginId = this.loginForm.get('cid').value;
            const password = this.loginForm.get('password').value;
            this.authService.validateLogin(loginId, password).subscribe(response => {
                sessionStorage.setItem('userId', response.data.id);
                localStorage.setItem('loginId', loginId);
                this.router.navigate(['selectzone']);
                this.snackBar.open('Welcome Desuup ' + response.data.username, '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }, error => {
                this.submitted = false;
                this.snackBar.open('Invalid login credentials, please try again', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
                console.log(error);
            });
        }
        // this.router.navigate(['selectzone']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: 112px;\n}\n\n.map-frame {\n  border: 2px solid black;\n  height: 100%;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n.menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.btnStyle {\n  cursor: pointer;\n  background-color: #4D90FE;\n  border-radius: 15px;\n  background-image: -moz-linear-gradient(center top, #4D90FE, #4787ED);\n  border: 1px solid #3079ED;\n  color: #FFFFFF;\n  padding: 4px;\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0Q6XFxQUk9KRUNUU1xcemhpY2hhclxcZnJvbnRlbmQvc3JjXFxhcHBcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvRUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTEycHg7XG59XG5cbi5tYXAtZnJhbWUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5idG5TdHlsZSB7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ5MEZFO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgdG9wICwgIzREOTBGRSwgIzQ3ODdFRCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDc5RUQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6MjglXG59XG4iLCIubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAxMTJweDtcbn1cblxuLm1hcC1mcmFtZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJ0blN0eWxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ5MEZFO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChjZW50ZXIgdG9wLCAjNEQ5MEZFLCAjNDc4N0VEKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMwNzlFRDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMjglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: Building, MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");









class Building {
}
let MapComponent = class MapComponent {
    constructor(http, router, dataService, snackBar, dialog, zone) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.zone = zone;
        this.isAddAllowed = false;
        this.greenMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-green.png',
            iconSize: [15, 15]
        });
        this.redMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-red.png',
            iconSize: [15, 15]
        });
        this.myMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-icon.png',
            iconSize: [20, 20]
        });
        this.building = new Building();
    }
    ngOnInit() {
        this.renderMap();
    }
    getMyLocation() {
        if (navigator.geolocation) {
            const iconRetinaUrl = 'assets/mymarker.png';
            const iconUrl = 'assets/mymarker.png';
            const iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
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
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.latitude, this.longitude], { icon: iconDefault }).addTo(this.map)
                        .bindPopup('You are here')
                        .openPopup();
                    this.map.flyTo([this.latitude, this.longitude], 19);
                    navigator.geolocation.clearWatch(this.watchId);
                }
                else {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.latitude, this.longitude], { icon: iconDefault }).addTo(this.map)
                        .bindPopup('You are here')
                        .openPopup();
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"]([this.latitude, this.longitude], {
                        color: '#3498db',
                        fillColor: '#3498db',
                        fillOpacity: 0.3,
                        radius: this.accuracy
                    }).addTo(this.map);
                    this.map.flyTo([this.latitude, this.longitude], 19);
                }
                // myMarker = L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
                // .bindPopup('You are here')
                // .openPopup();
                // myCircle = L.circle([this.latitude, this.longitude], {
                //   color: '#3498db',
                //   fillColor: '#3498db',
                //   fillOpacity: 0.5,
                //   radius: position.coords.accuracy
                // }).addTo(this.map);
                // this.map.flyTo([this.latitude, this.longitude], 19);
            }, error => {
                console.error('No support for geolocation');
            }, options);
        }
    }
    getLocation() {
        if (navigator.geolocation) {
            const iconRetinaUrl = 'assets/mymarker.png';
            const iconUrl = 'assets/mymarker.png';
            const iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
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
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.latitude, this.longitude], { icon: iconDefault }).addTo(this.map)
                        .bindPopup('You are here')
                        .openPopup();
                    this.map.flyTo([this.latitude, this.longitude], 19);
                    navigator.geolocation.clearWatch(this.watchId);
                }
                else {
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]([this.latitude, this.longitude], { icon: iconDefault }).addTo(this.map)
                        .bindPopup('You are here')
                        .openPopup();
                    leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"]([this.latitude, this.longitude], {
                        color: '#3498db',
                        fillColor: '#3498db',
                        fillOpacity: 0.3,
                        radius: this.accuracy
                    }).addTo(this.map);
                    this.map.flyTo([this.latitude, this.longitude], 19);
                }
                // L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
                // .bindPopup('You are here')
                // .openPopup();
                // L.circle([this.latitude, this.longitude], {
                //   color: '#3498db',
                //   fillColor: '#3498db',
                //   fillOpacity: 0.5,
                //   radius: position.coords.accuracy
                // }).addTo(this.map);
                // this.map.flyTo([this.latitude, this.longitude], 19);
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
            // this.watchId = navigator.geolocation.watchPosition(location => {
            //   if (location) {
            //     this.zone.run(() => {
            //       this.latitude = location.coords.latitude;
            //       this.longitude = location.coords.longitude;
            //       this.accuracy = location.coords.accuracy;
            //       if (this.accuracy > 100) {
            //         L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
            //         .bindPopup('You are here')
            //         .openPopup();
            //         this.map.flyTo([this.latitude, this.longitude], 19);
            //         navigator.geolocation.clearWatch(this.watchId);
            //       } else {
            //         L.marker([this.latitude, this.longitude], {icon: iconDefault}).addTo(this.map)
            //         .bindPopup('You are here')
            //         .openPopup();
            //         L.circle([this.latitude, this.longitude], {
            //           color: '#3498db',
            //           fillColor: '#3498db',
            //           fillOpacity: 0.3,
            //           radius: this.accuracy
            //         }).addTo(this.map);
            //         this.map.flyTo([this.latitude, this.longitude], 19);
            //         navigator.geolocation.clearWatch(this.watchId);
            //       }
            //     });
            //   }
            // }, err => {
            //   if (err.code === 0) {
            //     this.snackBar.open('Couldnot pull your location, please try again later', '', {
            //       verticalPosition: 'top',
            //       duration: 3000
            //     });
            //   }
            //   if (err.code === 1) {
            //     this.snackBar.open('Location service is disabled, please enable it and try again', '', {
            //       verticalPosition: 'top',
            //       duration: 3000
            //     });
            //   }
            //   if (err.code === 2) {
            //     this.snackBar.open('Your location couldnot be determined', '', {
            //       verticalPosition: 'top',
            //       duration: 3000
            //     });
            //   }
            //   if (err.code === 3) {
            //     this.snackBar.open('Couldnot get your location', '', {
            //       verticalPosition: 'top',
            //       duration: 3000
            //     });
            //   }
            // });
        }
        else {
            console.error('No support for geolocation');
        }
    }
    renderMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map').setView([89.64191, 27.4712], 13);
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            minZoom: 13,
            attribution: ''
        });
        tiles.addTo(this.map);
        const streeTile = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
            layers: 'bhutan:street_11august',
            maxZoom: 20,
            minZoom: 13,
            format: 'image/png',
            transparent: true
        });
        streeTile.addTo(this.map);
        const bldgTile = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
            layers: 'bhutan:building_numbers_11august',
            maxZoom: 20,
            minZoom: 13,
            format: 'image/png',
            transparent: true
        });
        bldgTile.addTo(this.map);
        this.onMapReady(this.map);
        let newMarker;
        this.map.on('click', ($e) => {
            if (this.isAddAllowed) {
                if (newMarker !== undefined) {
                    this.map.removeLayer(newMarker);
                }
                newMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]($e.latlng, { icon: this.myMarker }).addTo(this.map);
                this.presentAlert($e.latlng);
            }
        });
    }
    onMapReady(map) {
        const zoneId = Number(sessionStorage.getItem('subZoneId'));
        // this.http.get(`assets/geojson/${zoneId}.geojson`).subscribe((json: any) => {
        //   console.log(json);
        //   this.json = json;
        //   const geoJson = L.geoJSON(this.json, {
        //     onEachFeature: (feature, layer) => {
        //         layer.on('click', (e) => {
        //           this.buildingId = feature.properties.id;
        //           if (sessionStorage.getItem('transactionType') === 'registration') {
        //             this.router.navigate(['register', this.buildingId]);
        //           } else {
        //             this.router.navigate(['update-household', this.buildingId]);
        //           }
        //           this.snackBar.open('Building number ' + this.buildingId + ' was successfully selected', '', {
        //             duration: 3000,
        //             verticalPosition: 'top'
        //           });
        //         });
        //       }, pointToLayer: (feature, latLng) => {
        //         if (feature.properties.status === 'COMPLETED') {
        //           return L.marker(latLng, {icon: this.greenMarker});
        //         } else {
        //           return L.marker(latLng, {icon: this.redMarker});
        //         }
        //       }
        //     }).addTo(map);
        //   map.fitBounds(geoJson.getBounds());
        //   this.getLocation();
        // });
        // this.http.get(`https://outpassdashboard.desuung.org.bt/api/buildings?sub_zone_id=${zoneId}`).subscribe((json: any) => {
        this.http.get(`${_app_constants__WEBPACK_IMPORTED_MODULE_8__["API_URL"]}/get-buildings-json/${zoneId}`).subscribe((json) => {
            this.json = json;
            console.log(json);
            const geoJson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](this.json, {
                onEachFeature: (feature, layer) => {
                    layer.on('click', (e) => {
                        this.buildingId = feature.properties.building_id;
                        this.router.navigate(['dashboard', this.buildingId]);
                        // this.router.navigate(['dashboard'])
                        this.snackBar.open('Building number ' + this.buildingId + ' was successfully selected', '', {
                            duration: 5000,
                            verticalPosition: 'top',
                            panelClass: ['success-snackbar']
                        });
                    });
                }, pointToLayer: (feature, latLng) => {
                    if (feature.properties.status == 'INCOMPLETE') {
                        return leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](latLng, { icon: this.redMarker });
                    }
                    else {
                        return leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](latLng, { icon: this.greenMarker });
                    }
                }
            }).addTo(map);
            map.fitBounds(geoJson.getBounds());
            this.getLocation();
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
        const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], {
            data: {
                title: 'Confirmation',
                message: 'Are you sure you want to add the selected building?'
            }
        });
        confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
                this.building.lat = latlng.lat;
                this.building.lng = latlng.lng;
                this.building.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
                this.dataService.postNewBuilding(this.building).subscribe(response => {
                    console.log(response);
                    this.buildingId = response.data.id;
                    this.snackBar.open('Building number ' + this.buildingId + ' has been successfully identified', '', {
                        duration: 3000,
                        verticalPosition: 'top',
                        panelClass: ['success-snackbar']
                    });
                    if (sessionStorage.getItem('transactionType') === 'registration') {
                        this.router.navigate(['register', this.buildingId]);
                    }
                    else {
                        this.router.navigate(['update-household', this.buildingId]);
                    }
                });
            }
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ModalComponent = class ModalComponent {
    constructor(dialogRef, snackBar, dataService, router) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.router = router;
        dialogRef.disableClose = true;
        dialogRef.backdropClick().subscribe(() => {
            dialogRef.disableClose = true;
        });
    }
    ngOnInit() {
    }
    onCodeResult(resultString) {
        this.dialogRef.close(resultString);
        navigator.vibrate(200);
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html"),
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/register-unit/register-unit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/register-unit/register-unit.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin-top: 4px;\n  -webkit-padding-start: 10px;\n          padding-inline-start: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdW5pdC9EOlxcUFJPSkVDVFNcXHpoaWNoYXJcXGZyb250ZW5kL3NyY1xcYXBwXFxyZWdpc3Rlci11bml0XFxyZWdpc3Rlci11bml0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci11bml0L3JlZ2lzdGVyLXVuaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtVQUFBLDBCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci11bml0L3JlZ2lzdGVyLXVuaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHg7XHJcbn0iLCJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register-unit/register-unit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-unit/register-unit.component.ts ***!
  \**********************************************************/
/*! exports provided: BuildingData, RegisterUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingData", function() { return BuildingData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUnitComponent", function() { return RegisterUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






class BuildingData {
}
let RegisterUnitComponent = class RegisterUnitComponent {
    constructor(fb, router, dataService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.showOtherField = false;
        this.atms = [
            { id: '0', name: 'PNB', checked: false },
            { id: '1', name: 'BNB', checked: false },
            { id: '2', name: 'BOB', checked: false },
            { id: '3', name: 'TBank', checked: false },
            { id: '4', name: 'BDBL', checked: false },
        ];
        this.uses = [
            { id: '1', name: "Residential" },
            { id: '2', name: "Commercial" },
            { id: '3', name: "Mixed User" },
            { id: '4', name: "Institution" },
            { id: '5', name: "School" },
            { id: '6', name: "Religious" },
            { id: '7', name: "Hospital" },
            { id: '8', name: "Religious" },
            { id: '9', name: "Others" },
        ];
        this.buildingData = new BuildingData();
    }
    ngOnInit() {
        this.reactiveForms();
        this.buildingId = Number(sessionStorage.getItem('buildingId'));
    }
    addbuilding() {
        this.router.navigate(['dashboard']);
    }
    atmSelect(atm, $event) {
        this.atms[atm.id].checked = $event.checked;
    }
    selectUse($event) {
        this.buildingUse = this.uses[$event.value - 1]['name'];
        if ($event.value === '9') {
            this.showOtherField = true;
        }
        else {
            this.showOtherField = false;
        }
    }
    submit() {
        let atmdata = [];
        this.atms.forEach((item, index) => {
            if (item['checked'] === true) {
                atmdata.push({ "building_id": this.buildingId, "type": item['name'] });
            }
        });
        this.buildingData.building_id = this.buildingId;
        this.buildingData.building_name = this.buildingform.get('buildingNameControl').value;
        this.buildingData.owner_name = this.buildingform.get('ownerNameControl').value;
        this.buildingData.contact = this.buildingform.get('contactControl').value;
        if (this.buildingUse === "Others") {
            this.buildingUse = this.buildingform.get('otherUseControl').value;
        }
        this.buildingData.use = this.buildingUse;
        this.dataService.updateBuilding(this.buildingData).subscribe(response => {
            if (response.success === "true") {
                if (atmdata.length > 0) {
                    let jsonobjet = {
                        "atms": atmdata
                    };
                    this.registerAtm(jsonobjet);
                }
                this.router.navigate(['dashboard', this.buildingId]);
                this.snackBar.open('Building registered', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }
            else if (response.success === "false") {
                this.snackBar.open('Could not register building' + response.msg, '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
            else if (response.success === "error") {
                this.snackBar.open('Error registering building', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
        });
    }
    registerAtm(atms) {
        this.dataService.postAtms(atms).subscribe(response => {
            if (response['success'] === "true") {
                this.router.navigate(['dashboard', this.buildingId]);
                this.snackBar.open('Building registered', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }
            else {
                this.snackBar.open('Building registration error', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
        });
    }
    reactiveForms() {
        this.buildingform = this.fb.group({
            buildingNameControl: [''],
            ownerNameControl: [''],
            contactControl: [''],
            otherUseControl: ['']
        });
    }
};
RegisterUnitComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
RegisterUnitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-unit',
        template: __webpack_require__(/*! raw-loader!./register-unit.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-unit/register-unit.component.html"),
        styles: [__webpack_require__(/*! ./register-unit.component.scss */ "./src/app/register-unit/register-unit.component.scss")]
    })
], RegisterUnitComponent);



/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.myLocation-button {\n  width: 42px;\n  border-radius: 23px;\n  height: 42px;\n  background: #ffffffa3;\n  margin-bottom: 20px;\n  border: none;\n}\n\n.leaflet-message {\n  margin-bottom: 20px;\n  font-size: 13px;\n  font-weight: bold;\n  color: white;\n  background-color: #df1515;\n  padding: 5px;\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXFBST0pFQ1RTXFx6aGljaGFyXFxmcm9udGVuZC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm15TG9jYXRpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmEzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sZWFmbGV0LW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjE1MTU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuIiwiLm15LWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5teUxvY2F0aW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZhMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubGVhZmxldC1tZXNzYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGYxNTE1O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: Unit, Shop, Household, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Household", function() { return Household; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");






class Unit {
}
class Shop {
}
class Household {
}
let RegisterComponent = class RegisterComponent {
    constructor(fb, route, dialog, dataService, router, snackBar) {
        this.fb = fb;
        this.route = route;
        this.dialog = dialog;
        this.dataService = dataService;
        this.router = router;
        this.snackBar = snackBar;
        this.showScanner = false;
        this.disableForm = false;
        this.displayForm = true;
        this.displayCamera = false;
        this.displayShopForm = false;
        this.displayResdForm = false;
        this.showOtherType = false;
        this.showOtherShopType = false;
        this.nationalities = [
            { id: 'true', name: 'yes' },
            { id: 'false', name: 'no' }
        ];
        this.shoptypes = [
            { id: '1', name: 'Grocery Shop' },
            { id: '2', name: 'Liquor Shop' },
            { id: '3', name: 'Pharmacy' },
            { id: '4', name: 'Meat Shop' },
            { id: '5', name: 'Vegetable Shop' },
            { id: '6', name: 'Others' },
        ];
        this.unittypes = [
            { id: '1', name: 'Shop' },
            { id: '2', name: 'Residential' },
            { id: '3', name: 'Office' },
            { id: '4', name: 'Others' },
        ];
        this.household = new Household();
        this.shop = new Shop();
        this.unit = new Unit();
    }
    ngOnInit() {
        this.buildingId = Number(sessionStorage.getItem('buildingId'));
        this.reactiveForms();
    }
    reactiveForms() {
        this.registerForm = this.fb.group({
            mobileNoControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            householdControl: [''],
            diffabledControl: [''],
        });
        this.shopform = this.fb.group({
            shopTypeControl: [''],
            shopNameControl: [''],
            shopPhControl: [''],
            otherShopControl: ['']
        });
        this.unitform = this.fb.group({
            unitTypeControl: [''],
            unitIdControl: [''],
            otherUnitUseControl: [''],
        });
        this.ageGender = this.fb.group({
            male10Control: [''],
            male1060Control: [''],
            male60Control: [''],
            female10Control: [''],
            female1060Control: [''],
            female60Control: [''],
        });
    }
    submit() {
        // this.router.navigate(['dashboard']);
        this.registerUnit();
    }
    selectShopType($event) {
        this.showOtherShopType = false;
        this.shopUse = this.shoptypes[$event.value - 1]['name'];
        console.log(this.shopUse);
        if ($event.value === '6') {
            this.showOtherShopType = true;
        }
    }
    changeDiff($event) {
        this.displayResdForm = false;
        this.displayShopForm = false;
        this.showOtherType = false;
        this.unitUse = this.unittypes[$event.value - 1]['name'];
        if ($event.value === '1') {
            this.displayShopForm = true;
        }
        else if ($event.value === '2') {
            this.displayResdForm = true;
        }
        else if ($event.value === '4') {
            this.showOtherType = true;
        }
    }
    registerUnit() {
        this.unit.unit_name = this.unitform.get('unitIdControl').value;
        this.unit.building_id = Number(sessionStorage.getItem('buildingId'));
        if (this.unitUse == 'Others') {
            this.unitUse = this.unitform.get('otherUnitUseControl').value;
        }
        this.dataService.postUnit(this.unit).subscribe(response => {
            if (response.success === "true") {
                this.unitId = response.data.id;
                if (this.unitUse === "Shop") {
                    this.registerShop(this.unitId);
                }
                else if (this.unitUse === "Residential") {
                    this.registerHousehold(this.unitId);
                }
                else {
                    this.snackBar.open('Registration complete', '', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        panelClass: ['success-snackbar']
                    });
                    this.router.navigate(['dashboard', this.buildingId]);
                }
            }
            else if (response.success === "false") {
                this.snackBar.open('Cannot register unit', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
            else if (response.success === "error") {
                this.snackBar.open('Error Registering unit', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
        });
    }
    registerHousehold(unitid) {
        this.household.building_id = Number(sessionStorage.getItem('buildingId'));
        this.household.contact = this.registerForm.get('mobileNoControl').value;
        this.household.hh_name = this.registerForm.get('householdControl').value;
        this.household.different_abled = this.registerForm.get('diffabledControl').value;
        this.household.male_10 = this.ageGender.get('male10Control').value;
        this.household.female_10 = this.ageGender.get('female10Control').value;
        this.household.male_10_60 = this.ageGender.get('male1060Control').value;
        this.household.female_10_60 = this.ageGender.get('female1060Control').value;
        this.household.male_60 = this.ageGender.get('male60Control').value;
        this.household.female_60 = this.ageGender.get('female60Control').value;
        this.household.unit_id = unitid;
        this.dataService.postHousehold(this.household).subscribe(response => {
            if (response.success === "true") {
                this.router.navigate(['dashboard', this.buildingId]);
                this.snackBar.open('Household Registration Complete', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }
            else if (response.success === "false") {
                this.snackBar.open('Could not register Household' + response.msg, '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
            else if (response.success === "error") {
                this.snackBar.open('Error registering Household', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
        });
    }
    registerShop(unitid) {
        this.shop.building_id = Number(sessionStorage.getItem("buildingId"));
        this.shop.contact = this.shopform.get('shopPhControl').value;
        this.shop.name = this.shopform.get('shopNameControl').value;
        if (this.shopUse === "Others") {
            this.shopUse = this.shopform.get('otherShopControl').value;
        }
        this.shop.unit_id = unitid;
        this.shop.type = this.shopUse;
        this.dataService.postShop(this.shop).subscribe(response => {
            if (response.success === "true") {
                this.router.navigate(['dashboard', this.buildingId]);
                this.snackBar.open('Shop Registration Complete', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }
            else if (response.success === "false") {
                this.snackBar.open('Could not register shop' + response.msg, '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
            else if (response.success === "error") {
                this.snackBar.open('Error registering Household', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
            }
        });
    }
    getLocation() {
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
        }
        else {
            console.error('No support for geolocation');
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/select-zone/select-zone.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-zone/select-zone.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXpvbmUvRDpcXFBST0pFQ1RTXFx6aGljaGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcc2VsZWN0LXpvbmVcXHNlbGVjdC16b25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWxlY3Qtem9uZS9zZWxlY3Qtem9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWxlY3Qtem9uZS9zZWxlY3Qtem9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mb3Jte1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5teS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/select-zone/select-zone.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-zone/select-zone.component.ts ***!
  \******************************************************/
/*! exports provided: SelectZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectZoneComponent", function() { return SelectZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");






let SelectZoneComponent = class SelectZoneComponent {
    constructor(router, fb, dataService, authService) {
        this.router = router;
        this.fb = fb;
        this.dataService = dataService;
        this.authService = authService;
        this.dzongkhags = [];
        this.zones = [];
        this.subZones = [];
        this.shops = [];
    }
    ngOnInit() {
        this.authService.authState.subscribe(value => {
            this.isUserLoggedIn = value;
        });
        this.reactiveForm();
        this.getDzongkhagList();
        const dzongkhagId = sessionStorage.getItem('dzongkhagId');
        const zoneId = sessionStorage.getItem('zoneId');
        const subZoneId = sessionStorage.getItem('subZoneId');
        const shopId = sessionStorage.getItem('shopId');
        this.getZoneList(dzongkhagId);
        this.getSubzoneList(zoneId);
        this.dzongkhag = dzongkhagId;
        this.zone = zoneId;
        this.subZone = subZoneId;
        this.shop = shopId;
    }
    reactiveForm() {
        this.zoneForm = this.fb.group({
            zoneControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            subZoneControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            shopControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            dzongkhagControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    getDzongkhagList() {
        this.dataService.getDzongkhags().subscribe(response => {
            this.dzongkhags = response.data;
        });
    }
    getZoneList(dzongkhagId) {
        this.dataService.getZones(dzongkhagId).subscribe(response => {
            this.zones = response.data;
        });
    }
    getSubzoneList(zoneId) {
        this.dataService.getSubZones(zoneId).subscribe(response => {
            this.subZones = response.data;
        });
    }
    redirectToDashboard() {
        if (this.zoneForm.valid) {
            sessionStorage.setItem('dzongkhagId', this.zoneForm.get('dzongkhagControl').value);
            sessionStorage.setItem('zoneId', this.zoneForm.get('zoneControl').value);
            sessionStorage.setItem('subZoneId', this.zoneForm.get('subZoneControl').value);
            sessionStorage.setItem('shopId', this.zoneForm.get('shopControl').value);
            this.router.navigate(['map']);
        }
    }
};
SelectZoneComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
SelectZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-zone',
        template: __webpack_require__(/*! raw-loader!./select-zone.component.html */ "./node_modules/raw-loader/index.js!./src/app/select-zone/select-zone.component.html"),
        styles: [__webpack_require__(/*! ./select-zone.component.scss */ "./src/app/select-zone/select-zone.component.scss")]
    })
], SelectZoneComponent);



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: TOKEN, AUTHENTICATED_USER, IS_AUTHENTICATED, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_AUTHENTICATED", function() { return IS_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const TOKEN = 'token';
const AUTHENTICATED_USER = 'authenticatedUser';
const IS_AUTHENTICATED = 'isAuthenticated';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    validateLogin(cid, password) {
        return this.http.post(`${_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"]}/login`, {
            cid,
            password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            sessionStorage.setItem(AUTHENTICATED_USER, cid);
            sessionStorage.setItem(TOKEN, `Bearer ${data.data.token}`);
            this.authState.next(true);
            return data;
        }));
    }
    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    }
    getAuthenticatedToken() {
        if (this.getAuthenticatedUser()) {
            return sessionStorage.getItem(TOKEN);
        }
    }
    setAuthenticatedUser(username) {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        this.authState.next(true);
    }
    isUserLoggedIn() {
        if (this.getAuthenticatedUser()) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
        sessionStorage.removeItem('zoneId');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('requestType');
        sessionStorage.removeItem('qrUUID');
        sessionStorage.removeItem('transactionType');
        sessionStorage.removeItem('qrCodeId');
        sessionStorage.removeItem('shopId');
        sessionStorage.removeItem('subZoneId');
        sessionStorage.removeItem('dzongkhagId');
        this.authState.next(false);
    }
    getItem(key) {
        return sessionStorage.getItem(key);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");






let DataService = class DataService {
    constructor(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    authenticateUser(uid, pass) {
        const user = {
            user: uid,
            password: pass
        };
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/login`, user, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDzongkhags() {
        return this.http
            .get(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/get-all-dzo`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getZones(dzongkhagId) {
        return this.http
            .get(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/get-zones/${dzongkhagId}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getSubZones(zoneId) {
        return this.http
            .get(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/get-subzones/${zoneId}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    validateQRCode(requestType, uuid) {
        return this.http
            .get(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/validate-qr/${requestType}/${uuid}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postRegistration(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/household-details`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postUpdateHouseHold(item, houseHoldId) {
        return this.http
            .put(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/household-details/${houseHoldId}`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postUnit(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/createunit`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postHousehold(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/create-household`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postShop(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/create-shop`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateBuilding(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/updatebuilding`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    uploadImg(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/upload-img`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postCompletion(buildingId) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/mark-building-completed/${buildingId}`, '', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postAtms(items) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/create-bulk-atm`, items, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postNewBuilding(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/buildings`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postQRScan(item) {
        return this.http
            .post(`${_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/scan`, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/service/http-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/http-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");



let HttpInterceptorService = class HttpInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const basicAuthHeaderString = this.authService.getAuthenticatedToken();
        const username = this.authService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpInterceptorService);



/***/ }),

/***/ "./src/app/service/route.guard.ts":
/*!****************************************!*\
  !*** ./src/app/service/route.guard.ts ***!
  \****************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");




let RouteGuard = class RouteGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        if (this.authService.isUserLoggedIn()) {
            if (this.isPageRefresh()) {
                this.router.navigateByUrl(this.getUrlWithoutSecondary(state));
                return false;
            }
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
    getUrlWithoutSecondary(routerStateSnapshot) {
        const urlTree = this.router.parseUrl(routerStateSnapshot.url);
        let segment = urlTree.root;
        while (segment && segment.children) {
            delete (segment.children.secondary);
            segment = segment.children[_angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]];
        }
        return (urlTree);
    }
    // determine if the current route-request is part of a page refresh.
    isPageRefresh() {
        this.subscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                return (!this.router.navigated);
            }
        });
        return;
    }
};
RouteGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RouteGuard);



/***/ }),

/***/ "./src/app/service/sound.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/sound.service.ts ***!
  \******************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SoundService = class SoundService {
    constructor() { }
    successBeep() {
        const audio = new Audio();
        audio.src = 'assets/scan.mp3';
        audio.load();
        audio.play();
    }
    failureBeep() {
        const audio = new Audio();
        audio.src = 'assets/errorsound.mp3';
        audio.load();
        audio.play();
    }
};
SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoundService);



/***/ }),

/***/ "./src/app/update-household/update-household.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/update-household/update-household.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.myLocation-button {\n  width: 42px;\n  border-radius: 23px;\n  height: 42px;\n  background: #ffffffa3;\n  margin-bottom: 20px;\n  border: none;\n}\n\n.leaflet-message {\n  margin-bottom: 20px;\n  font-size: 13px;\n  font-weight: bold;\n  color: white;\n  background-color: #df1515;\n  padding: 5px;\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWhvdXNlaG9sZC9EOlxcUFJPSkVDVFNcXHpoaWNoYXJcXGZyb250ZW5kL3NyY1xcYXBwXFx1cGRhdGUtaG91c2Vob2xkXFx1cGRhdGUtaG91c2Vob2xkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGRhdGUtaG91c2Vob2xkL3VwZGF0ZS1ob3VzZWhvbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtaG91c2Vob2xkL3VwZGF0ZS1ob3VzZWhvbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubXlMb2NhdGlvbi1idXR0b24ge1xuICB3aWR0aDogNDJweDtcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYTM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxlYWZsZXQtbWVzc2FnZSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmMTUxNTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4iLCIubXktZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm15TG9jYXRpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmEzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sZWFmbGV0LW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjE1MTU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/update-household/update-household.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/update-household/update-household.component.ts ***!
  \****************************************************************/
/*! exports provided: Qrcode, Household, UpdateHouseholdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qrcode", function() { return Qrcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Household", function() { return Household; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHouseholdComponent", function() { return UpdateHouseholdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");







class Qrcode {
}
class Household {
}
let UpdateHouseholdComponent = class UpdateHouseholdComponent {
    constructor(fb, route, dialog, dataService, router, snackBar) {
        this.fb = fb;
        this.route = route;
        this.dialog = dialog;
        this.dataService = dataService;
        this.router = router;
        this.snackBar = snackBar;
        this.disableForm = true;
        this.nationalities = [
            { id: 'BHUTANESE', name: 'Bhutanese' },
            { id: 'FOREIGN NATIONAL', name: 'Foreign National' }
        ];
        this.household = new Household();
    }
    ngOnInit() {
        this.buildingId = this.route.snapshot.params['id'];
        this.reactiveForms();
        this.getQRDetails();
    }
    reactiveForms() {
        this.updateForm = this.fb.group({
            mobileNoControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            totalMaleControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            totalFemaleControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ageOverFiftyControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ageBelowTenControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            nationalityControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            emergencyMobileNoControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    getQRDetails() {
        const qrUUID = sessionStorage.getItem('qrUUID');
        this.dataService.validateQRCode('scan', qrUUID).subscribe(response => {
            console.log(response);
            if (response.status_code === 'ACTIVE') {
                this.updateForm.controls.mobileNoControl.setValue(response.data.mobile_no);
                this.updateForm.controls.totalMaleControl.setValue(response.data.total_male);
                this.updateForm.controls.totalFemaleControl.setValue(response.data.total_female);
                this.updateForm.controls.ageOverFiftyControl.setValue(response.data.total_above_60);
                this.updateForm.controls.ageBelowTenControl.setValue(response.data.total_below_10);
                this.updateForm.controls.nationalityControl.setValue(response.data.nationality);
                this.updateForm.controls.emergencyMobileNoControl.setValue(response.data.emergency_contact_no);
                this.qrId = response.data.qr_code_id;
                this.houseHoldId = response.data.id;
                this.disableForm = false;
            }
            else if (response.status_code === 'INVALID') {
                const confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                    data: {
                        title: 'Alert!',
                        message: 'The QR code is invalid. Please reissue a new QR code?'
                    }
                });
                confirmDialog.afterClosed().subscribe(confirmResult => {
                    if (confirmResult) {
                        this.router.navigate(['map']);
                        sessionStorage.setItem('requestType', 'SCAN');
                    }
                });
            }
            else {
                // tslint:disable-next-line: max-line-length
                this.snackBar.open('Scan failed, this QR Code has not been registered with any household. Please register it and then scan.', '', {
                    duration: 5000,
                    verticalPosition: 'top',
                    panelClass: ['error-snackbar']
                });
            }
        }, err => {
            this.snackBar.open('QR Code scan failed, please try again.', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['error-snackbar']
            });
        });
    }
    update() {
        this.household.mobile_no = this.updateForm.get('mobileNoControl').value;
        this.household.total_male = this.updateForm.get('totalMaleControl').value;
        this.household.total_female = this.updateForm.get('totalFemaleControl').value;
        this.household.total_above_60 = this.updateForm.get('ageOverFiftyControl').value;
        this.household.total_below_10 = this.updateForm.get('ageBelowTenControl').value;
        this.household.nationality = this.updateForm.get('nationalityControl').value;
        this.household.emergency_contact_no = this.updateForm.get('emergencyMobileNoControl').value;
        this.household.id = this.houseHoldId;
        this.household.building_id = this.buildingId;
        this.household.qr_code_id = this.qrId;
        this.household.user_id = Number(sessionStorage.getItem('userId'));
        this.household._method = 'PUT';
        console.log(JSON.stringify(this.household));
        this.dataService.postUpdateHouseHold(this.household, this.houseHoldId).subscribe(response => {
            this.snackBar.open('Household detail update has been successfully done', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['success-snackbar']
            });
            this.updateForm.reset();
            this.router.navigate(['dashboard']);
        }, error => {
            this.snackBar.open('Household detail update failed, please try again', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['error-snackbar']
            });
            this.disableForm = true;
        });
    }
};
UpdateHouseholdComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
UpdateHouseholdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-household',
        template: __webpack_require__(/*! raw-loader!./update-household.component.html */ "./node_modules/raw-loader/index.js!./src/app/update-household/update-household.component.html"),
        styles: [__webpack_require__(/*! ./update-household.component.scss */ "./src/app/update-household/update-household.component.scss")]
    })
], UpdateHouseholdComponent);



/***/ }),

/***/ "./src/app/upload-image/upload-image.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snapshot {\n  text-align: center;\n}\n.snapshot img {\n  max-width: 300px;\n  max-height: 300px;\n}\n.mat-icon {\n  font-size: 40px;\n}\n.actionBtn {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWltYWdlL0Q6XFxQUk9KRUNUU1xcemhpY2hhclxcZnJvbnRlbmQvc3JjXFxhcHBcXHVwbG9hZC1pbWFnZVxcdXBsb2FkLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtaW1hZ2UvdXBsb2FkLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQ0E7RUFDSSxlQUFBO0FDRUo7QURBQTtFQUNFLGVBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc25hcHNob3R7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG4ubWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLmFjdGlvbkJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnNuYXBzaG90IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNuYXBzaG90IGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5hY3Rpb25CdG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/upload-image/upload-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/upload-image/upload-image.component.ts ***!
  \********************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let UploadImageComponent = class UploadImageComponent {
    constructor(router, dataService, snackBar) {
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.webcamImage = null;
    }
    ngOnInit() {
        this.buildingId = Number(sessionStorage.getItem('buildingId'));
    }
    clearImg() {
        this.webcamImage = null;
    }
    goback() {
        this.router.navigate(['dashboard', this.buildingId]);
    }
    uploadImg() {
        if (this.webcamImage) {
            let jsonObject = {
                "building_id": this.buildingId,
                "imageDataUrl": this.webcamImage.imageAsDataUrl
            };
            this.dataService.uploadImg(jsonObject).subscribe(response => {
                if (response.success === "true") {
                    this.router.navigate(['dashboard', this.buildingId]);
                    this.snackBar.open('Uploaded Image', '', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        panelClass: ['success-snackbar']
                    });
                }
                else if (response.success === "false") {
                    this.snackBar.open('Could not upload image' + response.msg, '', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        panelClass: ['error-snackbar']
                    });
                }
                else if (response.success === "error") {
                    this.snackBar.open('Error Uploading Image', '', {
                        duration: 5000,
                        verticalPosition: 'bottom',
                        panelClass: ['error-snackbar']
                    });
                }
            });
        }
    }
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
    }
};
UploadImageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
UploadImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-image',
        template: __webpack_require__(/*! raw-loader!./upload-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/upload-image/upload-image.component.html"),
        styles: [__webpack_require__(/*! ./upload-image.component.scss */ "./src/app/upload-image/upload-image.component.scss")]
    })
], UploadImageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\zhichar\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map