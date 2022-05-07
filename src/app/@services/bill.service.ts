import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Bill } from "../@core/models/bill.model";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private httpClient: HttpClient){}
  getSale(id: string): Observable<{list_bill: Bill[]}>{
    const url = environment.baseUrl + '/api/bill/statistical';
    return this.httpClient.get<{list_bill: Bill[]}>(url, { params: {
      store_id: id
    }});
  }

  getBill(status: string): Observable<{content: Bill[]}>{
    const url = environment.baseUrl + '/api/bill';
    return this.httpClient.get<{content: Bill[]}>(url, { params: { status: status}});
  }

  createBill(id: string ,month: number, year: number, electric_number: number, water_number: number, net_number: number){
    const url = environment.baseUrl + '/api/bill';
    const obj = {
      month: month,
      year: year,
      electric_number: electric_number,
      water_number: water_number,
      net_number: net_number,
      room_id: id
    }
    return this.httpClient.post(url, obj);
  }

  updateStatus(id: number){
    const obj = {
      id: id,
      status: 'PAID'
    }
    const url = environment.baseUrl + '/api/bill/update-status';
    return this.httpClient.put(url, obj)
  }
}
