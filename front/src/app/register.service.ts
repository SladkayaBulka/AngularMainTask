import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url = 'http://localhost:5000';
  constructor(private http: HttpClient) { }
  onClick: EventEmitter<any> = new EventEmitter();
  UserData = {};

  public doClick() {
    this.onClick.emit();
  }

  registerUser(user) {
    return this.http.post<any>(`${this.url}/users`, user);
  }

  loginUser(user) {
    return this.http.post<any>(`${this.url}/signIn`, user);
  }

  getUseronToken(token) {
    return this.http.get<any>(`${this.url}/users/${token}`);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUserData(userdata) {
    this.UserData = userdata;
  }

  getUserData() {
    return this.UserData;
  }
}
