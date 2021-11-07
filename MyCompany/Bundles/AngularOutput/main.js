(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/user.component.ts");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supplier.component */ "./src/app/supplier.component.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product.component */ "./src/app/product.component.ts");
/* harmony import */ var _partner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partner.component */ "./src/app/partner.component.ts");
/* harmony import */ var _expend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expend.component */ "./src/app/expend.component.ts");
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purchase.component */ "./src/app/purchase.component.ts");












var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'Account/Login', component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'UserManagement', component: _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"] },
    { path: 'Supplier', component: _supplier_component__WEBPACK_IMPORTED_MODULE_7__["SupplierComponent"] },
    { path: 'Product', component: _product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"] },
    { path: 'Partner', component: _partner_component__WEBPACK_IMPORTED_MODULE_9__["PartnerComponent"] },
    { path: 'Expend', component: _expend_component__WEBPACK_IMPORTED_MODULE_10__["ExpendComponent"] },
    { path: 'Purchase', component: _purchase_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 body-zero\" *ngIf=\"isDisplayCampaign == true\">\n    <router-outlet></router-outlet>\n</div>\n<div id=\"div_dashboardmenu\" class=\"col-lg-12 body-zero\" [ngStyle]=\"{'display': isDisplayHome ? 'block' : 'none'}\">\r\n    <div id=\"menubar\" class=\"col-lg-2 body-zero\" align=\"center\">\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n            <li>\r\n                <a href=\"#\">\r\n                    <img src=\"/Content/Icon/profile3.png\" alt=\"profile\" style=\"height:85px;padding-top:15px\" />\r\n                    <br /><label style=\"padding-top:5px;\">Syafriadi</label>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav nav-pills nav-stacked\" *ngFor=\"let itemData of assignMenu\">            \r\n            <!--<li><a routerLink=\"/Home\" routerLinkActive=\"active\">Home</a></li>\r\n            <li><a routerLink=\"/UserManagement\" routerLinkActive=\"active\">Users</a></li>\r\n            <li><a routerLink=\"/Supplier\" routerLinkActive=\"active\">Supplier</a></li>\r\n            <li><a routerLink=\"/Partner\" routerLinkActive=\"active\">Partner</a></li>\r\n            <li><a routerLink=\"/Expend\" routerLinkActive=\"active\">Expenditure</a></li>-->\r\n            <li><a routerLink=\"{{itemData.RouterLink}}\" routerLinkActive=\"active\">{{itemData.MenuName}}</a></li>\r\n        </ul>\r\n    </div>\r\n    <div id=\"bodyplace\" class=\"col-lg-10\" style=\"padding-left:0px\">\r\n        <div class=\"jumbotron\" style=\"padding:5px 20px;background-color:#CFDFF3\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _models_UserTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/UserTemplate */ "./src/app/models/UserTemplate.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Angular';
        this.userLogin = new _models_UserTemplate__WEBPACK_IMPORTED_MODULE_3__["UserTemplate"];
        this.isDisplayCampaign = false;
        this.isDisplayHome = false;
        this.campaignID = 0;
        this.assignMenu = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.get("Dashboard/DisplayCampaign").subscribe(function (data) { _this.isDisplayCampaign = data; });
        this.dataService.get("Dashboard/DisplayHome").subscribe(function (data) { _this.isDisplayHome = data; });
        this.dataService.get("Dashboard/GetDashboardMenu").subscribe(function (data) { _this.assignMenu = data; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.component */ "./src/app/user.component.ts");
/* harmony import */ var _supplier_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./supplier.component */ "./src/app/supplier.component.ts");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product.component */ "./src/app/product.component.ts");
/* harmony import */ var _partner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./partner.component */ "./src/app/partner.component.ts");
/* harmony import */ var _expend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./expend.component */ "./src/app/expend.component.ts");
/* harmony import */ var _purchase_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./purchase.component */ "./src/app/purchase.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _data_formatdate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.formatdate */ "./src/app/data.formatdate.ts");



 //NgModel lives here














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _supplier_component__WEBPACK_IMPORTED_MODULE_10__["SupplierComponent"],
                _product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _partner_component__WEBPACK_IMPORTED_MODULE_12__["PartnerComponent"],
                _expend_component__WEBPACK_IMPORTED_MODULE_13__["ExpendComponent"],
                _purchase_component__WEBPACK_IMPORTED_MODULE_14__["PurchaseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"],
                _data_formatdate__WEBPACK_IMPORTED_MODULE_17__["FormatLocalDate"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard.component.html":
/*!******************************************!*\
  !*** ./src/app/dashboard.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 body-zero\" [ngStyle]=\"{'display': isDisplayCampaign ? 'block' : 'none'}\">\r\n    <div class=\"row\" style=\"margin-top:30px\">\r\n        <div class=\"col-lg-12\">\r\n            <div *ngFor=\"let itemData of Campaigns\" class=\"col-sm-6 col-md-3\">\r\n                <a href=\"#\" (click)=\"goToCampaign(itemData)\">\r\n                    <div align=\"center\" class=\"thumbnail\">\r\n                        <img src=\"{{itemData.IconPath}}\" class=\"home-image\" />\r\n                        <div class=\"caption\">\r\n                            <h4>{{itemData.CampaignName}}</h4>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard.component.ts":
/*!****************************************!*\
  !*** ./src/app/dashboard.component.ts ***!
  \****************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.isDisplayCampaign = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.get("Dashboard/DisplayCampaign").subscribe(function (data) { _this.isDisplayCampaign = data; });
        this.dataService.get("Dashboard/GetCampaigns").subscribe(function (data) { _this.Campaigns = data; });
    };
    DashboardComponent.prototype.goToCampaign = function (itemData) {
        this.isDisplayCampaign = false;
        this.dataService.get("Dashboard/GoToCampaign?id=" + itemData.CampaignID + "&campaignName=" + itemData.CampaignName).subscribe();
        this.router.navigateByUrl("");
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard-app',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data.formatdate.ts":
/*!************************************!*\
  !*** ./src/app/data.formatdate.ts ***!
  \************************************/
/*! exports provided: FormatLocalDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatLocalDate", function() { return FormatLocalDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var FormatLocalDate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FormatLocalDate, _super);
    function FormatLocalDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormatLocalDate.prototype.transform = function (value, args) {
        ///MMM/dd/yyyy 
        return _super.prototype.transform.call(this, value, "dd/MMM/yyyy");
    };
    FormatLocalDate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateFormat'
        })
    ], FormatLocalDate);
    return FormatLocalDate;
}(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]));



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//import { map } from 'rxjs/operators';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.endpoint = "";
        this.currency = "";
    }
    DataService.prototype.get = function (url) {
        return this.http.get(url);
    };
    DataService.prototype.post = function (url, model) {
        return this.http.post(url, model);
    };
    DataService.prototype.delete = function (url) {
        return this.http.get(url);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/expend.component.html":
/*!***************************************!*\
  !*** ./src/app/expend.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <!--Loading-->\r\n    <div align=\"center\" style=\"margin-top:10px\" [ngStyle]=\"{'display': mdlIsLoading ? 'block' : 'none'}\">\r\n        <img src=\"/Content/Icon/loading.gif\" style=\"width:40px\" />\r\n    </div>\r\n    <!--Loading End-->\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" (click)=\"newData()\" class=\"btn btn-danger box_button\" style=\"margin-top:19px\" title=\"Add {{title}}\"><i class=\"fa fa-cart-plus fa-3x\"></i></button>\r\n    </div>\r\n    <h2>Expenditure</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <!--<input type=\"text\" ng-model=\"search.SupplierName\" class=\"form-control box_button full-width\">-->\r\n                <input type=\"text\" #myInput [(ngModel)]=\"IDFaktur\" (input)=\"filterIndex(myInput.value)\" placeholder=\"Advanced search...\" class=\"form-control box_button full-width\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-index\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:15%\"><i class=\"fa fa-calculator\"></i></th>\r\n                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                <th style=\"width:60%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"IndexData?.length == 0\">\r\n                <td colspan=\"5\"><label>No records.</label></td>\r\n            </tr>\r\n            <!--<tr ng-repeat=\"m in IndexData | filter:search\">-->\r\n            <tr *ngFor=\"let itemData of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>\r\n                    {{itemData.IDFaktur}}\r\n                </td>\r\n                <td style=\"text-align:right\">{{itemData.Currency}}</td>\r\n                <td>{{itemData.SupplierName}}\r\n                    <br />{{itemData.PhoneNumber}}\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" (click)=\"detail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"detail\"><i class=\"fa fa-list fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<!--Modal Detail-->\r\n<div class=\"modal fade\" id=\"modalcontact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsExpend ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"detailModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-address-card\"></i> <label id=\"amountExpend\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <button type=\"button\" (click)=\"addDetail()\" class=\"btn btn-danger box_button\" [attr.title]=\"isAddDetail ? 'Add Detail' : 'Edit Detail'\"><i [ngClass]=\"isAddDetail ? 'fa fa-cart-arrow-down fa-3x' : 'fa fa-edit fa-3x'\"></i></button>\r\n                    </div>\r\n                    <div class=\"col-md-6 body-zero\">\r\n                        <h5 *ngIf=\"DetailData?.length > 0\" style=\"font-weight:600\"><i class=\"fa fa-calculator\"></i> {{selectedData.IDFaktur}}</h5>\r\n                        <div *ngIf=\"DetailData?.length == 0\" class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 body-zero\">No. Faktur</label>\r\n                            <div class=\"col-md-7\">\r\n                                <input [(ngModel)]=\"selectedData.IDFaktur\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:80%;width:80%\" />\r\n                            </div>\r\n                        </div>                    \r\n                    </div>\r\n                    <div class=\"col-md-4 body-zero\">                        \r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 body-zero\">Created</label>\r\n                            <div class=\"col-md-7\">\r\n                                <!--<input type=\"date\" [(ngModel)]=\"selectedData.CreatedDate | date:'yyyy-MM-dd'\" class=\"form-control\" style=\"max-width:140%;width:140%\" />-->\r\n                                <input type=\"date\" [value]=\"selectedData.Created | date:'yyyy-MM-dd'\"  (input)=\"selectedData.Created=parseDate($event.target.value)\" class=\"form-control\" style=\"max-width:140%;width:140%\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"DetailData?.length > 0\" class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <h4 style=\"font-weight:600\"><i class=\"fa fa-money\"></i> {{selectedData.Currency}}</h4>\r\n                    </div>\r\n                    <h5 style=\"font-weight:600\"><i class=\"fa fa-user-circle\"></i> {{selectedData.SupplierName}}</h5>\r\n                </div>\r\n                <div *ngIf=\"DetailData?.length == 0\" class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <h4 style=\"font-weight:600\"><i class=\"fa fa-money\"></i> {{selectedData.Currency}}</h4>\r\n                    </div>\r\n                    <div class=\"col-md-9 body-zero\">\r\n                        <label class=\"control-label col-md-2 body-zero\">Supplier</label>\r\n                        <div class=\"col-md-8\">\r\n                            <select [(ngModel)]=\"selectedData.IDSupplier\" (change)=\"newDetail()\" class=\"form-control\" style=\"max-width:90%;width:90%\">\r\n                                <option *ngFor=\"let c of ComboSupplier\" [ngValue]=\"c.ComboID\">{{c.ComboName}}</option>\r\n                            </select>\r\n                        </div> \r\n                    </div>                                       \r\n                </div>\r\n                <div class=\"row body-content\" [ngStyle]=\"{'display': mdlIsDetail ? 'block' : 'none'}\">\r\n                    <!--<div class=\"form-horizontal\">-->\r\n                        <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                            <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                        </div>\r\n                    <hr style=\"margin-top:5px;margin-bottom:5px\" />\r\n                    <!--<div class=\"row body-content margin-top-10\">\r\n                        <table class=\"table\">\r\n                            <tr *ngFor=\"let combo of ComboSupplier\">\r\n                                <td>{{combo.ComboID}}</td>\r\n                                <td>{{combo.ComboName}}</td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>-->\r\n                    <div class=\"row body-content\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Product Name</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\" style=\"padding-left:0px;padding-right:5px\">\r\n                                        <input id=\"IDExpend\" type=\"hidden\" [(ngModel)]=\"selectedDetail.IDExpend\" />\r\n                                        <input id=\"IDProduct\" type=\"hidden\" [(ngModel)]=\"selectedDetail.IDProduct\" />\r\n                                        <input [(ngModel)]=\"selectedDetail.ProductName\" (keyup)=\"searchProduct(selectedDetail.ProductName, selectedData.IDSupplier)\" placeholder=\"Product Name\" class=\"form-control full-width\" />\r\n                                        <div>\r\n                                            <ul *ngIf=\"flag\" class=\"dropdown-menu\" style=\"display:block;position:relative;width:100%;max-width:100%;height:auto\">\r\n                                                <li *ngFor=\"let product of AutoCompleteProduct\">\r\n                                                    <a (click)=\"onselectProduct(product)\">{{product.ProductName}}</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>                    \r\n                    <div class=\"row body-content\">\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Volume</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <input type=\"number\" [(ngModel)]=\"selectedDetail.Volume\" placeholder=\"Volume\" (blur)=\"makeAmountDetail()\" class=\"form-control\" style=\"max-width:100%;width:100%;text-align:right\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Buy Price</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <input type=\"number\" [(ngModel)]=\"selectedDetail.BuyPrice\" placeholder=\"0\" (blur)=\"makeAmountDetail()\" class=\"form-control\" style=\"max-width:100%;width:100%;text-align:right\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Buy Amount</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <input type=\"text\" [(ngModel)]=\"selectedDetail.CurrencyBuyAmount\" placeholder=\"0\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:100%;width:100%;text-align:right\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Sell Price</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <input type=\"number\" [(ngModel)]=\"selectedDetail.SellPrice\" placeholder=\"0\" (blur)=\"makeAmountDetail()\" class=\"form-control\" style=\"max-width:100%;width:100%;text-align:right\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-3\">\r\n                            <div class=\"row body-zero\">\r\n                                <label>Sell Amount</label>\r\n                            </div>\r\n                            <div class=\"row body-zero\">\r\n                                <input type=\"text\" [(ngModel)]=\"selectedDetail.CurrencySellAmount\" placeholder=\"0\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:100%;width:100%;text-align:right\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row body-content margin-top-10\" style=\"overflow:auto;height:200px\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-index\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th style=\"width:40%\"><i class=\"fa fa-shopping-cart\"></i></th>\r\n                                <th style=\"width:5%;text-align:right\"><i class=\"fa fa-line-chart\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-credit-card\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-credit-card\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"DetailData?.length == 0\">\r\n                                <td colspan=\"6\"><label>No records.</label></td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let itemData of DetailData; let idx = index\">\r\n                                <td>{{idx + 1}}</td>\r\n                                <td>\r\n                                    <input type=\"hidden\" [(ngModel)]=\"itemData.IDProduct\" />\r\n                                    {{itemData.ProductName}}\r\n                                    <br />Weight: {{itemData.Weight}} &nbsp;&nbsp;&nbsp;Size: {{itemData.Size}}\r\n                                </td>\r\n                                <td style=\"text-align:right\">{{itemData.Volume}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.BuyPrice\" /> {{(itemData.CurrencyBuy)}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.BuyAmount\" /> {{itemData.CurrencyBuyAmount}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.SellPrice\" /> {{(itemData.CurrencySell)}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.SellAmount\" /> {{itemData.CurrencySellAmount}}</td>\r\n                                <td align=\"right\">\r\n                                    <button type=\"button\" (click)=\"editDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                                    <button type=\"button\" (click)=\"confirmDeleteDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Detail-->\r\n\r\n<!--Modal Delete-->\r\n<div class=\"modal fade\" id=\"modaldelete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDelete ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"delete()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n\r\n<!--Modal Delete Detail-->\r\n<div class=\"modal fade\" id=\"modaldeleteddetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDeleteDetail ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModalDetail(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"deleteDetail()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n"

/***/ }),

