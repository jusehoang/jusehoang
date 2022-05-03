import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin = false;
  username: string | null = null;
  avatar = '';
  constructor(private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user.isLogin.subscribe(data => {
      this.isLogin = data;
    })
    this.username = this.user.username;
    this.user.avatar.subscribe(data => {
      this.avatar = data;
    })
  }

  editProfile() {
    this.router.navigateByUrl('/eidt-profile');
  }

  changePassword(){
    this.router.navigateByUrl('/change-password');
  }

  historyBookRoom() {
    this.router.navigateByUrl('/history-book-room');
  }

  manageBookRoom() {
    this.router.navigateByUrl('/manage-book-room');
  }

  logout(){
    localStorage.clear();
    this.user.isLogin.next(false);
    this.router.navigateByUrl('/home')
  }

}
