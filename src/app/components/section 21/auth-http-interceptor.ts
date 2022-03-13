import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import { filter, tap } from "rxjs/operators";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>>
        {
            const modifeidReq = req.clone({
                withCredentials: true
            });
        return next.handle(req)
        .pipe( 
            filter(val => val.type === HttpEventType.Sent),
            tap((val) => {
                if(val.type === HttpEventType.Sent)
                    console.log('send to server'); 
                    if(val.type === HttpEventType.Response)
                    console.log('got a response' , val);   
            })
        );
    }
}