/***/ "./src/app/expend.component.ts":
/*!*************************************!*\
  !*** ./src/app/expend.component.ts ***!
  \*************************************/
/*! exports provided: ExpendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpendComponent", function() { return ExpendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_inExpend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/inExpend */ "./src/app/models/inExpend.ts");
/* harmony import */ var _models_inExpendDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/inExpendDetail */ "./src/app/models/inExpendDetail.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _data_formatdate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.formatdate */ "./src/app/data.formatdate.ts");






//import { HttpClient } from '@angular/common/http';
var ExpendComponent = /** @class */ (function () {
    function ExpendComponent(dataService, dateFormatPipe) {
        this.dataService = dataService;
        this.dateFormatPipe = dateFormatPipe;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Expend';
        this.allAmount = 0;
        this.detailToggle = "disabled";
        this.faAddDetail = "fa-cart-arrow-down";
        this.faEditDetail = "fa-edit";
        this.flag = false;
        this.url = this.title + "/GetIndex";
        this.selectedDetail = new _models_inExpendDetail__WEBPACK_IMPORTED_MODULE_3__["inExpendDetail"];
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsExpend = false;
        this.isAddDetail = true;
        this.mdlIsDetail = false;
        this.mdlIsDelete = false;
        this.mdlIsDeleteDetail = false;
    }
    ExpendComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
    };
    ExpendComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    ExpendComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    ExpendComponent.prototype.ngOnInit = function () {
        this.selectedData = new _models_inExpend__WEBPACK_IMPORTED_MODULE_2__["inExpend"]();
        this.showLoading(true);
        this.getData();
        this.flag = false;
        this.showMsg(false);
        this.showLoading(false);
    };
    ExpendComponent.prototype.detailModal = function (isDetail) {
        //this.detailToggle = "disabled";
        this.mdlIsExpend = isDetail;
    };
    ExpendComponent.prototype.getComboSupplier = function () {
        var _this = this;
        this.dataService.get(this.title + "/ComboSupplier").subscribe(function (data) { _this.ComboSupplier = data; });
    };
    ExpendComponent.prototype.newData = function () {
        var _this = this;
        this.modalTitle = "Add New";
        this.selectedData = new _models_inExpend__WEBPACK_IMPORTED_MODULE_2__["inExpend"]();
        this.selectedData.IDExpend = 0;
        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(function (data) { _this.selectedData.IDFaktur = data; });
        //console.log("Faktur: " + this.selectedData.IDFaktur);
        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";
        //this.selectedData.CreatedDate = this.dateFormatPipe.transform(new Date());
        this.selectedData.Created = new Date();
        this.selectedData.IDSupplier = 0;
        this.getComboSupplier();
        this.isAddDetail = true;
        this.DetailData = new Array();
        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    };
    ExpendComponent.prototype.newDetail = function () {
        var _this = this;
        this.modalTitle = "Add Expend";
        //console.log("ID Supplier: " + this.selectedData.IDSupplier);
        if (this.ComboSupplier != null) {
            var foundSupplier = this.ComboSupplier.find(function (m) { return m.ComboID == _this.selectedData.IDSupplier; });
            if (foundSupplier != null)
                this.selectedData.SupplierName = foundSupplier.ComboName;
        }
        this.selectedDetail = new _models_inExpendDetail__WEBPACK_IMPORTED_MODULE_3__["inExpendDetail"]();
        this.selectedDetail.IDExpend = this.selectedData.IDExpend;
        this.selectedDetail.IDDetail = 0;
        this.selectedDetail.ProductName = "";
        this.selectedDetail.Volume = 0;
        this.selectedDetail.BuyPrice = 0;
        this.selectedDetail.BuyAmount = 0;
        this.selectedDetail.SellPrice = 0;
        this.selectedDetail.SellAmount = 0;
        this.selectedDetail.CurrencySellAmount = "";
        this.selectedDetail.CurrencyBuyAmount = "";
        this.showInputDetail(true);
        this.showMsg(false);
        this.detailToggle = "disabled";
        this.isAddDetail = true;
    };
    ExpendComponent.prototype.showInputDetail = function (isDetail) {
        this.mdlIsDetail = isDetail;
    };
    ExpendComponent.prototype.addDetail = function () {
        var _this = this;
        this.makeAmountDetail();
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDSupplier = this.selectedData.IDSupplier;
        this.selectedDetail.Created = this.selectedData.Created;
        //alert(this.selectedDetail.Created);
        //return;
        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.selectedData.IDExpend = parseInt(data.messages[0]);
            //console.log("Add, ID Expend: " + this.selectedData.IDExpend);
            _this.getDetails(_this.selectedData.IDExpend);
            _this.getData();
            _this.newDetail();
        });
    };
    ExpendComponent.prototype.searchProduct = function (term, supplierID) {
        var _this = this;
        this.flag = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term + "&supplierID=" + supplierID).subscribe(function (data) { _this.AutoCompleteProduct = data; });
    };
    ExpendComponent.prototype.onselectProduct = function (product) {
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;
            //this.selectedDetail.SellPrice = product.SellPrice;
            this.selectedDetail.IDProduct = product.IDProduct;
            this.flag = false;
            this.showMsg(false);
        }
    };
    ExpendComponent.prototype.moneyCurrency = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(function (data) { _this.selectedData.Currency = data; });
    };
    ExpendComponent.prototype.moneyFormatBuy = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyBuyAmount = data; });
    };
    ExpendComponent.prototype.moneyFormatSell = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencySellAmount = data; });
    };
    ExpendComponent.prototype.makeAmountDetail = function () {
        //console.log("flag: " + this.flag);
        if (this.flag == true) {
            this.errorMsg = "Product is not found.";
            this.showMsg(true);
            return;
        }
        else {
            this.showMsg(false);
        }
        this.selectedDetail.BuyAmount = this.selectedDetail.Volume * this.selectedDetail.BuyPrice;
        this.moneyFormatBuy(this.selectedDetail.BuyAmount);
        this.selectedDetail.SellAmount = this.selectedDetail.Volume * this.selectedDetail.SellPrice;
        this.moneyFormatSell(this.selectedDetail.SellAmount);
        //console.log("amount sell: " + this.selectedDetail.CurrencySell);
        this.allAmount = 0;
        this.allAmount += this.selectedDetail.BuyAmount;
        //console.log("allAmount:" + this.allAmount);
        this.selectedData.Amount = this.allAmount;
        if (this.isAddDetail == true) {
            this.selectedData.Amount += this.DetailData.reduce(function (sum, current) { return sum + current.BuyAmount; }, 0);
        }
        else {
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.BuyAmount; }, 0);
        }
        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";
    };
    ExpendComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    ExpendComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    ExpendComponent.prototype.delete = function () {
        var _this = this;
        //console.log("delete:" + this.selectedData.IDExpend);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDExpend).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    ExpendComponent.prototype.confirmDeleteDetail = function (itemData) {
        this.selectedDetail = itemData;
        this.deleteModalDetail(true);
    };
    ExpendComponent.prototype.deleteModalDetail = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    };
    ExpendComponent.prototype.deleteDetail = function () {
        var _this = this;
        //console.log("delete:" + this.selectedDetail.IDDetail);
        this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idExpend=" + this.selectedDetail.IDExpend).subscribe(function (data) {
            if (data.isSuccess == false) {
                _this.errorMsg = data.messages[0];
                return;
            }
            _this.deleteModalDetail(false);
            _this.getDetails(_this.selectedData.IDExpend);
            _this.newDetail();
            console.log("Amount: " + data.messages[0]);
            _this.selectedData.Amount = data.messages[0];
            _this.moneyCurrency(_this.selectedData.Amount);
        });
    };
    ExpendComponent.prototype.detail = function (itemData) {
        this.modalTitle = "Expend Detail";
        this.selectedData = itemData;
        //var pattern = /Date\(([^)]+)\)/;
        //var results = pattern.exec(itemData.Created.toString());
        //var dt = new Date(parseFloat(results[1]));
        //var a = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
        //console.log("strDate: " + itemData.StrCreated);
        //console.log("Expend Date: " + a);
        this.selectedData.Created = new Date(this.selectedData.StrCreated);
        this.getDetails(this.selectedData.IDExpend);
        this.detailModal(true);
        this.newDetail();
    };
    ExpendComponent.prototype.getDetails = function (idExpend) {
        var _this = this;
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idExpend).subscribe(function (data) { _this.DetailData = data; _this.OriDetailData = data; });
        //console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    ExpendComponent.prototype.editDetail = function (itemData) {
        this.isAddDetail = false;
        this.modalTitle = "Update Expend";
        //console.log("edit:" + itemData.CurrencyBuyAmount);
        this.selectedDetail = itemData;
        this.selectedDetail.IDExpend = itemData.IDExpend;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        //console.log("detail IDExpend:" + this.selectedDetail.IDExpend);
        this.showInputDetail(true);
        this.showMsg(false);
    };
    ExpendComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.IDFaktur.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    ExpendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'expend-app',
            template: __webpack_require__(/*! ./expend.component.html */ "./src/app/expend.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _data_formatdate__WEBPACK_IMPORTED_MODULE_5__["FormatLocalDate"]])
    ], ExpendComponent);
    return ExpendComponent;
}());



