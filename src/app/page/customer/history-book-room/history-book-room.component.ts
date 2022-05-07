import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/@core/models/room.model';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-history-book-room',
  templateUrl: './history-book-room.component.html',
  styleUrls: ['./history-book-room.component.scss'],
})
export class HistoryBookRoomComponent implements OnInit {
  constructor(
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.roomService.getRoomHire().subscribe(data => {
      console.log(data);
    })
  }
}
