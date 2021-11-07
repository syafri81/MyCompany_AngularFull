import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
import { DataService } from './data.service';
import { tblSupplier } from './models/tblSupplier';

@Component({
    selector: 'supplier-create-app',
    templateUrl: './supplier-create.component.html'
})
export class SupplierCreateComponent implements OnInit {        
    @Input() selectedData: tblSupplier;

    constructor(private dataService: DataService, private route: ActivatedRoute) { }

    
    ngOnInit(): void{
        
    }
}