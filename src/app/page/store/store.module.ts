import { CommonModule } from '@angular/common';
import { HomeStoreComponent } from './home-store/home-store.component';
import { NgModule } from "@angular/core";
import { ThemesModule } from 'src/app/@themes/themes.module';
import { StoreRoutingModule } from './store-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ManageRoomComponent } from './manage-room/manage-room.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { SaleComponent } from './sale/sale.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ManageBookRoomComponent } from './manage-book-room/manage-book-room.component';
import { ManageMonneyRoomComponent } from './manage-monney-room/manage-monney-room.component';
import { ChangePasswordStoreComponent } from './change-password-store/change-password-store.component';
import { EditProfileStoreComponent } from './edit-profile-store/edit-profile-store.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';

@NgModule({
  declarations: [
    HomeStoreComponent,
    OverviewComponent,
    ManageRoomComponent,
    UpdateRoomComponent,
    SaleComponent,
    AddRoomComponent,
    ManageBookRoomComponent,
    ManageMonneyRoomComponent,
    ChangePasswordStoreComponent,
    EditProfileStoreComponent,
    AddBillComponent,
    EditBillComponent
  ],
  imports: [
    ThemesModule,
    StoreRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class StoreModule {}
