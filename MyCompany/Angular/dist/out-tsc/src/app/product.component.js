import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { tblProduct } from './models/tblProduct';
import { DataService } from './data.service';
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
        this.selectedData = new tblProduct();
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
        this.selectedData = new tblProduct();
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
    ProductComponent = tslib_1.__decorate([
        Component({
            selector: 'product-app',
            templateUrl: './product.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map