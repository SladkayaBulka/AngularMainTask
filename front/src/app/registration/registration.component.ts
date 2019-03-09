import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserData = {};
  constructor(private regService: RegisterService,  private router: Router) { }

  ngOnInit() {
  }
  registerUser() {

    this.regService.registerUser(this.registerUserData)
      .subscribe(
        res => {
          this.regService.doClick();
          this.router.navigate(['/']);
        },
        err => console.log(err)
      );
  }
}
