import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/@core/models/room.model';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-manage-book-room',
  templateUrl: './manage-book-room.component.html',
  styleUrls: ['./manage-book-room.component.scss']
})
export class ManageBookRoomComponent implements OnInit {
  listRoom: Room[]= [];
  isVisible = false;
  listMoney = [];
  constructor(
    private roomService: RoomService,
  ) { }

  ngOnInit(): void {
    this.roomService.getCurrentRoom().subscribe(data => {
      console.log(data);
      data.forEach((data) => {
        this.listRoom.push(data.room);
      })
      console.log(this.listRoom)
    })
  }

  showMoneyBookRoom(data: Room) {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = false;
  }
}
