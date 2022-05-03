import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../@core/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLogin = new BehaviorSubject<boolean>(false);
  token: string | null = null;
  username: string | null = null;
  role: string | null = null;
  avatar = new BehaviorSubject<string>('');
}
