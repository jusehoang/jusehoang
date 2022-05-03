import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemesModule } from 'src/app/@themes/themes.module';
// import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // AuthRoutingModule,
    ThemesModule,
    RouterModule
  ]
})
export class AuthModule {}
