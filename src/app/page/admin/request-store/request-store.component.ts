import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Room } from 'src/app/@core/models/room.model';
import { User } from 'src/app/@core/models/user.model';
import { AdminService } from 'src/app/@services/admin.service';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-request-store',
  templateUrl: './request-store.component.html',
  styleUrls: ['./request-store.component.scss']
})
export class RequestStoreComponent implements OnInit {
  listUser!: User[];
  total = 0;
  search: FormControl = new FormControl('');
  constructor(
    private admin: AdminService
  ) { }

  ngOnInit(): void {
    this.admin.getRequestStore(true).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  changePageIndex(index: number){
    this.admin.getRequestStore(true, '', '', index, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByUsername(){
    this.admin.getRequestStore(true ,this.search.value, '', 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  searchByAddress(){
    this.admin.getRequestStore(true,'', this.search.value, 1, 10).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  reset() {
    this.admin.getRequestStore(true).subscribe(data => {
      this.listUser = data.data;
      this.total = data.totalElement;
    })
  }

  updateRequest(id: string| undefined) {
    if(id) {
      this.admin.updateRequestStore(id, 'approved').subscribe(data => {
        console.log(data);
      })
    }
  }

}
