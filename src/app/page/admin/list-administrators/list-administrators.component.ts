import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Room } from 'src/app/@core/models/room.model';
import { User } from 'src/app/@core/models/user.model';
import { AdminService } from 'src/app/@services/admin.service';

@Component({
  selector: 'app-list-administrators',
  templateUrl: './list-administrators.component.html',
  styleUrls: ['./list-administrators.component.scss']
})
export class ListAdministratorsComponent implements OnInit {
  listUser!: User[];
  total = 0;
  search: FormControl = new FormControl('');
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit(): void {
    this.admin.getAccountByAdminAdmin().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  changePageIndex(index: number){
    this.admin.getAccountByAdminAdmin('', '', index, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByUsername(){
    this.admin.getAccountByAdminAdmin(this.search.value, '', 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByAddress(){
    this.admin.getAccountByAdminAdmin('', this.search.value, 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  reset() {
    this.admin.getAccountByAdminAdmin().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

}
