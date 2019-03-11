import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  userData: {
    username: string;
    useremail: string;
    userpass: string;
    isadmin: boolean;
    isblock: boolean;
    isverify: boolean;
  };

  constructor(private regService: RegisterService , private router: Router) { }

  ngOnInit() {
    this.userData =  {
      username: '',
      useremail: '',
      userpass: '',
      isadmin: false,
      isblock: false,
      isverify: true
    };
    console.log(localStorage.getItem('username'));
    this.regService.getUser(localStorage.getItem('username'))
      .subscribe(
        res => {
          this.userData = res[0];
          this.userData.userpass = '';
          console.log(this.userData.userpass);
        },
        err => console.log(err)
      );
  }
  editUserData() {
    this.regService.editUser(localStorage.getItem('username'), this.userData). subscribe(
      res => {
        if (Boolean(res.isverify) === true) {
          localStorage.removeItem('username');
          localStorage.removeItem('token');
          this.regService.doClick();
          this.router.navigate(['/']);
          return;
        } else {
          this.userData = res;
          this.userData.userpass = '';
        }
      },
      err => console.log(err)
    );
  }
}

