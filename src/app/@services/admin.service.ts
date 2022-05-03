import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getAccountByAdminStore(){
    const url = environment.baseUrl + '/api/account';
    return this.httpClient.get(url)
  }
}