/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Home Index</h2>"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    //title = 'Supplier Index';
    HomeComponent.prototype.ngOnInit = function () {
        //this.dataService.get("GeneralData/GetDashboard").subscribe(data => { this.userLogin = data });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-app',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html")
            //templateUrl: 'Views/Home/MyIndex.html'
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-app',
            template: ''
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/UserTemplate.ts":
/*!****************************************!*\
  !*** ./src/app/models/UserTemplate.ts ***!
  \****************************************/
/*! exports provided: UserTemplate, AssignCampaignTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTemplate", function() { return UserTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignCampaignTemplate", function() { return AssignCampaignTemplate; });
var UserTemplate = /** @class */ (function () {
    function UserTemplate() {
        this.CampaignID = 0;
    }
    return UserTemplate;
}());

var AssignCampaignTemplate = /** @class */ (function () {
    function AssignCampaignTemplate() {
    }
    return AssignCampaignTemplate;
}());



/***/ }),

/***/ "./src/app/models/inExpend.ts":
/*!************************************!*\
  !*** ./src/app/models/inExpend.ts ***!
  \************************************/
/*! exports provided: inExpend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inExpend", function() { return inExpend; });
var inExpend = /** @class */ (function () {
    function inExpend() {
    }
    return inExpend;
}());



/***/ }),

/***/ "./src/app/models/inExpendDetail.ts":
/*!******************************************!*\
  !*** ./src/app/models/inExpendDetail.ts ***!
  \******************************************/
/*! exports provided: inExpendDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inExpendDetail", function() { return inExpendDetail; });
var inExpendDetail = /** @class */ (function () {
    function inExpendDetail() {
    }
    return inExpendDetail;
}());



/***/ }),

/***/ "./src/app/models/inPurchase.ts":
/*!**************************************!*\
  !*** ./src/app/models/inPurchase.ts ***!
  \**************************************/
/*! exports provided: inPurchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inPurchase", function() { return inPurchase; });
var inPurchase = /** @class */ (function () {
    function inPurchase() {
    }
    return inPurchase;
}());



/***/ }),

/***/ "./src/app/models/inPurchaseDetail.ts":
/*!********************************************!*\
  !*** ./src/app/models/inPurchaseDetail.ts ***!
  \********************************************/
/*! exports provided: inPurchaseDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inPurchaseDetail", function() { return inPurchaseDetail; });
var inPurchaseDetail = /** @class */ (function () {
    function inPurchaseDetail() {
    }
    return inPurchaseDetail;
}());



/***/ }),

/***/ "./src/app/models/tblPartner.ts":
/*!**************************************!*\
  !*** ./src/app/models/tblPartner.ts ***!
  \**************************************/
/*! exports provided: tblPartner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tblPartner", function() { return tblPartner; });
var tblPartner = /** @class */ (function () {
    function tblPartner() {
    }
    return tblPartner;
}());



/***/ }),

/***/ "./src/app/models/tblProduct.ts":
/*!**************************************!*\
  !*** ./src/app/models/tblProduct.ts ***!
  \**************************************/
/*! exports provided: tblProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tblProduct", function() { return tblProduct; });
var tblProduct = /** @class */ (function () {
    function tblProduct() {
    }
    return tblProduct;
}());



/***/ }),

/***/ "./src/app/models/tblSupplier.ts":
/*!***************************************!*\
  !*** ./src/app/models/tblSupplier.ts ***!
  \***************************************/
/*! exports provided: tblSupplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tblSupplier", function() { return tblSupplier; });
var tblSupplier = /** @class */ (function () {
    function tblSupplier() {
    }
    return tblSupplier;
}());



/***/ }),

/***/ "./src/app/models/tblSupplierContact.ts":
/*!**********************************************!*\
  !*** ./src/app/models/tblSupplierContact.ts ***!
  \**********************************************/
/*! exports provided: tblSupplierContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tblSupplierContact", function() { return tblSupplierContact; });
var tblSupplierContact = /** @class */ (function () {
    function tblSupplierContact() {
    }
    return tblSupplierContact;
}());



/***/ }),

/***/ "./src/app/partner.component.html":
/*!****************************************!*\
  !*** ./src/app/partner.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <!--Loading-->\r\n    <div align=\"center\" style=\"margin-top:10px\" [ngStyle]=\"{'display': mdlIsLoading ? 'block' : 'none'}\">\r\n        <img src=\"/Content/Icon/loading.gif\" style=\"width:40px\" />\r\n    </div>\r\n    <!--Loading End-->\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" (click)=\"newData()\" class=\"btn btn-danger box_button\" style=\"margin-top:19px\" title=\"Add {{title}}\"><i class=\"fa fa-calendar-plus-o fa-3x\"></i></button>\r\n    </div>\r\n    <h2>{{title}}</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <!--<input type=\"text\" ng-model=\"search.PartnerName\" class=\"form-control box_button full-width\">-->\r\n                <input type=\"text\" #myInput [(ngModel)]=\"Name\" (input)=\"filterIndex(myInput.value)\" class=\"form-control box_button full-width\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-index\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:15%\"><i class=\"fa fa-id-card\"></i></th>\r\n                <th style=\"width:50%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th style=\"width:15%\"><i class=\"fa fa-phone-square\"></i></th>\r\n                <th style=\"width:5%\"><i class=\"fa fa-hand-o-down\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"IndexData?.length == 0\">\r\n                <td colspan=\"5\"><label>No records.</label></td>\r\n            </tr>\r\n            <!--<tr ng-repeat=\"m in IndexData | filter:search\">-->\r\n            <tr *ngFor=\"let itemData of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>{{itemData.IDNumber}}</td>\r\n                <td>\r\n                    {{itemData.Name}}\r\n                    <br />{{itemData.Address1}} {{itemData.Address2}} {{itemData.Address3}}\r\n                </td>\r\n                <td>{{itemData.PhoneNumber}}</td>\r\n                <td>\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDPartner}}\" (click)=\"toggleActive(itemData)\" checked *ngIf=\"itemData.IsActive==true\" />\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDPartner}}\" (click)=\"toggleActive(itemData)\" *ngIf=\"itemData.IsActive==false\" />\r\n\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" (click)=\"edit(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<!--Modal Create-->\r\n<div class=\"modal fade\" id=\"modalcreatepartner\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsCreate ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"createModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-user-plus\"></i> <label id=\"amountExpend\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n                <div class=\"form-horizontal\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Number ID</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input [(ngModel)]=\"selectedData.IDNumber\" placeholder=\"Number ID\" class=\"form-control full-width\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Partner Name</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input id=\"createID\" type=\"hidden\" [(ngModel)]=\"selectedData.IDPartner\" />\r\n                            <input [(ngModel)]=\"selectedData.Name\" placeholder=\"Partner Name\" class=\"form-control full-width\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Address</label>\r\n                        <div class=\"col-md-10\">\r\n                            <textarea [(ngModel)]=\"selectedData.Address1\" rows=\"3\" class=\"form-control full-width\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Phone Number</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input [(ngModel)]=\"selectedData.PhoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" style=\"max-width:40%;width:40%\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Is Active</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"selectedData.IsActive\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\" style=\"margin-top:0px\">\r\n                <button type=\"button\" (click)=\"save(selectedData)\" class=\"btn btn-info box_button\"><i class=\"fa fa-save fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Create-->\r\n\r\n<!--Modal Delete-->\r\n<div class=\"modal fade\" id=\"modaldelete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDelete ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"delete()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->"

/***/ }),

