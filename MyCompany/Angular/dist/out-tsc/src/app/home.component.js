import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    //title = 'Supplier Index';
    HomeComponent.prototype.ngOnInit = function () {
        //this.dataService.get("GeneralData/GetDashboard").subscribe(data => { this.userLogin = data });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'home-app',
            templateUrl: './home.component.html'
            //templateUrl: 'Views/Home/MyIndex.html'
        })
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map