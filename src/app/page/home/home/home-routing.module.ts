import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChangePasswordComponent } from "../../auth/change-password/change-password.component";
import { EditProfileComponent } from "../../auth/edit-profile/edit-profile.component";
import { LoginComponent } from "../../auth/login/login.component";
import { RegisterComponent } from "../../auth/register/register.component";
import { HistoryBookRoomComponent } from "../../customer/history-book-room/history-book-room.component";
import { ManageBookRoomComponent } from "../../customer/manage-book-room/manage-book-room.component";
import { RequestToStoreComponent } from "../../customer/request-to-store/request-to-store.component";
import { HomeComponent } from "./home.component";
import { MainComponent } from "./main/main.component";
import { RoomDetailComponent } from "./room-detail/room-detail.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'eidt-profile',
        component: EditProfileComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'room-detail',
        component: RoomDetailComponent
      },
      {
        path: 'history-book-room',
        component: HistoryBookRoomComponent
      },
      {
        path: 'manage-book-room',
        component: ManageBookRoomComponent
      },
      {
        path: 'request-to-store',
        component: RequestToStoreComponent
      },
      { path: '',   redirectTo: 'home', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
