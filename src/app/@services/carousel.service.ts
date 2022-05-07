import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Image } from "src/app/@core/models/image.model"

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  constructor(private httpClient: HttpClient){}

  getAllCarousel(): Observable<Image[]>{
    const url = environment.baseUrl + '/api/theme';
    return this.httpClient.get<Image[]>(url);
  }

  addCarousel(link: string){
    const url = environment.baseUrl + '/api/theme';
    return this.httpClient.post(url, link);
  }

  deleteCarousel(id: string){
    const url = environment.baseUrl + '/api/theme';
    return this.httpClient.delete(url, {params: {id: id}});
  }
}
