import { SaleComponent } from './sale/sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStoreComponent } from './home-store/home-store.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { OverviewComponent } from './overview/overview.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ManageBookRoomComponent } from './manage-book-room/manage-book-room.component';
import { ManageMonneyRoomComponent } from './manage-monney-room/manage-monney-room.component';
import { EditProfileStoreComponent } from './edit-profile-store/edit-profile-store.component';
import { ChangePasswordStoreComponent } from './change-password-store/change-password-store.component';
import { AddBillComponent } from './add-bill/add-bill.component';

const routes: Routes = [
  {
    path: '',
    component: HomeStoreComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'manage-room',
        component: ManageRoomComponent
      },
      {
        path: 'edit-room',
        component: UpdateRoomComponent
      },
      {
        path: 'add-room',
        component: AddRoomComponent
      },
      {
        path: 'sale',
        component: SaleComponent
      },
      {
        path: 'manage-book-room',
        component: ManageBookRoomComponent
      },
      {
        path: 'manage-monney-room',
        component: ManageMonneyRoomComponent
      },
      {
        path: 'edit-profile-store',
        component: EditProfileStoreComponent
      },
      {
        path: 'change-password store',
        component: ChangePasswordStoreComponent
      },
      {
        path: 'add-bill',
        component: AddBillComponent
      },
      {
        path: '',
        redirectTo: 'manage-room',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule {}
