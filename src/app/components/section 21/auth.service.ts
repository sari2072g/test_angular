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

interface SigninResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootURL = 'https://api.angular-email.com/';
  signedin$ = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  usernNameAvailble(username: string) {
        return  this.http.post<any>
        (this.rootURL + 'auth/username', {
            username: username
        })
  }
  signup(credentials: { email: SignupCreditailes }) {
    return this.http.post<SignupResponse>
    (this.rootURL + 'auth/signup',
      credentials, {
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    )
  }

  checkAuth() {
    return this.http.get<SigninResponse>(this.rootURL + 'auth/signedin')
    .pipe( 
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    )
  }
  signout() {
   return this.http.post(this.rootURL + 'auth/signout', {})
    .pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    )
  }
  signin(credentials: SigninCredentials) {
    return this.http.post(this.rootURL + 'auth/signin', credentials)
    .pipe(
      tap((val) => {
        this.signedin$.next(true);
      })
    );

  }
}
