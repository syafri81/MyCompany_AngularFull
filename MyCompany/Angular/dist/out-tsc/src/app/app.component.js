import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { UserTemplate } from './models/UserTemplate';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Angular';
        this.userLogin = new UserTemplate;
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
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map