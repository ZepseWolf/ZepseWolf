import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url:string = "http://localhost:5000/api";
  constructor(private _http: HttpClient) { }

  checkIsLogin(){
    return this._http.get<any>(this.url+"/login/checkLoggedIn" );
  }
}
