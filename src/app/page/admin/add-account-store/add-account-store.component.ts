import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/@core/models/user.model';
import { AdminService } from 'src/app/@services/admin.service';
import { MessageService } from 'src/app/@services/message.service';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-add-account-store',
  templateUrl: './add-account-store.component.html',
  styleUrls: ['./add-account-store.component.scss']
})
export class AddAccountStoreComponent implements OnInit {

  form!: FormGroup;
  isLogin = false;
  dateFormat = 'dd/MM/yyyy';
  passwordVisible = false;
  passwordVisible1 = false;
  currentUser!: User;
  avatar = '';
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private messageService: MessageService,
    private router: Router,
    private adminService: AdminService
  ) {
    this.user.isLogin.subscribe((data) => (this.isLogin = data));
    this.form = this.fb.group({
      full_name: ['', Validators.required],
      tel: ['', Validators.required],
      id_card: [''],
      birth_day: [''],
      address: [''],
      username: ['', Validators.required],
      avatar: [''],
      role: ['ROLE_USER', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', [this.confirmValidator]]
    });
  }

  ngOnInit(): void {
  }

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.form.get('confirmPassword')?.updateValueAndValidity()
    );
  }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.form.value.password) {
      return { confirm: true, error: true };
    }
    return {};
  };

  doUpdate() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    } else {
      const user: User = {
        username: this.form.value.username,
        full_name: this.form.value.full_name,
        address: this.form.value.address,
        tel: this.form.value.tel,
        birth_day: this.form.value.birth_day,
        id_card: this.form.value.id_card,
        avatar: this.form.value.avatar,
        is_request: false,
        role: 'ROLE_STORE',
        password: this.form.value.password
      };
      console.log(user)
      this.adminService.addAccountByAdminToStore(user).subscribe({
        next: () => {
          this.messageService.showMessage({
            content: 'Cập nhật thông tin thành công',
            type: 'success',
          });
          this.router.navigateByUrl('/admin/manage-account-store');
        },
        error: (error) => {
          this.messageService.showMessage({
            content: 'Cập nhật thất bại vui lòng thử lại',
          });
        }
      });
    }
  }

}
