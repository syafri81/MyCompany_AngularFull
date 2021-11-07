import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from './data.service';
var CampaignChosen = /** @class */ (function () {
    function CampaignChosen(dataService) {
        this.dataService = dataService;
        this.campaignName = "";
    }
    CampaignChosen.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.get("Dashboard/GetChosenCampaign").subscribe(function (data) { _this.campaignName = data; });
    };
    CampaignChosen = tslib_1.__decorate([
        Component({
            selector: 'campaignchosen-app',
            templateUrl: './campaignchosen.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], CampaignChosen);
    return CampaignChosen;
}());
export { CampaignChosen };
//# sourceMappingURL=campaignchosen.js.map