/***/ "./src/app/partner.component.ts":
/*!**************************************!*\
  !*** ./src/app/partner.component.ts ***!
  \**************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tblPartner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tblPartner */ "./src/app/models/tblPartner.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PartnerComponent = /** @class */ (function () {
    function PartnerComponent(dataService, router, http) {
        this.dataService = dataService;
        this.router = router;
        this.http = http;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Partner';
        this.url = this.title + "/GetIndex";
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsCreate = false;
        this.mdlIsDelete = false;
    }
    PartnerComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
        console.log("partner: " + this.IndexData);
    };
    PartnerComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    PartnerComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    PartnerComponent.prototype.ngOnInit = function () {
        this.selectedData = new _models_tblPartner__WEBPACK_IMPORTED_MODULE_2__["tblPartner"]();
        this.showLoading(true);
        this.getData();
        this.showMsg(false);
        this.showLoading(false);
    };
    PartnerComponent.prototype.createModal = function (isCreate) {
        this.mdlIsCreate = isCreate;
    };
    PartnerComponent.prototype.newData = function () {
        this.modalTitle = "Add New";
        this.selectedData = new _models_tblPartner__WEBPACK_IMPORTED_MODULE_2__["tblPartner"]();
        this.createModal(true);
        this.showMsg(false);
    };
    PartnerComponent.prototype.edit = function (itemData) {
        this.modalTitle = "Update";
        this.selectedData = itemData;
        this.createModal(true);
        this.showMsg(false);
    };
    PartnerComponent.prototype.save = function (itemData) {
        var _this = this;
        this.dataService.post(this.title + "/Save", itemData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            _this.createModal(false);
            _this.getData();
        });
    };
    PartnerComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    PartnerComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    PartnerComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDPartner);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDPartner).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    PartnerComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    PartnerComponent.prototype.toggleActive = function (itemData) {
        var _this = this;
        if (itemData.IsActive == true) {
            itemData.IsActive = false;
        }
        else {
            itemData.IsActive = true;
        }
        this.dataService.post(this.title + "/ToggleActive", itemData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            _this.getData();
        });
    };
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'partner-app',
            template: __webpack_require__(/*! ./partner.component.html */ "./src/app/partner.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./src/app/product.component.html":
/*!****************************************!*\
  !*** ./src/app/product.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <!--Loading-->\r\n    <div align=\"center\" style=\"margin-top:10px\" [ngStyle]=\"{'display': mdlIsLoading ? 'block' : 'none'}\">\r\n        <img src=\"/Content/Icon/loading.gif\" style=\"width:40px\" />\r\n    </div>\r\n    <!--Loading End-->\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" (click)=\"newData()\" class=\"btn btn-danger box_button\" style=\"margin-top:19px\" title=\"Add {{title}}\"><i class=\"fa fa-cart-plus fa-3x\"></i></button>\r\n    </div>\r\n    <h2>{{title}}</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <!--<input type=\"text\" ng-model=\"search.SupplierName\" class=\"form-control box_button full-width\">-->\r\n                <input type=\"text\" #myInput [(ngModel)]=\"IDFaktur\" (input)=\"filterIndex(myInput.value)\" placeholder=\"Advanced search...\" class=\"form-control box_button full-width\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-index\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:40%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th style=\"width:40%\"><i class=\"fa fa-list\"></i></th>\r\n                <!--<th style=\"width:10%\"><i class=\"fa fa-money\"></i> Buy</th>\r\n                <th style=\"width:10%\"><i class=\"fa fa-money\"></i> Sell</th>-->\r\n                <th style=\"width:5%\"><i class=\"fa fa-hand-o-down\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"IndexData?.length == 0\">\r\n                <td colspan=\"5\"><label>No records.</label></td>\r\n            </tr>\r\n            <!--<tr ng-repeat=\"m in IndexData | filter:search\">-->\r\n            <tr *ngFor=\"let itemData of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>\r\n                    {{itemData.ProductName}}\r\n                    <br />Weight: {{itemData.Weight}} &nbsp;&nbsp;Size: {{itemData.Size}}\r\n                </td>\r\n                <td>\r\n                    {{itemData.Description}}\r\n                </td>\r\n                <!--<td>\r\n                    {{itemData.CurrencyBuy}}\r\n                </td>\r\n                <td>{{itemData.CurrencySell}}</td>-->\r\n                <td>\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDProduct}}\" (click)=\"toggleActive(itemData)\" checked *ngIf=\"itemData.IsActive==true\" />\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDProduct}}\" (click)=\"toggleActive(itemData)\" *ngIf=\"itemData.IsActive==false\" />\r\n\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" (click)=\"editDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<!--Modal Detail-->\r\n<div class=\"modal fade\" id=\"modalcontact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsProduct ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"detailModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-address-card\"></i> <label id=\"amountExpend\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <!--<button type=\"button\" (click)=\"addDetail()\" class=\"btn btn-danger box_button\" [disabled]=\"detailToggle\" [attr.title]=\"isAddDetail ? 'Add Detail' : 'Edit Detail'\"><i [ngClass]=\"isAddDetail ? 'fa fa-cart-arrow-down fa-3x' : 'fa fa-edit fa-3x'\"></i></button>-->\r\n                        <button type=\"button\" (click)=\"addDetail()\" class=\"btn btn-danger box_button\" [attr.title]=\"isAddDetail ? 'Add Detail' : 'Edit Detail'\"><i [ngClass]=\"isAddDetail ? 'fa fa-cart-arrow-down fa-3x' : 'fa fa-edit fa-3x'\"></i></button>\r\n                    </div>\r\n                    <!--<div *ngIf=\"DetailData?.length > 0\" class=\"row body-content\">\r\n                        <h5 style=\"font-weight:600\"><i class=\"fa fa-user-circle\"></i> {{selectedData.SupplierName}}</h5>\r\n                    </div>\r\n                    <div *ngIf=\"DetailData?.length == 0\" class=\"row body-content\">\r\n                        <label class=\"control-label col-md-2\">Supplier</label>\r\n                        <div class=\"col-md-7\">\r\n                            <select [(ngModel)]=\"selectedData.IDSupplier\" (change)=\"newDetail()\" class=\"form-control\" style=\"max-width:70%;width:70%\">\r\n                                <option *ngFor=\"let c of ComboSupplier\" [ngValue]=\"c.ComboID\">{{c.ComboName}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>-->\r\n                </div>                \r\n                <!--<div class=\"row body-content margin-top-10\" [ngStyle]=\"{'display': mdlIsDetail ? 'block' : 'none'}\">-->\r\n                <div class=\"row body-content margin-top-10\">\r\n                    <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                        <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                    </div>\r\n                    <hr style=\"margin-top:5px\" />\r\n                    <div class=\"row body-content\" style=\"margin-bottom:5px\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Product Name</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input id=\"IDProduct\" type=\"hidden\" [(ngModel)]=\"selectedData.IDProduct\" />\r\n                                <input [(ngModel)]=\"selectedData.ProductName\" (keyup)=\"searchProduct(selectedData.ProductName, selectedData.IDSupplier)\" placeholder=\"Product Name\" class=\"form-control full-width\" />\r\n                                <div>\r\n                                    <ul *ngIf=\"flag\" class=\"dropdown-menu\" style=\"display:block;position:relative;width:100%;max-width:100%;height:auto\">\r\n                                        <li *ngFor=\"let product of AutoCompleteProduct\">\r\n                                            <a (click)=\"onselectProduct(product)\">{{product.ProductName}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row body-content\" style=\"margin-bottom:5px\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Description</label>\r\n                            <div class=\"col-md-10\">\r\n                                <textarea [(ngModel)]=\"selectedData.Description\" placeholder=\"Description\" class=\"form-control full-width\" rows=\"2\" ></textarea>                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row body-content\" style=\"margin-bottom:5px\">\r\n                        <label class=\"control-label col-md-2\">Weight</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"text\" [(ngModel)]=\"selectedData.Weight\" placeholder=\"Weight\" class=\"form-control\" style=\"max-width:90%;width:90%\" />\r\n                        </div>\r\n                        <label class=\"control-label col-md-2\">Size</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"text\" [(ngModel)]=\"selectedData.Size\" placeholder=\"Size\" class=\"form-control\" style=\"max-width:90%;width:90%\" />\r\n                        </div>\r\n                        <div class=\"col-md-2\">\r\n                            <label class=\"control-label\"><input type=\"checkbox\" [(ngModel)]=\"selectedData.IsActive\" /> Is Active</label>\r\n                        </div>\r\n                    </div>\r\n                    <!--<div class=\"row body-content\" style=\"margin-bottom:10px\">\r\n                        <label class=\"control-label col-md-2\">Buy Price</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"number\" [(ngModel)]=\"selectedData.BuyPrice\" placeholder=\"0\" class=\"form-control\" min=\"0\" max=\"100000000\" style=\"max-width:90%;width:90%;text-align:right\" />\r\n                        </div>\r\n                        <label class=\"control-label col-md-2\">sell Price</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"number\" [(ngModel)]=\"selectedData.SellPrice\" placeholder=\"0\" (blur)=\"addDetailToggle()\" class=\"form-control\" min=\"0\" max=\"100000000\" style=\"max-width:90%;width:90%;text-align:right\" />\r\n                        </div>\r\n                    </div>-->\r\n                </div>\r\n                <!--<div class=\"row body-content margin-top-10\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-index\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th style=\"width:60%\"><i class=\"fa fa-shopping-cart\"></i></th>\r\n                                <th style=\"width:5%;text-align:right\"><i class=\"fa fa-line-chart\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-credit-card\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"DetailData?.length == 0\">\r\n                                <td colspan=\"6\"><label>No records.</label></td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let itemData of DetailData; let idx = index\">\r\n                                <td>{{idx + 1}}</td>\r\n                                <td>\r\n                                    <input type=\"hidden\" [(ngModel)]=\"itemData.IDProduct\" />\r\n                                    {{itemData.ProductName}}\r\n                                    <br />{{itemData.Weight}} {{itemData.Size}}\r\n                                </td>\r\n                                <td style=\"text-align:right\">{{itemData.Volume}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.Price\" /> {{(itemData.CurrencyPrice)}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.Amount\" /> {{itemData.CurrencyAmount}}</td>\r\n                                <td align=\"right\">\r\n                                    <button type=\"button\" (click)=\"editDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                                    <button type=\"button\" (click)=\"confirmDeleteDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Detail-->\r\n<!--Modal Delete-->\r\n<div class=\"modal fade\" id=\"modaldelete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDelete ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"delete()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n<!--Modal Delete Detail-->\r\n<div class=\"modal fade\" id=\"modaldeleteddetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDeleteDetail ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModalDetail(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"deleteDetail()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n"

/***/ }),

