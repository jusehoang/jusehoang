import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Room } from "../@core/models/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private httpClient: HttpClient) {}

  createRoom(room: Room){
    const url = environment.baseUrl + '/api/room';
    return this.httpClient.post(url, room);
  }

  editRoom(room: Room){
    const url = environment.baseUrl + '/api/room';
    return this.httpClient.put(url, room);
  }

  getAllRooms(location?: string, type?: string, page?: number, size?: number, numberPeople?: number): Observable<{data: Room[], totalElement: number}>{
    let pageNumber = 1;
    let sizePage = 9;
    let numberMaxPeople = 10;
    let locationStr = '';
    let typeRoom = '';
    if(page){
      pageNumber = page;
    }
    if(size){
      sizePage = size;
    }
    if(numberPeople){
      numberMaxPeople = numberPeople;
    }
    if(location){
      locationStr = location;
    }
    if(type){
      typeRoom = type;
    }
    const url = environment.baseUrl + '/api/room';
    return this.httpClient.get<{data: Room[], totalElement: number}>(url, { params: {
      page: pageNumber,
      size: sizePage,
      number: numberMaxPeople,
      location: locationStr,
      type: typeRoom
    }});
  }

  getRoomByStore(id: string): Observable<{data: Room[], totalElement: number}>{
    const url = environment.baseUrl + '/api/room';
    return this.httpClient.get<{data: Room[], totalElement: number}>(url, { params: {
      page: 1,size: 10, store: id
    }});
  }

  getRoomById(id: string): Observable<Room> {
    const url = environment.baseUrl + '/api/room/' + id;
    return this.httpClient.get<Room>(url);
  }

  bookRoom(roomId: string, status: string, startDate: string, note: string){
    const obj = {
      room_id: roomId,
      status: status,
      start_date: startDate,
      note: note
    }
    const url = environment.baseUrl + '/api/order';
    return this.httpClient.post(url, obj);
  }

  getRoomHire(){
    const url = environment.baseUrl + '/api/room/find-hiring-room';
    return this.httpClient.get(url);
  }

  getCurrentRoom(): Observable<{
    room: Room,
    bill: [],
    end_date: string
    note: string
    start_date: string
    status: string
  }[]> {
    const url = environment.baseUrl + '/api/order/get-current-room';
    return this.httpClient.get<{
      room: Room,
      bill: [],
      end_date: string
      note: string
      start_date: string
      status: string}[]>(url);
  }
}
