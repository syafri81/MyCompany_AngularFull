import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
import { DataService } from './data.service';
import { tblSupplier } from './models/tblSupplier';
var SupplierCreateComponent = /** @class */ (function () {
    function SupplierCreateComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    SupplierCreateComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", tblSupplier)
    ], SupplierCreateComponent.prototype, "selectedData", void 0);
    SupplierCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'supplier-create-app',
            templateUrl: './supplier-create.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], SupplierCreateComponent);
    return SupplierCreateComponent;
}());
export { SupplierCreateComponent };
//# sourceMappingURL=supplier-create.component.js.map