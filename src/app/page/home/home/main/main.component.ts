import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/@core/models/room.model';
import { RoomService } from 'src/app/@services/room.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  listRoom: Room[] = [];
  total = 0;
  location = '';
  type='';
  number= '';
  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(data1 => {
      this.listRoom = data1.data;
      this.total = data1.totalElement;
    })
  }

  changeNumber(number: string) {
    console.log(number);
  }

  changeIndexPage(index: number) {
    this.roomService.getAllRooms('', '', index).subscribe(data1 => {
      this.listRoom = data1.data;
    })
  }

  searchRoom() {
    console.log(this.number)
    this.roomService.getAllRooms(this.location, this.type, 1, 9, Number(this.number)).subscribe(data1 => {
      this.listRoom = data1.data;
      this.total = data1.totalElement;
    })
  }

  cancel(){
    this.location = '';
    this.number = '';
    this.type = '';
    this.roomService.getAllRooms().subscribe(data1 => {
      this.listRoom = data1.data;
      this.total = data1.totalElement;
    })
  }

}
