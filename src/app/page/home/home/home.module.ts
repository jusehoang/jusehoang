import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ThemesModule } from 'src/app/@themes/themes.module';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { EditProfileComponent } from '../../auth/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    EditProfileComponent,
    RoomDetailComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    ThemesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule {}
