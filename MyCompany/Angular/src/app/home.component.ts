import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html'
    //templateUrl: 'Views/Home/MyIndex.html'
})
export class HomeComponent implements OnInit {
    //title = 'Supplier Index';

    ngOnInit(): void {
        //this.dataService.get("GeneralData/GetDashboard").subscribe(data => { this.userLogin = data });
    }
}
