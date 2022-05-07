import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/@services/auth.service';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.scss']
})
export class ChangePasswordAdminComponent implements OnInit {
  form: FormGroup;
  passwordVisible = false;
  passwordVisible1 = false;
  passwordVisible2 = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private user: UserService) {
    this.form = fb.group({
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', this.confirmValidator]
    })
   }

  ngOnInit(): void {
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.form.get('confirmPassword')?.updateValueAndValidity());
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.value.password) {
      return { confirm: true, error: true };
    }
    return {};
  };

  doChangePassword($event: Event) {
    if(this.form.invalid){
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      const username = this.user.username;
      if(username){
        console.log('ok');
        this.authService.changePassword(username ,this.form.value.oldPassword, this.form.value.password).subscribe(data => {
          console.log(data);
        }, error => {
          console.log(error);
        })
      }

    }
    $event.preventDefault();
  }

}
