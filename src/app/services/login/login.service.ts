import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   url:string ="https://689f-2806-101e-7-2565-4807-3846-fcef-dcf1.ngrok-free.app";
  constructor(private http:HttpClient) { }

  public login(email:string, password:string):Observable<any>{
    return this.http.post(this.url + '/login', {email,password});
  }

  public user():Observable<any>{
    return this.http.post(this.url + '/user',{});
  }

  public sendEmail(email:string):Observable<any>{
    return this.http.post(this.url + '/forgot', {email});
  }

  public reset(token:string, password:string, password_confirm:string):Observable<any>{
    return this.http.post(this.url + '/reset', {token,password,password_confirm});
  }

}
