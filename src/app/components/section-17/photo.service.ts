import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 

interface UnsplashRespomse {
  urls: {
    regular: string;
  }
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashRespomse>('https://api.unsplash.com/photos/random', {
      headers: {
        AutoRization: 'Client-ID' //חסר פה KEY אין לי מצטערת!
      }
    })
  }
}
