import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(email:string, password:string):Observable<any>{
    return this.http.post(environment.url+'/login', {email,password});
  }

  public user():Observable<any>{
    return this.http.post(environment.url+'/user',{});
  }
}
