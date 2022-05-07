import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/@core/models/room.model';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-manage-book-room',
  templateUrl: './manage-book-room.component.html',
  styleUrls: ['./manage-book-room.component.scss']
})
export class ManageBookRoomComponent implements OnInit {
  listRoom!: Room[];
  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.roomService.getRoomHire().subscribe(room => {
      this.listRoom = room;
    })
  }

  addBill(id: string){
    this.router.navigate(['store', 'add-bill'], {queryParams: {id: id}})
  }

}
