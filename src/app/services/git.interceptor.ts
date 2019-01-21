import {HttpInterceptor , HttpRequest , HttpHandler } from '@angular/common/http';


export class GitInterceptor implements HttpInterceptor {
    
    intercept(req : HttpRequest<any> , next : HttpHandler){
        const newRequest = req.clone({
            headers : req.headers.set(
                'Authorization' , 'token_here'
            )
        });
        console.log(newRequest);
        console.log(newRequest.body);
        return next.handle(newRequest);
    }
}
