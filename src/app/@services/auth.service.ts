import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Register } from "../@core/models/register.model";
import { User } from "../@core/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}

  register(register: Register) {
    const url = environment.baseUrl + '/api/register'
    return this.http.post(url, register);
  }

  login(username: string, password: string): Observable<{token: string, username: string, role: string, active: boolean, avatar: string, id: string}> {
    const url = environment.baseUrl + '/api/login';
    const user = {
      username: username,
      password: password
    }
    return this.http.post<{token: string, username: string, role: string, active: boolean, avatar: string, id: string}>(url, user);
  }

  changePassword(username: string, oldPassword: string, newPassword: string) {
    const password = {
      username: username,
      oldPassword: oldPassword,
      newPassword: newPassword
    }
    const url = environment.baseUrl + '/api/forgot-password'
    return this.http.put(url, password);
  }

  getCurrentUser(): Observable<User> {
    const url = environment.baseUrl + '/api/account/current-user'
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<User>{
    const url = environment.baseUrl + '/api/account';
    return this.http.put<User>(url, user);
  }

  updateStore(user: User): Observable<User> {
    const url = environment.baseUrl + '/api/account/request-update';
    return this.http.put<User>(url, user);
  }
}
