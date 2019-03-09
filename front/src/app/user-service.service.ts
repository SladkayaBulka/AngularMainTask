import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Observable } from 'rxjs';
import { User} from './user-api.service'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private userApi: UserApiService) { }


 public getUsers(): Observable<User[]> {
    return this.userApi.getUsers();
  }
}
