import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.user.isLogin.next(true);
      this.user.username = localStorage.getItem('username');
      this.user.token = localStorage.getItem('token');
      this.user.role = localStorage.getItem('role');
    }
  }

}
