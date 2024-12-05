import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  setHeadres(){
    let jwt = this.getToken();
    jwt = "Token "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return {headers:httpHeaders}
  }

  private url = 'http://127.0.0.1:8000/api/user/'

  constructor(private http : HttpClient) { }

  getToken(){
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  login(username :string , password : string): Observable<any> {
    return this.http.post(this.url+'login/' , {username , password});
  }

  getuserConnecter():Observable<UserProfile>{
    return this.http.get<UserProfile>(this.url+'me/',this.setHeadres())
  }
  logout():Observable<any>{
    return this.http.post<any>(this.url+"logout/",{},this.setHeadres())
  }
}
