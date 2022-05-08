import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/@core/models/room.model';
import { CarouselService } from 'src/app/@services/carousel.service';
import { RoomService } from 'src/app/@services/room.service';
import { Image } from 'src/app/@core/models/image.model';

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
  listCarousel!: Image[];
  constructor(
    private roomService: RoomService,
    private carouselService: CarouselService
  ) { }

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe(data1 => {
      this.listRoom = data1.data;
      this.total = data1.totalElement;
    })
    this.carouselService.getAllCarousel().subscribe(data1 => {
      this.listCarousel = data1;
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
