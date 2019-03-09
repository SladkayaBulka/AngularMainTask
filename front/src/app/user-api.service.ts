import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const url = "http://localhost:5000"

export class User {
  public username: string;
  
  constructor(user: any = {}) {
  const {username} = user;
  this.username = username;
  }
  }

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) {
   }
  

   public getUsers(): Observable<User[]> {
    return this.http.get<any>(`${url}/users`).pipe(map(data=>{
      return data.map(user => new User(user));
  }));

  

}
}