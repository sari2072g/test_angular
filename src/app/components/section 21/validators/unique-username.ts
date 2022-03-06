import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, FormGroup, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Logs } from "selenium-webdriver";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
    constructor(
        private http: HttpClient,
        private authService: AuthService
        ) { }
    validate = (control: FormControl) => {
        debugger
        const { value } = control;

        return this.authService.usernNameAvailble(value).pipe(
            map(value => {
                if (value.availble)
                    return null;
            }),
            catchError((err) => {
                if(err.error.username) {
                     return of({ nonUniqueUsername: true });
                    } else
                return of({ noConnection: true })
            })
        )
    }
}
