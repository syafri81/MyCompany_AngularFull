import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
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
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'dashboard-app',
            templateUrl: './dashboard.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map