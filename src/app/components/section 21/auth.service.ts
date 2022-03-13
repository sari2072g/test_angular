import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


interface SignupCreditailes {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}

interface SigninResponse {
  username: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'https://api.angular-email.com/';
  signedin$ = new BehaviorSubject(false);
  username = '';

  constructor(private http: HttpClient) { }

  usernNameAvailble(username: string) {
        return  this.http.post<any>
        (this.rootURL + 'auth/username', {
            username: username
        });
  }
  signup(credentials: { email: SignupCreditailes }) {
    return this.http.post<SignupResponse>
    (this.rootURL + 'auth/signup',
      credentials, {
        withCredentials: true
      }
    ).pipe(
      tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username;
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(this.rootURL + 'auth/signedin')
    .pipe( 
      tap(({ authenticated, username }) => {
        this.signedin$.next(authenticated);
        this.username = username;
      })
    );
  }
  signout() {
   return this.http.post(this.rootURL + 'auth/signout', {})
    .pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }
  signin(credentials: SigninCredentials) {
    return this.http.post<SigninResponse>(this.rootURL + 'auth/signin', credentials)
    .pipe(
      tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username;
      })
    );
  }
}
