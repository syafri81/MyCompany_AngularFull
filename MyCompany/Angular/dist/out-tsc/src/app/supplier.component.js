import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { tblSupplier } from './models/tblSupplier';
import { tblSupplierContact } from './models/tblSupplierContact';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
        this.selectedContact = new tblSupplierContact;
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
        this.selectedData = new tblSupplier();
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
        this.selectedData = new tblSupplier();
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
        this.selectedContact = new tblSupplierContact();
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
    SupplierComponent = tslib_1.__decorate([
        Component({
            selector: 'supplier-app',
            templateUrl: './supplier.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router, HttpClient])
    ], SupplierComponent);
    return SupplierComponent;
}());
export { SupplierComponent };
//# sourceMappingURL=supplier.component.js.map