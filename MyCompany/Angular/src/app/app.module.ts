import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { SupplierComponent } from './supplier.component';
import { ProductComponent } from './product.component';
import { PartnerComponent } from './partner.component';
import { ExpendComponent } from './expend.component';
import { PurchaseComponent } from './purchase.component';

import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { FormatLocalDate } from './data.formatdate';

@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        AppComponent,
        HomeComponent,
        UserComponent,
        SupplierComponent,
        ProductComponent,
        PartnerComponent,
        ExpendComponent,
        PurchaseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        DataService,
        FormatLocalDate
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
