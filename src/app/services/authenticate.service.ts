import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  response: Observable<any>;
  constructor(private http : HttpClient) { }

//   request() {
//     const url = 'http://110.93.228.234:8000/api/topics/';
//     this.response = this.http.get(url, {observe: 'body'});
// }
  data(){
    const url = 'http://110.93.228.234:8000/api/topics/';
    return this.response = this.http.get(url);
  }
}