/***/ "./src/app/product.component.ts":
/*!**************************************!*\
  !*** ./src/app/product.component.ts ***!
  \**************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tblProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tblProduct */ "./src/app/models/tblProduct.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");




var ProductComponent = /** @class */ (function () {
    function ProductComponent(dataService) {
        this.dataService = dataService;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Product';
        this.detailToggle = "disabled";
        this.flag = false;
        this.url = this.title + "/GetIndex";
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsProduct = false;
        this.isAddDetail = true;
        this.mdlIsDelete = false;
        this.mdlIsDeleteDetail = false;
    }
    ProductComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
    };
    ProductComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    ProductComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    ProductComponent.prototype.ngOnInit = function () {
        this.modalTitle = "Add Product";
        this.DetailData = new Array();
        this.selectedData = new _models_tblProduct__WEBPACK_IMPORTED_MODULE_2__["tblProduct"]();
        this.showLoading(true);
        this.getData();
        this.flag = false;
        this.showMsg(false);
        this.showLoading(false);
    };
    ProductComponent.prototype.detailModal = function (isDetail) {
        //this.detailToggle = "disabled";
        this.mdlIsProduct = isDetail;
    };
    ProductComponent.prototype.getComboSupplier = function () {
        var _this = this;
        this.dataService.get("GeneralData/ComboSupplier").subscribe(function (data) { _this.ComboSupplier = data; });
    };
    ProductComponent.prototype.newData = function () {
        this.modalTitle = "Add New";
        this.selectedData = new _models_tblProduct__WEBPACK_IMPORTED_MODULE_2__["tblProduct"]();
        this.selectedData.IDProduct = 0;
        this.oriProductID = 0;
        this.selectedData.ProductName = "";
        this.flag = false;
        this.selectedData.Weight = "";
        this.selectedData.Size = "";
        this.selectedData.IsActive = false;
        //this.selectedData.IDSupplier = 0;
        this.getComboSupplier();
        this.detailToggle = "disabled";
        this.isAddDetail = true;
        this.detailModal(true);
        //this.showInputDetail(false);
        this.showMsg(false);
    };
    ProductComponent.prototype.newDetail = function () {
        //console.log("ID Supplier: " + this.selectedData.IDSupplier);
        //if (this.ComboSupplier != null) {
        //    var foundSupplier = this.ComboSupplier.find(m => m.ComboID == this.selectedData.IDSupplier);
        //    if (foundSupplier != null)
        //        this.selectedData.SupplierName = foundSupplier.ComboName;
        //}
        //console.log("ID Supplier After: " + this.selectedData.IDSupplier);
        //this.showInputDetail(true);
        this.showMsg(false);
        this.detailToggle = "disabled";
        this.isAddDetail = true;
    };
    //mdlIsDetail: boolean = false;
    //showInputDetail(isDetail: boolean): void {
    //    this.mdlIsDetail = isDetail;
    //}
    ProductComponent.prototype.addDetail = function () {
        //this.selectedData.IDSupplier = this.selectedData.IDSupplier;        
        var _this = this;
        this.dataService.post(this.title + "/Save", this.selectedData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                _this.getData();
                return;
            }
            _this.selectedData.IDProduct = parseInt(data.messages[0]);
            console.log("Add, ID Product: " + _this.selectedData.IDProduct);
            _this.getData();
            _this.mdlIsProduct = false;
        });
    };
    ProductComponent.prototype.searchProduct = function (term, supplierID) {
        var _this = this;
        this.flag = true;
        //this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term + "&supplierID=" + supplierID).subscribe(data => { this.AutoCompleteProduct = data });
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term).subscribe(function (data) { _this.AutoCompleteProduct = data; });
    };
    ProductComponent.prototype.onselectProduct = function (product) {
        if (product.IDProduct > 0) {
            this.selectedData.ProductName = product.ProductName;
            //this.selectedData.BuyPrice = product.BuyPrice;
            //this.selectedData.SellPrice = product.SellPrice;
            this.selectedData.IsActive = product.IsActive;
            this.selectedData.IDProduct = product.IDProduct;
            this.flag = false;
            this.showMsg(false);
        }
    };
    ProductComponent.prototype.addDetailToggle = function () {
        //console.log("flag: " + this.flag);
        //if (this.flag == false) {
        //    this.errorMsg = "Product is exist.";
        //    this.showMsg(true);
        //    return;
        //}        
        this.detailToggle = "";
        //alert("show add");
    };
    ProductComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    ProductComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    ProductComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDProduct);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDProduct).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    ProductComponent.prototype.confirmDeleteDetail = function (itemData) {
        this.selectedData = itemData;
        this.deleteModalDetail(true);
    };
    ProductComponent.prototype.deleteModalDetail = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    };
    ProductComponent.prototype.deleteDetail = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDProduct);
        this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedData.IDProduct + "&idProduct=" + this.selectedData.IDProduct).subscribe(function (data) {
            if (data.isSuccess == false) {
                _this.errorMsg = data.messages[0];
                return;
            }
            _this.deleteModalDetail(false);
            _this.getDetails(_this.selectedData.IDProduct);
            _this.newDetail();
        });
    };
    ProductComponent.prototype.detail = function (itemData) {
        this.modalTitle = "Product Detail";
        this.selectedData = itemData;
        this.getDetails(this.selectedData.IDProduct);
        this.detailModal(true);
        this.newDetail();
    };
    ProductComponent.prototype.getDetails = function (idProduct) {
        this.showLoading(true);
        //this.showInputDetail(false);
        //this.dataService.get(this.title + "/GetDetails/" + idProduct).subscribe(data => { this.DetailData = data; this.OriDetailData = data });
        //console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    ProductComponent.prototype.editDetail = function (itemData) {
        this.isAddDetail = false;
        this.modalTitle = "Update Product";
        this.selectedData = itemData;
        this.getComboSupplier();
        //this.selectedData.IDSupplier = itemData.IDSupplier;
        //this.selectedData.SupplierName = itemData.SupplierName;
        this.selectedData.IDProduct = itemData.IDProduct;
        this.oriProductID = itemData.IDProduct;
        console.log("detail IDProduct:" + this.selectedData.IDProduct);
        this.detailModal(true);
        //this.showInputDetail(true);
        this.showMsg(false);
    };
    ProductComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-app',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/purchase.component.html":
