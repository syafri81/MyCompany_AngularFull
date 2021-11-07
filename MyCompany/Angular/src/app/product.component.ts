import { Component, OnInit } from '@angular/core';
import { tblProduct } from './models/tblProduct';
import { comboTemplate } from './models/comboTemplate';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'product-app',
    templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
    errorMsg: string = "Error Zone";
    sureDeleteMsg: string = "Sure to delete this data?";
    modalTitle: string = "Add New";
    selectedData: tblProduct;
    DetailData: tblProduct[];
    OriDetailData: tblProduct[];
    oriProductID: number;

    title = 'Product';
    
    detailToggle = "disabled";
    
    IndexData: tblProduct[];
    OriData: tblProduct[];

    flag: boolean = false;
    ComboSupplier: comboTemplate[];
    AutoCompleteProduct: tblProduct[];

    private url = this.title + "/GetIndex";
    
    constructor(private dataService: DataService) { }

    getData(): void {
        this.dataService.get(this.url).subscribe(data => { this.IndexData = data; this.OriData = data });
    }

    mdlIsMsg: boolean = false;
    showMsg(isError: boolean): void {
        this.mdlIsMsg = isError;
    }

    mdlIsLoading: boolean = false;
    showLoading(isLoading: boolean): void {
        this.mdlIsLoading = isLoading;
    }

    ngOnInit(): void {
        this.modalTitle = "Add Product";
        this.DetailData = new Array<tblProduct>();
        this.selectedData = new tblProduct();
        this.showLoading(true);
        this.getData();

        this.flag = false;

        this.showMsg(false);
        this.showLoading(false);
    }

    mdlIsProduct: boolean = false;
    detailModal(isDetail: boolean): void {
        //this.detailToggle = "disabled";
        this.mdlIsProduct = isDetail;
    }

    getComboSupplier(): void {
        this.dataService.get("GeneralData/ComboSupplier").subscribe(data => { this.ComboSupplier = data });
    }

    isAddDetail: boolean = true;
    newData(): void {
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
    }

    newDetail(): void {

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
    }

    //mdlIsDetail: boolean = false;
    //showInputDetail(isDetail: boolean): void {
    //    this.mdlIsDetail = isDetail;
    //}

    addDetail(): void {
        //this.selectedData.IDSupplier = this.selectedData.IDSupplier;        

        this.dataService.post(this.title + "/Save", this.selectedData).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                this.showMsg(true);
                this.getData();
                return;
            }

            this.selectedData.IDProduct = parseInt(data.messages[0]);
            console.log("Add, ID Product: " + this.selectedData.IDProduct);
            this.getData();
            this.mdlIsProduct = false;
        });
    }    

    searchProduct(term: string, supplierID: number): void {
        this.flag = true;
        //this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term + "&supplierID=" + supplierID).subscribe(data => { this.AutoCompleteProduct = data });
        this.dataService.get("GeneralData/AutoCompleteProduct?term=" + term).subscribe(data => { this.AutoCompleteProduct = data });
    }

    onselectProduct(product: tblProduct): void {
        if (product.IDProduct > 0) {
            this.selectedData.ProductName = product.ProductName;
            //this.selectedData.BuyPrice = product.BuyPrice;
            //this.selectedData.SellPrice = product.SellPrice;
            this.selectedData.IsActive = product.IsActive;
            this.selectedData.IDProduct = product.IDProduct;
            this.flag = false;
            this.showMsg(false);
        }
    }
    
    addDetailToggle(): void {
        //console.log("flag: " + this.flag);
        //if (this.flag == false) {
        //    this.errorMsg = "Product is exist.";
        //    this.showMsg(true);
        //    return;
        //}        

        this.detailToggle = "";
        //alert("show add");
    }

    confirmDelete(itemData: tblProduct): void {
        this.selectedData = itemData;
        this.deleteModal(true);
    }

    mdlIsDelete: boolean = false;
    deleteModal(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDelete = isDelete;
    }

    delete(): void {
        console.log("delete:" + this.selectedData.IDProduct);
        this.dataService.delete(this.title + "/Delete/" + this.selectedData.IDProduct).subscribe(data => {
            this.errorMsg = data.messages[0];
            if (data.isSuccess == false) {
                return;
            }

            this.deleteModal(false);
            this.getData();
        });
    }

    confirmDeleteDetail(itemData: tblProduct): void {
        this.selectedData = itemData;
        this.deleteModalDetail(true);
    }

    mdlIsDeleteDetail: boolean = false;
    deleteModalDetail(isDelete: boolean): void {
        this.errorMsg = this.sureDeleteMsg;
        this.mdlIsDeleteDetail = isDelete;
    }

    deleteDetail(): void {
        console.log("delete:" + this.selectedData.IDProduct);
        this.dataService.delete(this.title + "/DeleteDetail?id=" + this.selectedData.IDProduct + "&idProduct=" + this.selectedData.IDProduct).subscribe(data => {
            if (data.isSuccess == false) {
                this.errorMsg = data.messages[0];
                return;
            }

            this.deleteModalDetail(false);
            this.getDetails(this.selectedData.IDProduct);
            this.newDetail();            
        });
    }

    detail(itemData: tblProduct): void {
        this.modalTitle = "Product Detail";
        this.selectedData = itemData;
        this.getDetails(this.selectedData.IDProduct);
        this.detailModal(true);
        this.newDetail();
    }

    getDetails(idProduct: number): void {
        this.showLoading(true);
        //this.showInputDetail(false);
        //this.dataService.get(this.title + "/GetDetails/" + idProduct).subscribe(data => { this.DetailData = data; this.OriDetailData = data });
        //console.log("DetailData: " + this.DetailData);
        this.showMsg(false);
        this.showLoading(false);

    }

    editDetail(itemData: tblProduct): void {
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
    }

    filterIndex(value: string) {
        var data = this.OriData.filter(item => item.SearchName.toLowerCase().indexOf(value.toLowerCase()) > -1)

        this.IndexData = data;
    }
}
