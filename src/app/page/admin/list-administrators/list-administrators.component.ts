import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/@core/models/room.model';

@Component({
  selector: 'app-list-administrators',
  templateUrl: './list-administrators.component.html',
  styleUrls: ['./list-administrators.component.scss']
})
export class ListAdministratorsComponent implements OnInit {
  listRoom: Room[] = [
    {
      id: '1',
      room_name: 'Trọ 1',
      price: 2000000,
      electric_price: 3000,
      water_price: 5000,
      network_price: 0,
      max_number_people: 4,
      type: 'nomal',
      description: '',
      location: 'số 31 Phường Bạch Mai, Quận Hai Bà Trưng, Hà Nội',
      images:
        'https://efh.edu.vn/wp-content/uploads/2018/08/cac-lo%E1%BA%A1i-phong-kh%C3%A1ch-s%E1%BA%A1n-5-sao-4-1088x600.jpg.webp',
      store: 'Store 1',
      isBooking: false,
      customer: '',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
