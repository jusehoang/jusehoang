import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from 'src/app/@core/models/room.model';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.scss']
})
export class ManageRoomComponent implements OnInit {
  listRoom: Room[] = [];
  isVisible = false;
  formAddRoom!: FormGroup;
  total = 0;
  search = new FormControl();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private roomService: RoomService
    ) {

  }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if(id){
      this.roomService.getRoomByStore(id).subscribe(data1 => {
        this.listRoom = data1.data;
        this.total = data1.totalElement;
        console.log(this.total);
      })
    }
  }

  addRoom() {
    this.router.navigate(['store','update-room'])
  }

  editRoom(id: string) {
    this.router.navigate(['store', 'update-room'], {queryParams: {id : id}})
  }

  searchRoom(){
    const id = localStorage.getItem('id');
    if(id){
      this.roomService.getRoomByStore(id, this.search.value).subscribe(data1 => {
        this.listRoom = data1.data;
        this.total = data1.totalElement;
        console.log(this.total);
      })
    }
  }

}