/*!*****************************************!*\
  !*** ./src/app/purchase.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <!--Loading-->\r\n    <div align=\"center\" style=\"margin-top:10px\" [ngStyle]=\"{'display': mdlIsLoading ? 'block' : 'none'}\">\r\n        <img src=\"/Content/Icon/loading.gif\" style=\"width:40px\" />\r\n    </div>\r\n    <!--Loading End-->\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" (click)=\"newData()\" class=\"btn btn-danger box_button\" style=\"margin-top:19px\" title=\"Add {{title}}\"><i class=\"fa fa-cart-plus fa-3x\"></i></button>\r\n    </div>\r\n    <h2>{{title}}</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <!--<input type=\"text\" ng-model=\"search.SupplierName\" class=\"form-control box_button full-width\">-->\r\n                <input type=\"text\" #myInput [(ngModel)]=\"IDFaktur\" (input)=\"filterIndex(myInput.value)\" placeholder=\"Advanced search...\" class=\"form-control box_button full-width\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-index\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:15%\"><i class=\"fa fa-calculator\"></i></th>\r\n                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                <th style=\"width:60%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"IndexData?.length == 0\">\r\n                <td colspan=\"5\"><label>No records.</label></td>\r\n            </tr>\r\n            <!--<tr ng-repeat=\"m in IndexData | filter:search\">-->\r\n            <tr *ngFor=\"let itemData of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>\r\n                    {{itemData.IDFaktur}}\r\n                </td>\r\n                <td style=\"text-align:right\">{{itemData.Currency}}</td>\r\n                <td>\r\n                    {{itemData.IDNumber}} - {{itemData.Name}}                    \r\n                    <br />{{itemData.PhoneNumber}}\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" (click)=\"detail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"detail\"><i class=\"fa fa-list fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<!--Modal Detail-->\r\n<div class=\"modal fade\" id=\"modalcontact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsPurchase ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"detailModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-address-card\"></i> <label id=\"amountPurchase\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <button type=\"button\" (click)=\"addDetail()\" class=\"btn btn-danger box_button\" [disabled]=\"detailToggle\" [attr.title]=\"isAddDetail ? 'Add Detail' : 'Edit Detail'\"><i [ngClass]=\"isAddDetail ? 'fa fa-cart-arrow-down fa-3x' : 'fa fa-edit fa-3x'\"></i></button>\r\n                    </div>\r\n                    <div class=\"col-md-6 body-zero\">\r\n                        <h5 *ngIf=\"DetailData?.length > 0\" style=\"font-weight:600\"><i class=\"fa fa-calculator\"></i> {{selectedData.IDFaktur}}</h5>\r\n                        <div *ngIf=\"DetailData?.length == 0\" class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 body-zero\">No. Faktur</label>\r\n                            <div class=\"col-md-7\">\r\n                                <input [(ngModel)]=\"selectedData.IDFaktur\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:80%;width:80%\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 body-zero\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-3 body-zero\">Created</label>\r\n                            <div class=\"col-md-7\">\r\n                                <!--<input type=\"date\" [(ngModel)]=\"selectedData.CreatedDate | date:'yyyy-MM-dd'\" class=\"form-control\" style=\"max-width:140%;width:140%\" />-->\r\n                                <input type=\"date\" [value]=\"selectedData.Created | date:'yyyy-MM-dd'\" (input)=\"selectedData.Created=parseDate($event.target.value)\" class=\"form-control\" style=\"max-width:140%;width:140%\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"DetailData?.length > 0\" class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <h4 style=\"font-weight:600\"><i class=\"fa fa-money\"></i> {{selectedData.Currency}}</h4>\r\n                    </div>\r\n                    <h5 style=\"font-weight:600\"><i class=\"fa fa-user-circle\"></i> {{selectedData.SearchName}}</h5>\r\n                </div>\r\n                <div *ngIf=\"DetailData?.length == 0\" class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <h4 style=\"font-weight:600\"><i class=\"fa fa-money\"></i> {{selectedData.Currency}}</h4>\r\n                    </div>\r\n                    <div class=\"col-md-9 body-zero\">\r\n                        <label class=\"control-label col-md-2 body-zero\">Partner</label>\r\n                        <div class=\"col-md-8\">\r\n                            <input id=\"createID\" type=\"hidden\" [(ngModel)]=\"selectedData.IDPartner\" />\r\n                            <input [(ngModel)]=\"selectedData.SearchName\" (keyup)=\"searchPartner(selectedData.SearchName)\" placeholder=\"Partner Name\" class=\"form-control full-width\" />\r\n                            <div>\r\n                                <ul *ngIf=\"flagPartner && AutoCompletePartner?.length > 0\" class=\"dropdown-menu\" style=\"display:block;width:94%;max-width:94%;margin:0px 14px 0px;height:auto\">\r\n                                    <li *ngFor=\"let partner of AutoCompletePartner\">\r\n                                        <a (click)=\"onselectPartner(partner)\">{{partner.SearchName}}</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>                    \r\n                </div>\r\n                <div class=\"row body-content margin-top-10\" [ngStyle]=\"{'display': mdlIsDetail ? 'block' : 'none'}\">\r\n                    <!--<div class=\"form-horizontal\">-->\r\n                    <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                        <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                    </div>\r\n                    <hr style=\"margin-top:5px\" />\r\n                    <div class=\"row body-content\" style=\"margin-bottom:5px\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2 body-zero\">Product Name</label>\r\n                            <div class=\"col-md-10 body-zero\">\r\n                                <input id=\"IDPurchase\" type=\"hidden\" [(ngModel)]=\"selectedDetail.IDPurchase\" />\r\n                                <input id=\"IDProduct\" type=\"hidden\" [(ngModel)]=\"selectedDetail.IDProduct\" />\r\n                                <input [(ngModel)]=\"selectedDetail.ProductName\" (keyup)=\"searchProduct(selectedDetail.ProductName)\" placeholder=\"Product Name\" class=\"form-control full-width\" />\r\n                                <div>\r\n                                    <ul *ngIf=\"flagProduct && AutoCompleteProduct?.length > 0\" class=\"dropdown-menu\" style=\"display:block;position:relative;width:100%;max-width:100%\">\r\n                                        <li *ngFor=\"let product of AutoCompleteProduct\">\r\n                                            <a (click)=\"onselectProduct(product)\">{{product.ProductName}}</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>                       \r\n                    </div>\r\n                    <div class=\"row body-content\" style=\"margin-bottom:20px\">\r\n                        <label class=\"control-label col-md-2 body-zero\">Volume</label>\r\n                        <div class=\"col-md-2 body-zero\">\r\n                            <input type=\"number\" [(ngModel)]=\"selectedDetail.Volume\" placeholder=\"Volume\" (blur)=\"makeAmountDetail()\" class=\"form-control\" style=\"max-width:90%;width:90%\" />\r\n                        </div>\r\n                        <label class=\"control-label col-md-1\">Price</label>\r\n                        <div class=\"col-md-3\">\r\n                            <input type=\"number\" [(ngModel)]=\"selectedDetail.Price\" placeholder=\"0\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:80%;width:80%\" />\r\n                        </div>\r\n                        <label class=\"control-label col-md-1\">Amount</label>\r\n                        <div class=\"col-md-3\" style=\"padding-right:0px\">\r\n                            <input type=\"number\" [(ngModel)]=\"selectedDetail.Amount\" placeholder=\"0\" readonly=\"readonly\" class=\"form-control\" style=\"max-width:100%;width:100%\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row body-content\" style=\"overflow:auto;height:200px\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-index\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th style=\"width:60%\"><i class=\"fa fa-shopping-cart\"></i></th>\r\n                                <th style=\"width:5%;text-align:right\"><i class=\"fa fa-line-chart\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-credit-card\"></i></th>\r\n                                <th style=\"width:10%;text-align:right\"><i class=\"fa fa-money\"></i></th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"DetailData?.length == 0\">\r\n                                <td colspan=\"6\"><label>No records.</label></td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let itemData of DetailData; let idx = index\">\r\n                                <td>{{idx + 1}}</td>\r\n                                <td>\r\n                                    {{itemData.ProductName}}\r\n                                    <br />{{itemData.Weight}} {{itemData.Size}}\r\n                                </td>\r\n                                <td style=\"text-align:right\">{{itemData.Volume}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.Price\" /> {{(itemData.CurrencyPrice)}}</td>\r\n                                <td style=\"text-align:right\"><input type=\"hidden\" [(ngModel)]=\"itemData.Amount\" /> {{itemData.CurrencyAmount}}</td>\r\n                                <td align=\"right\">\r\n                                    <button type=\"button\" (click)=\"editDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                                    <button type=\"button\" (click)=\"confirmDeleteDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Detail-->\r\n<!--Modal Delete-->\r\n<div class=\"modal fade\" id=\"modaldelete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDelete ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"delete()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n<!--Modal Delete Detail-->\r\n<div class=\"modal fade\" id=\"modaldeleteddetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDeleteDetail ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModalDetail(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"deleteDetail()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n"

/***/ }),

/***/ "./src/app/purchase.component.ts":
/*!***************************************!*\
  !*** ./src/app/purchase.component.ts ***!
  \***************************************/
/*! exports provided: PurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseComponent", function() { return PurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_inPurchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/inPurchase */ "./src/app/models/inPurchase.ts");
/* harmony import */ var _models_inPurchaseDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/inPurchaseDetail */ "./src/app/models/inPurchaseDetail.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");





//import { HttpClient } from '@angular/common/http';
var PurchaseComponent = /** @class */ (function () {
    function PurchaseComponent(dataService) {
        this.dataService = dataService;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Purchase';
        this.allAmount = 0;
        this.detailToggle = "disabled";
        this.faAddDetail = "fa-cart-arrow-down";
        this.faEditDetail = "fa-edit";
        this.flagProduct = false;
        this.flagPartner = false;
        this.url = this.title + "/GetIndex";
        this.selectedDetail = new _models_inPurchaseDetail__WEBPACK_IMPORTED_MODULE_3__["inPurchaseDetail"];
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsPurchase = false;
        this.mdlIsDetail = false;
        this.isAddDetail = true;
        this.mdlIsDelete = false;
        this.mdlIsDeleteDetail = false;
    }
    PurchaseComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
    };
    PurchaseComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    PurchaseComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        this.selectedData = new _models_inPurchase__WEBPACK_IMPORTED_MODULE_2__["inPurchase"]();
        this.AutoCompletePartner = new Array();
        this.showLoading(true);
        this.getData();
        this.flagProduct = false;
        this.flagPartner = false;
        this.showMsg(false);
        this.showLoading(false);
    };
    PurchaseComponent.prototype.detailModal = function (isDetail) {
        //this.detailToggle = "disabled";
        this.mdlIsPurchase = isDetail;
    };
    PurchaseComponent.prototype.showInputDetail = function (isDetail) {
        this.mdlIsDetail = isDetail;
    };
    PurchaseComponent.prototype.newData = function () {
        var _this = this;
        this.modalTitle = "Add New";
        this.selectedData = new _models_inPurchase__WEBPACK_IMPORTED_MODULE_2__["inPurchase"]();
        this.AutoCompletePartner = new Array();
        this.selectedData.IDPurchase = 0;
        this.dataService.get(this.title + "/CreateNewFaktur").subscribe(function (data) { _this.selectedData.IDFaktur = data; });
        console.log("Faktur: " + this.selectedData.IDFaktur);
        this.selectedData.Amount = 0;
        this.allAmount = 0;
        this.selectedData.Currency = "0";
        this.selectedData.Created = new Date();
        this.selectedData.IDPartner = 0;
        //this.getComboSupplier();
        this.isAddDetail = true;
        this.DetailData = new Array();
        this.detailModal(true);
        this.showInputDetail(false);
        this.showMsg(false);
    };
    PurchaseComponent.prototype.newDetail = function () {
        this.modalTitle = "Add Purchase";
        console.log("New, ID Purchase: " + this.selectedData.IDPurchase);
        this.selectedDetail = new _models_inPurchaseDetail__WEBPACK_IMPORTED_MODULE_3__["inPurchaseDetail"]();
        this.selectedDetail.IDPurchase = this.selectedData.IDPurchase;
        this.selectedDetail.IDDetail = 0;
        this.selectedDetail.ProductName = "";
        this.selectedDetail.Volume = 0;
        this.selectedDetail.Price = 0;
        this.selectedDetail.Amount = 0;
        this.showInputDetail(true);
        this.showMsg(false);
        this.detailToggle = "disabled";
        this.isAddDetail = true;
    };
    PurchaseComponent.prototype.addDetail = function () {
        var _this = this;
        this.selectedDetail.IDFaktur = this.selectedData.IDFaktur;
        this.selectedDetail.IDPartner = this.selectedData.IDPartner;
        console.log("detail id:" + this.selectedDetail.IDDetail);
        this.dataService.post(this.title + "/Save", this.selectedDetail).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            //this.detailModal(false);
            _this.selectedData.IDPurchase = parseInt(data.messages[0]);
            console.log("Add, ID Purchase: " + _this.selectedData.IDPurchase);
            _this.getDetails(_this.selectedData.IDPurchase);
            _this.getData();
            _this.newDetail();
        });
    };
    PurchaseComponent.prototype.searchProduct = function (term) {
        var _this = this;
        this.flagProduct = true;
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term).subscribe(function (data) { _this.AutoCompleteProduct = data; });
    };
    PurchaseComponent.prototype.onselectProduct = function (product) {
        var _this = this;
        if (product.IDProduct > 0) {
            this.selectedDetail.ProductName = product.ProductName;
            //get price
            this.dataService.get("GeneralData/GetProductPrice?id=" + product.IDProduct).subscribe(function (data) { _this.selectedDetail.Price = data; });
            this.selectedDetail.IDProduct = product.IDProduct;
            this.flagProduct = false;
            this.showMsg(false);
        }
    };
    PurchaseComponent.prototype.searchPartner = function (term) {
        var _this = this;
        this.flagPartner = true;
        this.dataService.get("GeneralData/AutoCompletePartner?term=" + term).subscribe(function (data) { _this.AutoCompletePartner = data; });
        //if (this.AutoCompletePartner.length == 0)
        //    this.flagPartner = false;
    };
    PurchaseComponent.prototype.onselectPartner = function (partner) {
        if (partner.IDPartner > 0) {
            this.selectedData.Name = partner.Name;
            this.selectedData.SearchName = partner.SearchName;
            this.selectedData.IDNumber = partner.IDNumber;
            this.selectedData.IDPartner = partner.IDPartner;
            this.flagPartner = false;
            this.showMsg(false);
            this.selectedDetail = new _models_inPurchaseDetail__WEBPACK_IMPORTED_MODULE_3__["inPurchaseDetail"]();
            this.AutoCompletePartner = new Array();
            this.selectedDetail.IDPurchase = this.selectedData.IDPurchase;
            //this.selectedDetail.IDDetail = this.detailID;
            this.showInputDetail(true);
        }
    };
    PurchaseComponent.prototype.moneyCurrency = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyCurrency?obj=" + obj).subscribe(function (data) { _this.selectedData.Currency = data; });
    };
    PurchaseComponent.prototype.moneyFormatAmount = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyAmount = data; });
    };
    PurchaseComponent.prototype.moneyFormatPrice = function (obj) {
        var _this = this;
        this.dataService.get("GeneralData/MoneyFormat?obj=" + obj).subscribe(function (data) { _this.selectedDetail.CurrencyPrice = data; });
    };
    PurchaseComponent.prototype.makeAmountDetail = function () {
        //console.log("flag: " + this.flag);
        if (this.flagProduct == true) {
            this.errorMsg = "Product is not found.";
            this.showMsg(true);
            return;
        }
        else {
            this.showMsg(false);
        }
        this.moneyFormatPrice(this.selectedDetail.Price);
        this.selectedDetail.Amount = this.selectedDetail.Volume * this.selectedDetail.Price;
        this.moneyFormatAmount(this.selectedDetail.Amount);
        this.allAmount = 0;
        this.allAmount += this.selectedDetail.Amount;
        //console.log("allAmount:" + this.allAmount);
        this.selectedData.Amount = this.allAmount;
        if (this.isAddDetail == true) {
            this.selectedData.Amount += this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
        }
        else {
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
        }
        this.moneyCurrency(this.selectedData.Amount);
        if (this.selectedData.Amount > 0)
            this.detailToggle = "";
    };
    PurchaseComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    PurchaseComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    PurchaseComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDPurchase);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDPurchase).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    PurchaseComponent.prototype.confirmDeleteDetail = function (itemData) {
        this.selectedDetail = itemData;
        console.log("iddetail:" + itemData.IDDetail);
        this.deleteModalDetail(true);
    };
    PurchaseComponent.prototype.deleteModalDetail = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    };
    PurchaseComponent.prototype.deleteDetail = function () {
        var _this = this;
        console.log("delete:" + this.selectedDetail.IDDetail);
        var idPurchase = this.selectedData.IDPurchase;
        if (idPurchase > 0) {
            this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedDetail.IDDetail + "&idPurchase=" + this.selectedDetail.IDPurchase).subscribe(function (data) {
                if (data.isSuccess == false) {
                    _this.errorMsg = data.messages[0];
                    return;
                }
                _this.deleteModalDetail(false);
                _this.getDetails(_this.selectedData.IDPurchase);
                _this.newDetail();
                console.log("Amount: " + data.messages[0]);
                _this.selectedData.Amount = data.messages[0];
                _this.moneyCurrency(_this.selectedData.Amount);
            });
        }
        else {
            //just remove from array data
            this.DetailData = this.DetailData.filter(function (m) { return m.IDDetail != _this.selectedDetail.IDDetail; });
            this.deleteModalDetail(false);
            this.newDetail();
            this.selectedData.Amount = this.DetailData.reduce(function (sum, current) { return sum + current.Amount; }, 0);
            this.moneyCurrency(this.selectedData.Amount);
        }
    };
    PurchaseComponent.prototype.detail = function (itemData) {
        this.modalTitle = "Purchase Detail";
        this.selectedData = itemData;
        this.selectedData.Created = new Date(this.selectedData.StrCreated);
        this.selectedData.SearchName = itemData.IDNumber + " - " + itemData.Name;
        this.getDetails(this.selectedData.IDPurchase);
        this.detailModal(true);
        this.newDetail();
    };
    PurchaseComponent.prototype.getDetails = function (idPurchase) {
        var _this = this;
        this.showLoading(true);
        this.showInputDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idPurchase).subscribe(function (data) { _this.DetailData = data; _this.OriDetailData = data; });
        console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    PurchaseComponent.prototype.editDetail = function (itemData) {
        this.isAddDetail = false;
        this.modalTitle = "Update Purchase";
        this.selectedDetail = itemData;
        this.selectedDetail.IDPurchase = itemData.IDPurchase;
        this.selectedDetail.IDProduct = itemData.IDProduct;
        console.log("detail IDProduct:" + this.selectedDetail.IDProduct);
        this.showInputDetail(true);
        this.showMsg(false);
    };
    PurchaseComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    PurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'purchase-app',
            template: __webpack_require__(/*! ./purchase.component.html */ "./src/app/purchase.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], PurchaseComponent);
    return PurchaseComponent;
}());



