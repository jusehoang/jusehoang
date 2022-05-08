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

  // getRequestStore(isRequest: boolean) {
  //   const url = environment.baseUrl + '/api/account';
  //   return this.httpClient.get(url, { params: { isRequest: isRequest}})
  // }

  getRequestStore(isRequest: boolean, username?: string, address?: string, page?: number, size?: number): Observable<{data: User[], totalElement: number}> {
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
    if(size){
      pageSize = size;
    }
    const url = environment.baseUrl + '/api/account';
    return this.httpClient.get<{data: User[], totalElement: number}>(url, { params: {
      username: username1,
      address: address1,
      page: pageIndex,
      size: pageSize,
      isRequest: isRequest
    }});
  }

  requestToStore(){
    const url = environment.baseUrl + '/api/account/request-update';
    return this.httpClient.put(url, {});
  }

  addAccountByAdminToUser(user: User){
    const url = environment.baseUrl + '/api/account/register-by-admin';
    return this.httpClient.post(url, user)
  }

  addAccountByAdminToStore(user: User){
    const url = environment.baseUrl + '/api/account/register-by-admin';
    return this.httpClient.post(url, user)
  }

  activeUser(status: string){
    const url = environment.baseUrl + '/api/account/in-active';
    return this.httpClient.put(url,{}, { params: { username: status}})
  }

  updateRequestStore(id: string, status: string){
    const obj = {
      id: id,
      status: status
    }
    const url = environment.baseUrl + '/api/account/update-to-store';
    return this.httpClient.put(url, obj);
  }
}
