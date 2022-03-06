import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  usernNameAvailble(username: string) {
 return  this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: username
        })
  }
}