/***/ }),

/***/ "./src/app/supplier.component.html":
/*!*****************************************!*\
  !*** ./src/app/supplier.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <!--Loading-->\r\n    <div align=\"center\" style=\"margin-top:10px\" [ngStyle]=\"{'display': mdlIsLoading ? 'block' : 'none'}\">\r\n        <img src=\"/Content/Icon/loading.gif\" style=\"width:40px\" />\r\n    </div>\r\n    <!--Loading End-->\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" (click)=\"newData()\" class=\"btn btn-danger box_button\" style=\"margin-top:19px\" title=\"Add {{title}}\"><i class=\"fa fa-plus-square-o fa-3x\"></i></button>\r\n    </div>\r\n    <h2>{{title}}</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <!--<input type=\"text\" ng-model=\"search.SupplierName\" class=\"form-control box_button full-width\">-->\r\n                <input type=\"text\" #myInput [(ngModel)]=\"SupplierName\" (input)=\"filterIndex(myInput.value)\" class=\"form-control box_button full-width\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead class=\"thead-index\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:60%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th style=\"width:20%\"><i class=\"fa fa-phone-square\"></i></th>\r\n                <th style=\"width:5%\"><i class=\"fa fa-hand-o-down\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngIf=\"IndexData?.length == 0\">\r\n                <td colspan=\"4\"><label>No records.</label></td>\r\n            </tr>\r\n            <!--<tr ng-repeat=\"m in IndexData | filter:search\">-->\r\n            <tr *ngFor=\"let itemData of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>{{itemData.SupplierName}}\r\n                <br />{{itemData.Address}}\r\n                </td>\r\n                <td>{{itemData.PhoneNumber}}</td>\r\n                <td>\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDSupplier}}\" (click)=\"toggleActive(itemData)\" checked *ngIf=\"itemData.IsActive==true\" />\r\n                    <input type=\"checkbox\" id=\"chk_{{itemData.IDSupplier}}\" (click)=\"toggleActive(itemData)\" *ngIf=\"itemData.IsActive==false\" />\r\n\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" (click)=\"detail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"detail\"><i class=\"fa fa-list fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"edit(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n\r\n<!--Modal Create-->\r\n<div class=\"modal fade\" id=\"modalcreatesupplier\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsCreate ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"createModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-user-plus\"></i> <label id=\"amountExpend\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n                <div class=\"form-horizontal\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Supplier Name</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input id=\"createID\" type=\"hidden\" [(ngModel)]=\"selectedData.IDSupplier\" />\r\n                            <input [(ngModel)]=\"selectedData.SupplierName\" placeholder=\"Supplier Name\" class=\"form-control full-width uppercase\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Address</label>\r\n                        <div class=\"col-md-10\">\r\n                            <textarea [(ngModel)]=\"selectedData.Address\" rows=\"3\" class=\"form-control full-width\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Phone Number</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input [(ngModel)]=\"selectedData.PhoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" style=\"max-width:40%;width:40%\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-2\">Is Active</label>\r\n                        <div class=\"col-md-10\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"selectedData.IsActive\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\" style=\"margin-top:0px\">\r\n                <button type=\"button\" (click)=\"save(selectedData)\" class=\"btn btn-info box_button\"><i class=\"fa fa-save fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Create-->\r\n\r\n<!--Modal Delete-->\r\n<div class=\"modal fade\" id=\"modaldelete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsDelete ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-delete\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"deleteModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4>Remove Data</h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div id=\"div_message\" align=\"center\">\r\n                    <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer margin-top-10\">\r\n                <button type=\"button\" id=\"btndelete\" (click)=\"delete()\" class=\"btn btn-danger box_button btn-med\"><i class=\"fa fa-trash fa-3x\"></i></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Delete-->\r\n\r\n<!--Modal Contact-->\r\n<div class=\"modal fade\" id=\"modalcontact\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" [ngStyle]=\"{'display': mdlIsContact ? 'block' : 'none', 'opacity': 1}\">\r\n    <div class=\"modal-dialog modal-create\">\r\n        <div class=\"modal-content box_button\">\r\n            <div id=\"div_header_create\" class=\"modal-header header_dialog\">\r\n                <button type=\"button\" id=\"btnCloseDialog\" class=\"close btn btn-outline-blue\" (click)=\"detailModal(false)\" aria-label=\"Close\"><i class=\"fa fa-remove fa-3x\"></i></button>\r\n                <h4><i class=\"fa fa-address-card\"></i> <label id=\"amountExpend\"> {{modalTitle}}</label></h4>\r\n            </div>\r\n            <div class=\"modal-body box_button body_save\">\r\n                <div class=\"row body-content\">\r\n                    <div class=\"pull-right\">\r\n                        <button type=\"button\" (click)=\"newDetail()\" [disabled]=\"addContactToggle\" class=\"btn btn-danger box_button\" title=\"Add Contact\"><i class=\"fa fa-user-plus fa-3x\"></i></button>\r\n                    </div>\r\n                    <h5 style=\"font-weight:600\">{{selectedData.SupplierName}}</h5>\r\n                </div>\r\n                <div class=\"row body-content margin-top-10\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"thead-index\">\r\n                            <tr>\r\n                                <th>#</th>\r\n                                <th style=\"width:60%\"><i class=\"fa fa-address-card-o\"></i></th>\r\n                                <th style=\"width:20%\"><i class=\"fa fa-phone-square\"></i></th>\r\n                                <th style=\"width:5%\"><i class=\"fa fa-hand-o-down\"></i></th>\r\n                                <th></th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"DetailData?.length == 0\">\r\n                                <td colspan=\"4\"><label>No records.</label></td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let itemData of DetailData; let idx = index\">\r\n                                <td>{{idx + 1}}</td>\r\n                                <td>\r\n                                    {{itemData.ContactName}}\r\n                                    <br />{{itemData.Email}}\r\n                                </td>\r\n                                <td>{{itemData.PhoneNumber}}</td>\r\n                                <td>\r\n                                    <input type=\"checkbox\" id=\"chk_{{itemData.IDContact}}\" (click)=\"toggleActiveDetail(itemData)\" checked *ngIf=\"itemData.IsActive==true\" />\r\n                                    <input type=\"checkbox\" id=\"chk_{{itemData.IDContact}}\" (click)=\"toggleActiveDetail(itemData)\" *ngIf=\"itemData.IsActive==false\" />\r\n\r\n                                </td>\r\n                                <td align=\"right\">\r\n                                    <button type=\"button\" (click)=\"editDetail(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                                    <button type=\"button\" (click)=\"confirmDelete(itemData)\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"row body-content margin-top-10\" [ngStyle]=\"{'display': mdlIsDetail ? 'block' : 'none'}\">\r\n                    <div class=\"form-horizontal\">\r\n                        <div id=\"div_error_message\" align=\"center\" [ngStyle]=\"{'display': mdlIsMsg ? 'block' : 'none'}\">\r\n                            <h5 class=\"alert alert-danger box_button\" id=\"h5_error_message\">{{errorMsg}}</h5>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Contact Name</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input id=\"createID\" type=\"hidden\" [(ngModel)]=\"selectedContact.IDContact\" />\r\n                                <input id=\"createID\" type=\"hidden\" [(ngModel)]=\"selectedContact.IDSupplier\" />\r\n                                <input [(ngModel)]=\"selectedContact.ContactName\" placeholder=\"Contact Name\" class=\"form-control full-width\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Phone Number</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input [(ngModel)]=\"selectedContact.PhoneNumber\" placeholder=\"Phone Number\" class=\"form-control\" style=\"max-width:40%;width:40%\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Email</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input [(ngModel)]=\"selectedContact.Email\" placeholder=\"Email\" class=\"form-control\" style=\"max-width:60%;width:60%\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label col-md-2\">Is Active</label>\r\n                            <div class=\"col-md-10\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"selectedContact.IsActive\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\" style=\"margin-top:0px\">\r\n                        <button type=\"button\" (click)=\"saveDetail(selectedContact)\" class=\"btn btn-info box_button\"><i class=\"fa fa-save fa-3x\"></i></button>\r\n                    </div>\r\n                </div>                \r\n            </div>            \r\n        </div>\r\n    </div>\r\n</div>\r\n<!--End Modal Create-->\r\n\r\n"

/***/ }),

