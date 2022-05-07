import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  passwordVisible = false;
  errorMessage = '';
  constructor(private fb: FormBuilder, private user: UserService, private authService: AuthService, private router: Router) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  doLogin() {
    if(this.formLogin.invalid){
      Object.values(this.formLogin.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      this.authService.login(this.formLogin.value.username, this.formLogin.value.password).subscribe((data) => {
        this.user.isLogin.next(true);
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('role', data.role);
        localStorage.setItem('id', data.id);
        localStorage.setItem('avatar', data.avatar);
        this.user.token = data.token;
        this.user.username = data.username;
        this.user.role = data.role;
        this.user.avatar.next(data.avatar);
        if(this.user.role == 'ROLE_STORE'){
          this.router.navigate(['store']);
        }
        if(this.user.role == 'ROLE_USER'){
          this.router.navigate(['home']);
        }
        if(this.user.role == 'ROLE_ADMIN'){
          this.router.navigate(['admin']);
        }
      },
      (error) => {
        console.log(error.error);
        this.errorMessage = error.error;
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000)
      }
      )
    }
  }
}
