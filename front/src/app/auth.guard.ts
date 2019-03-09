import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private regService: RegisterService , private router: Router) { }
  canActivate(): boolean {
    if ( this.regService.loggedIn() ) {
      return true;
    } else {
      return false;
    }
  }
}
