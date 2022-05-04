import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../@core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private httpClient: HttpClient) {}

  getAccountByAdminStore(username?: string, address?: string, page?: number, size?: number): Observable<{data: User[], totalElement: number}> {
    let pageIndex = 1;
    let pageSize = 10;
    let username1 = '';
    let address1 = '';
    if(username){
      username1 = username;
    }
    if(address){
      address1 = address;
    }
    if(page){
      pageIndex = page;
    }
    if(size){
      pageSize = size;
    }
    const url = environment.baseUrl + '/api/account';
    return this.httpClient.get<{data: User[], totalElement: number}>(url, { params: {
      role: "ROLE_STORE",
      username: username1,
      address: address1,
      page: pageIndex,
      size: pageSize
    }});
  }

  getAccountByAdminUser(username?: string, address?: string, page?: number, size?: number): Observable<{data: User[], totalElement: number}> {
    let pageIndex = 1;
    let pageSize = 10;
    let username1 = '';
    let address1 = '';
    if(username){
      username1 = username;
    }
    if(address){
      address1 = address;
    }
    if(page){
      pageIndex = page;
    }
    if(size){
      pageSize = size;
    }
    const url = environment.baseUrl + '/api/account';
    return this.httpClient.get<{data: User[], totalElement: number}>(url, { params: {
      role: "ROLE_USER",
      username: username1,
      address: address1,
      page: pageIndex,
      size: pageSize
    }});
  }

  getAccountByAdminAdmin(username?: string, address?: string, page?: number, size?: number): Observable<{data: User[], totalElement: number}> {
    let pageIndex = 1;
    let pageSize = 10;
    let username1 = '';
    let address1 = '';
    if(username){
      username1 = username;
    }
    if(address){
      address1 = address;
    }
    if(page){
      pageIndex = page;
    }
    if(size){
      pageSize = size;
    }
    const url = environment.baseUrl + '/api/account';
    return this.httpClient.get<{data: User[], totalElement: number}>(url, { params: {
      role: "ROLE_ADMIN",
      username: username1,
      address: address1,
      page: pageIndex,
      size: pageSize
    }});
  }
}
