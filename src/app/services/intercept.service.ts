import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,tap} from 'rxjs/operators';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  observe;
 
  constructor(private http : Http) { }
  response: Observable<any>;
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    // modify request
    request = request.clone({
      setHeaders: {
       'Authorization':'Token 08626d79e1bf048fd6a46214a86f3e9a78da86cb'
      }
    });
   
     console.log("----request----");

   console.log(request);

   console.log("--- end of request---");
    return next.handle(request)
    .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
             
            console.log(" all looks good");
            // http response status code
            console.log(event.status);
          }
        }, error => {
         // http response status code
            console.log("----response----");
            console.error("status code:");
            console.error(error.status);
            console.error(error.message);
            console.log("--- end of response---");

        })
      )

  };
}

