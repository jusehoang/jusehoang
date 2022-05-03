import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-home-store',
  templateUrl: './home-store.component.html',
  styleUrls: ['./home-store.component.scss']
})
export class HomeStoreComponent implements OnInit {
  isLogin = false;
  username: string | null = null;
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.user.isLogin.next(true);
      this.user.username = localStorage.getItem('username');
      this.user.token = localStorage.getItem('token');
      this.user.role = localStorage.getItem('role');
      this.username = localStorage.getItem('username');
    }
    this.user.isLogin.subscribe(data => {
      this.isLogin = data;
    })
  }

  editProfile() {
    this.router.navigateByUrl('/store/edit-profile-store');
  }

  changePassword() {}

  logout() {
    localStorage.clear();
    this.user.isLogin.next(false);
    this.router.navigateByUrl('/home')
  }
}
