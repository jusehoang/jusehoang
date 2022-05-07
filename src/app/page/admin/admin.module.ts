import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ThemesModule } from "src/app/@themes/themes.module";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { ManageAccountStoreComponent } from './manage-account-store/manage-account-store.component';
import { ManageAccountCustomerComponent } from './manage-account-customer/manage-account-customer.component';
import { ListAdministratorsComponent } from './list-administrators/list-administrators.component';
import { RequestStoreComponent } from './request-store/request-store.component';
import { ManageUiComponent } from './manage-ui/manage-ui.component';
import { EditProfileAdminComponent } from './edit-profile-admin/edit-profile-admin.component';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';
import { AddAccountByAdminComponent } from './add-account-by-admin/add-account-by-admin.component';
import { AddAccountStoreComponent } from './add-account-store/add-account-store.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageAccountStoreComponent,
    ManageAccountCustomerComponent,
    ListAdministratorsComponent,
    RequestStoreComponent,
    ManageUiComponent,
    EditProfileAdminComponent,
    ChangePasswordAdminComponent,
    AddAccountByAdminComponent,
    AddAccountStoreComponent,
  ],
  imports: [
    ThemesModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule {}
