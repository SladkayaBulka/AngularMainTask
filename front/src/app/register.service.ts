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
  user: User;
  public doClick() {
    this.onClick.emit();
  }

  editUser(username, user) {
    return this.http.put<any>(`${this.url}/users/${username}`, user);
  }

  getUser(user) {
    return this.http.get<any>(`${this.url}/user/${user}`);
  }
  getAllUser() {
    return this.http.get<any>(`${this.url}/users`);
  }

  blockUser(username, isblock) {
    return this.http.put<any>(`${this.url}/block/${username}`, isblock);
  }

  adminUser(username, isadmin) {
    return this.http.put<any>(`${this.url}/admin/${username}`, isadmin);
  }

  deleteUser(username) {
    return this.http.delete<any>(`${this.url}/users/${username}`);
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

export interface User {
  username: string;
  userpass: string;
  useremail: string;
}
