import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginUserData = {};

  constructor(private regService: RegisterService , private router: Router) {
  }

  ngOnInit() {
  }
  loginUser() {
    this.regService.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.regService.doClick();
          this.router.navigate(['/']);
        },
        err => console.log(err)
      );
  }
}
