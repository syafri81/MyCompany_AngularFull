import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user.component';
import { SupplierComponent } from './supplier.component';
import { ProductComponent } from './product.component';
import { PartnerComponent } from './partner.component';
import { ExpendComponent } from './expend.component';
import { PurchaseComponent } from './purchase.component';
var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent },
    { path: 'Account/Login', component: LoginComponent },
    { path: 'Dashboard', component: DashboardComponent },
    { path: 'UserManagement', component: UserComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: 'Product', component: ProductComponent },
    { path: 'Partner', component: PartnerComponent },
    { path: 'Expend', component: ExpendComponent },
    { path: 'Purchase', component: PurchaseComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map