/***/ "./src/app/supplier.component.ts":
/*!***************************************!*\
  !*** ./src/app/supplier.component.ts ***!
  \***************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tblSupplier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tblSupplier */ "./src/app/models/tblSupplier.ts");
/* harmony import */ var _models_tblSupplierContact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/tblSupplierContact */ "./src/app/models/tblSupplierContact.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var SupplierComponent = /** @class */ (function () {
    function SupplierComponent(dataService, router, http) {
        this.dataService = dataService;
        this.router = router;
        this.http = http;
        this.errorMsg = "Error Zone";
        this.sureDeleteMsg = "Sure to delete this data?";
        this.modalTitle = "Add New";
        this.title = 'Supplier';
        this.addContactToggle = "";
        this.url = this.title + "/GetIndex";
        this.selectedContact = new _models_tblSupplierContact__WEBPACK_IMPORTED_MODULE_3__["tblSupplierContact"];
        this.mdlIsMsg = false;
        this.mdlIsLoading = false;
        this.mdlIsCreate = false;
        this.mdlIsDelete = false;
        this.mdlIsContact = false;
        this.mdlIsDetail = false;
    }
    SupplierComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; _this.OriData = data; });
        console.log("oridata: " + this.IndexData);
    };
    SupplierComponent.prototype.showMsg = function (isError) {
        this.mdlIsMsg = isError;
    };
    SupplierComponent.prototype.showLoading = function (isLoading) {
        this.mdlIsLoading = isLoading;
    };
    SupplierComponent.prototype.ngOnInit = function () {
        this.selectedData = new _models_tblSupplier__WEBPACK_IMPORTED_MODULE_2__["tblSupplier"]();
        this.showLoading(true);
        this.getData();
        this.showMsg(false);
        this.showLoading(false);
    };
    SupplierComponent.prototype.createModal = function (isCreate) {
        this.mdlIsCreate = isCreate;
    };
    SupplierComponent.prototype.newData = function () {
        this.addContactToggle = "";
        this.modalTitle = "Add New";
        this.selectedData = new _models_tblSupplier__WEBPACK_IMPORTED_MODULE_2__["tblSupplier"]();
        this.createModal(true);
        this.showMsg(false);
    };
    SupplierComponent.prototype.edit = function (itemData) {
        this.modalTitle = "Update";
        this.selectedData = itemData;
        this.createModal(true);
        this.showMsg(false);
    };
    SupplierComponent.prototype.save = function (itemData) {
        var _this = this;
        this.dataService.post(this.title + "/Save", itemData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            _this.createModal(false);
            _this.getData();
        });
    };
    SupplierComponent.prototype.confirmDelete = function (itemData) {
        this.selectedData = itemData;
        this.deleteModal(true);
    };
    SupplierComponent.prototype.deleteModal = function (isDelete) {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    };
    SupplierComponent.prototype.delete = function () {
        var _this = this;
        console.log("delete:" + this.selectedData.IDSupplier);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDSupplier).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }
            _this.deleteModal(false);
            _this.getData();
        });
    };
    SupplierComponent.prototype.detailModal = function (isDetail) {
        this.mdlIsContact = isDetail;
    };
    SupplierComponent.prototype.detail = function (itemData) {
        this.modalTitle = "Contact Detail";
        this.selectedData = itemData;
        this.getDetails(this.selectedData.IDSupplier);
        this.detailModal(true);
    };
    SupplierComponent.prototype.getDetails = function (idSupplier) {
        var _this = this;
        this.showLoading(true);
        this.showDetail(false);
        this.dataService.get(this.title + "/GetDetails/" + idSupplier).subscribe(function (data) { _this.DetailData = data; });
        console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);
    };
    SupplierComponent.prototype.newDetail = function () {
        this.modalTitle = "Add Contact";
        this.selectedContact = new _models_tblSupplierContact__WEBPACK_IMPORTED_MODULE_3__["tblSupplierContact"]();
        this.selectedContact.IDSupplier = this.selectedData.IDSupplier;
        //console.log("detail IDSupplier:" + this.selectedContact.IDSupplier);
        this.showDetail(true);
        this.showMsg(false);
    };
    SupplierComponent.prototype.showDetail = function (isDetail) {
        this.mdlIsDetail = isDetail;
    };
    SupplierComponent.prototype.editDetail = function (itemData) {
        this.addContactToggle = "disabled";
        this.modalTitle = "Update Contact";
        this.selectedContact = itemData;
        this.selectedContact.IDSupplier = this.selectedData.IDSupplier;
        console.log("detail IDSupplier:" + this.selectedContact.IDSupplier);
        this.showDetail(true);
        this.showMsg(false);
    };
    SupplierComponent.prototype.saveDetail = function (itemDetail) {
        var _this = this;
        this.dataService.post(this.title + "/SaveDetail", itemDetail).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showLoading(true);
            _this.showMsg(true);
            _this.showDetail(false);
            _this.getDetails(_this.selectedData.IDSupplier);
            _this.showLoading(false);
            _this.addContactToggle = "";
        });
    };
    SupplierComponent.prototype.filterIndex = function (value) {
        var data = this.OriData.filter(function (item) { return item.SupplierName.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        this.IndexData = data;
    };
    SupplierComponent.prototype.toggleActive = function (itemData) {
        var _this = this;
        if (itemData.IsActive == true) {
            itemData.IsActive = false;
        }
        else {
            itemData.IsActive = true;
        }
        this.dataService.post(this.title + "/ToggleActive", itemData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            _this.getData();
        });
    };
    SupplierComponent.prototype.toggleActiveDetail = function (itemData) {
        var _this = this;
        if (itemData.IsActive == true) {
            itemData.IsActive = false;
        }
        else {
            itemData.IsActive = true;
        }
        this.dataService.post(this.title + "/ToggleActiveDetail", itemData).subscribe(function (data) {
            _this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                _this.showMsg(true);
                return;
            }
            _this.showMsg(true);
            _this.getData();
        });
    };
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'supplier-app',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/supplier.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/user.component.html":
/*!*************************************!*\
  !*** ./src/app/user.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row body-content\">\r\n    <div class=\"pull-right\">\r\n        <button type=\"button\" class=\"btn btn-danger box_button\" style=\"margin-top:10px\" title=\"Add User\"><i class=\"fa fa-user-plus fa-3x\"></i></button>\r\n    </div>\r\n    <h2>Users</h2>\r\n    <hr />\r\n</div>\r\n<div class=\"row body-content\">\r\n    <div class=\"col-lg-12 body-zero\">\r\n        <div class=\"col-lg-6 body-zero\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" ng-model=\"search.UserName\" class=\"form-control box_button\" style=\"width:100%;max-width:100%\">\r\n                <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-danger\" type=\"button\"><i class=\"fa fa-search fa-2x\"></i></button>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row body-content margin-top-10\">\r\n    <table class=\"table\">\r\n        <thead style=\"background-color: #009688;color:white;font-weight:600\">\r\n            <tr>\r\n                <th>#</th>\r\n                <th style=\"width:20%\"><i class=\"fa fa-vcard\"></i></th>\r\n                <th style=\"width:40%\"><i class=\"fa fa-user-circle\"></i></th>\r\n                <th style=\"width:20%\"><i class=\"fa fa-phone-square\"></i></th>\r\n                <th style=\"width:5%\"><i class=\"fa fa-hand-o-down\"></i></th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <!--<tr ng-show=\"IndexData.length==0\">\r\n                <td colspan=\"4\"><label>No records.</label></td>\r\n            </tr>-->\r\n            <tr *ngFor=\"let m of IndexData; let idx = index\">\r\n                <td>{{idx + 1}}</td>\r\n                <td>{{m.UserName}}\r\n                    <br />{{m.Password}}\r\n                </td>\r\n                <td>\r\n                    {{m.DisplayName}}\r\n                    <br />{{m.Email}}\r\n                </td>\r\n                <td>{{m.PhoneNumber}}</td>\r\n                <td>\r\n                    <input type=\"checkbox\" id=\"chk_{{m.IDSupplier}}\" (click)=\"toggleActive()\" checked *ngIf=\"m.IsActive==true\" />\r\n                    <input type=\"checkbox\" id=\"chk_{{m.IDSupplier}}\" (click)=\"toggleActive()\" *ngIf=\"m.IsActive==false\" />\r\n\r\n                </td>\r\n                <td align=\"right\">\r\n                    <button type=\"button\" class=\"btn btn-cyan box_button btn-crud\" title=\"detail\"><i class=\"fa fa-list fa-2x\"></i></button>\r\n                    <button type=\"button\" ng-click=\"edit()\" class=\"btn btn-cyan box_button btn-crud\" title=\"edit\"><i class=\"fa fa-edit fa-2x\"></i></button>\r\n                    <button type=\"button\" ng-click=\"delete()\" class=\"btn btn-cyan box_button btn-crud\" title=\"remove\"><i class=\"fa fa-trash fa-2x\"></i></button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/user.component.ts":
/*!***********************************!*\
  !*** ./src/app/user.component.ts ***!
  \***********************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(dataService) {
        this.dataService = dataService;
        this.title = 'User';
        this.url = "UserManagement/GetIndex";
    }
    UserComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.get(this.url).subscribe(function (data) { _this.IndexData = data; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-app',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], UserComponent);
    return UserComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ProjectAdi\Angular7\MyCompany\MyCompany\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map