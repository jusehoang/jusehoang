import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ListAdministratorsComponent } from "./list-administrators/list-administrators.component";
import { ManageAccountCustomerComponent } from "./manage-account-customer/manage-account-customer.component";
import { ManageAccountStoreComponent } from "./manage-account-store/manage-account-store.component";
import { ManageUiComponent } from "./manage-ui/manage-ui.component";
import { RequestStoreComponent } from "./request-store/request-store.component";

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: 'manage-account-store',
        component: ManageAccountStoreComponent
      },
      {
        path: 'manage-account-customer',
        component: ManageAccountCustomerComponent
      },
      {
        path: 'list-account-admin',
        component: ListAdministratorsComponent
      },
      {
        path: 'request-store',
        component: RequestStoreComponent
      },
      {
        path: 'request-store',
        component: RequestStoreComponent
      },
      {
        path: 'manage-ui',
        component: ManageUiComponent
      },
      {
        path: '', redirectTo: 'manage-account-store', pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
