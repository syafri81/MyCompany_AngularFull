import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UserTemplate } from './models/UserTemplate';
import { View_UserAssignMenu } from './models/View_UserAssignMenu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular';

    userLogin: UserTemplate = new UserTemplate;
    isDisplayCampaign: boolean = false;
    isDisplayHome: boolean = false;
    campaignID: number = 0;

    constructor(private dataService: DataService) { }

    assignMenu: View_UserAssignMenu[] = new Array<View_UserAssignMenu>();    
    ngOnInit(): void {
        this.dataService.get("Dashboard/DisplayCampaign").subscribe(data => { this.isDisplayCampaign = data });
        this.dataService.get("Dashboard/DisplayHome").subscribe(data => { this.isDisplayHome = data });
        this.dataService.get("Dashboard/GetDashboardMenu").subscribe(data => { this.assignMenu = data });        
    }    
}
