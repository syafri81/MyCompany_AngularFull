import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from './user.component';
import { SupplierComponent } from './supplier.component';
import { ProductComponent } from './product.component';
import { PartnerComponent } from './partner.component';
import { ExpendComponent } from './expend.component';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
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

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }