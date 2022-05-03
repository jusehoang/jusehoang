import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('token')){
      const token = localStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      })
    }
    return next.handle(req);
  }
}
