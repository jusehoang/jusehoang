import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  constructor(private httpClient: HttpClient){}
  getSale(){
    const url = environment.baseUrl + '/api/bill/statistical';
    return this.httpClient.get(url);
  }

  getBill(){
    const url = environment.baseUrl + '/api/bill';
    return this.httpClient.get(url);
  }
}
