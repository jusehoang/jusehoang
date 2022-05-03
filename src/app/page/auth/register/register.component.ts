import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Register } from 'src/app/@core/models/register.model';
import { User } from 'src/app/@core/models/user.model';
import { validateControlsValue } from 'src/app/@core/validators/confirm-password.validator';
import { AuthService } from 'src/app/@services/auth.service';
import { MessageService } from 'src/app/@services/message.service';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  isLogin = false;
  dateFormat = 'dd/MM/yyyy';
  passwordVisible = false;
  passwordVisible1 = false;
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private authService: AuthService,
    private messageService: MessageService
    ) {
    this.user.isLogin.subscribe((data) => (this.isLogin = data));
    this.formRegister = this.fb.group({
      full_name: ['', Validators.required],
      tel: ['', Validators.required],
      id_card: [''],
      birth_day: [''],
      address: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [this.confirmValidator]],
    });
  }

  ngOnInit(): void {}

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.formRegister.get('confirmPassword')?.updateValueAndValidity()
    );
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.formRegister.value.password) {
      return { confirm: true, error: true };
    }
    return {};
  };

  doRegister() {
    if (this.formRegister.invalid) {
      Object.values(this.formRegister.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      const register: Register = {
        username: this.formRegister.value.username,
        password: this.formRegister.value.password,
        full_name: this.formRegister.value.full_name,
        address: this.formRegister.value.address,
        tel: this.formRegister.value.tel,
        birth_day: this.formRegister.value.birth_day,
        id_card: this.formRegister.value.id_card,
        avatar: "",
        is_request: false,
      };
      this.authService.register(register).subscribe((data) => {
        this.messageService.showMessage({
          content: 'Bạn đã đăng kí thành công. Vui lòng đăng nhập để tiếp tục sử dụng.'
        })
      }, (error) => {
        console.log(error)
      })
    }
  }
}
