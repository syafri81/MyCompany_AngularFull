import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from './data.service';
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
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'user-app',
            templateUrl: './user.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map