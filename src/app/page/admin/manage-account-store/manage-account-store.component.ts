import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Room } from 'src/app/@core/models/room.model';
import { User } from 'src/app/@core/models/user.model';
import { AdminService } from 'src/app/@services/admin.service';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-manage-account-store',
  templateUrl: './manage-account-store.component.html',
  styleUrls: ['./manage-account-store.component.scss']
})
export class ManageAccountStoreComponent implements OnInit {
  listUser!: User[];
  total = 0;
  search: FormControl = new FormControl('');
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit(): void {
    this.admin.getAccountByAdminStore().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  changePageIndex(index: number){
    this.admin.getAccountByAdminStore('', '', index, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByUsername(){
    this.admin.getAccountByAdminStore(this.search.value, '', 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByAddress(){
    this.admin.getAccountByAdminStore('', this.search.value, 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  reset() {
    this.admin.getAccountByAdminStore().subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

}
