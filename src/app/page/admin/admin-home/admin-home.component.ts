import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  isLogin = false;
  username: string | null = null;
  avatar = '';
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.user.token = localStorage.getItem('token');
      this.user.username = localStorage.getItem('username');
      this.user.role = localStorage.getItem('role');
      this.user.isLogin.next(true);
      this.username = this.user.username;
    }
    const avatar = localStorage.getItem('avatar')
    if(avatar) {
      this.user.avatar.next(avatar);
    }
    this.user.isLogin.subscribe(user => this.isLogin = user);
    this.user.avatar.subscribe(avatar => {
      this.avatar = avatar;
    })
  }

  editProfile() {
    this.router.navigateByUrl('/admin/edit-profile')
  }

  changePassword() {
    this.router.navigateByUrl('/admin/change-password')
  }

  logout() {
    localStorage.clear();
    this.user.isLogin.next(false);
    this.router.navigateByUrl('/home')
  }

}
