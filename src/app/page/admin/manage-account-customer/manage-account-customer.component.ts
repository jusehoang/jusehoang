import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Room } from 'src/app/@core/models/room.model';
import { User } from 'src/app/@core/models/user.model';
import { AdminService } from 'src/app/@services/admin.service';
import { MessageService } from 'src/app/@services/message.service';

@Component({
  selector: 'app-manage-account-customer',
  templateUrl: './manage-account-customer.component.html',
  styleUrls: ['./manage-account-customer.component.scss']
})
export class ManageAccountCustomerComponent implements OnInit {
  listUser!: User[];
  total = 0;
  search: FormControl = new FormControl('');
  constructor(
    private admin: AdminService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.admin.getAccountByAdminUser().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  changePageIndex(index: number){
    this.admin.getAccountByAdminUser('', '', index, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByUsername(){
    this.admin.getAccountByAdminUser(this.search.value, '', 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByAddress(){
    this.admin.getAccountByAdminUser('', this.search.value, 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  reset() {
    this.admin.getAccountByAdminUser().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  active(id: string | undefined) {
    if(id !== undefined) {
      this.admin.activeUser(id).subscribe(data => {
        this.admin.getAccountByAdminUser().subscribe(data => {
          this.listUser = data.data;
          this.total = data.totalElement;
        })
        this.messageService.showMessage({
          content: 'Cập nhật thành công',
          type: 'success'
        })
      })
    }
  }

}
