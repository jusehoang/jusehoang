import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { User } from 'src/app/@core/models/user.model';
import { AuthService } from 'src/app/@services/auth.service';
import { MessageService } from 'src/app/@services/message.service';
import { UserService } from 'src/app/@services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;
  isLogin = false;
  dateFormat = 'dd/MM/yyyy';
  passwordVisible = false;
  passwordVisible1 = false;
  fileList: NzUploadFile[] = [];
  currentUser!: User;
  avatar = '';
  url = environment.baseUrl + '/images/'
  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private messageService: MessageService,
    private http: HttpClient,
    private auth: AuthService,
    private notification: NzNotificationService,
    private router: Router
    ) {
    this.user.isLogin.subscribe(data => this.isLogin = data);
    this.form = this.fb.group({
      full_name: ['', Validators.required],
      tel: ['', Validators.required],
      id_card: [''],
      birth_day: [''],
      address: [''],
      username: [''],
      avatar: ['']
    });
    this.user.avatar.subscribe(data => {
      this.avatar = data;
    })
  }

  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser);
      this.form.patchValue({
        full_name: this.currentUser.full_name,
        tel: this.currentUser.tel,
        id_card: this.currentUser.id_card,
        birth_day: this.currentUser.birth_day,
        address: this.currentUser.address,
        username: this.currentUser.username,
        avatar: this.currentUser.avatar,
      });
      this.form.get('username')?.disable();
    })
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

  // beforeUpload = (file: NzUploadFile): Observable<boolean> =>
  //   new Observable((observer: Observer<boolean>) => {
  //     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
  //     if(!isJpgOrPng){
  //       this.messageService.showMessage({
  //         content: 'Bạn chỉ có thể tải lên ảnh dạng JPG, JPEG và PNG'
  //       })
  //       observer.complete();
  //       return;
  //     } else {
  //       this.fileList = [...this.fileList, file];
  //       console.log(this.fileList);
  //       const formData = new FormData();
  //       this.fileList.forEach((file: any) => {
  //         formData.append('file' ,file);
  //       })
  //       const url = environment.baseUrl + '/api/upload/' + 'hung';
  //       this.http.post(url, formData).subscribe(data => {
  //         console.log(data);
  //         this.messageService.showMessage({
  //           content: 'Bạn tải ảnh lên thành công'
  //         })
  //         this.avatar = url + this.fileList[0].name;
  //         console.log(this.avatar);
  //         this.user.avatar.next(this.fileList[0].name);
  //       })
  //       console.log(this.fileList)
  //       observer.next(isJpgOrPng);
  //       observer.complete();
  //     }
  //   })

    doUpdate() {
      if(this.form.invalid){
        Object.values(this.form.controls).forEach((control) => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      } else {
        let avatar = '';
        this.user.avatar.subscribe(data => {
          avatar = data;
        })
        const user = {
          full_name: this.form.value.full_name,
          address: this.form.value.address,
          tel: this.form.value.tel,
          birth_day: this.form.value.birth_day,
          id_card: this.form.value.id_card,
          avatar: this.form.value.avatar,
          is_request: true,
          // role: localStorage.getItem('role') || ''
        }
        this.auth.updateUser(user).subscribe(data => {
          this.messageService.showMessage({
            content: 'Cập nhật thông tin thành công',
            type: 'success'
          });
          if(data.avatar){
            this.user.avatar.next(data.avatar);
          }
          this.router.navigateByUrl('/home')
        });
      }
    }
}
