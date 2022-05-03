import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ThemesModule } from "src/app/@themes/themes.module";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { ManageAccountStoreComponent } from './manage-account-store/manage-account-store.component';
import { ManageAccountCustomerComponent } from './manage-account-customer/manage-account-customer.component';
import { ListAdministratorsComponent } from './list-administrators/list-administrators.component';
import { RequestStoreComponent } from './request-store/request-store.component';
import { ManageUiComponent } from './manage-ui/manage-ui.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageAccountStoreComponent,
    ManageAccountCustomerComponent,
    ListAdministratorsComponent,
    RequestStoreComponent,
    ManageUiComponent
  ],
  imports: [
    ThemesModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
