import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { tblPartner } from './models/tblPartner';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
        this.selectedData = new tblPartner();
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
        this.selectedData = new tblPartner();
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
    PartnerComponent = tslib_1.__decorate([
        Component({
            selector: 'partner-app',
            templateUrl: './partner.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router, HttpClient])
    ], PartnerComponent);
    return PartnerComponent;
}());
export { PartnerComponent };
//# sourceMappingURL=partner.component.js.map