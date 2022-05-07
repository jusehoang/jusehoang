import { AdminService } from 'src/app/@services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';
import { MessageService } from 'src/app/@services/message.service';

@Component({
  selector: 'app-request-to-store',
  templateUrl: './request-to-store.component.html',
  styleUrls: ['./request-to-store.component.scss']
})
export class RequestToStoreComponent implements OnInit {

  constructor(private router: Router, private adminService: AdminService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['home'])
  }

  requestToStore(){
    this.adminService.requestToStore().subscribe(data => {
      this.messageService.showMessage({
        content: 'Bạn đã tạo yêu cầu thành công!'
      })
    })
  }
}
