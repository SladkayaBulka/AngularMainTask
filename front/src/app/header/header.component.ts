import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData = {};
  isAdmin: boolean = false;
  isAutorise: boolean = false;
  isBlock: boolean = false;
  userName: string;
  token: string = '';
  constructor(private regService: RegisterService) {
    this.regService.onClick.subscribe(
      cnt => {
        this.ngOnInit();
      }
    );
  }
  userLogOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.ngOnInit();
  }
  ngOnInit() {
    this.token = this.regService.getToken();
    if (this.token === null) {
       this.isAutorise = false;
    } else {
      this.isAutorise = true;
      this.regService.getUseronToken(this.token).subscribe(
        res => {
          this.isAdmin = Boolean(res.isadmin);
          this.isBlock = Boolean(res.isblock);
          this.userName = res.username;
          localStorage.setItem('username', res.username);
        },
        err => console.log(err)
      );
    }
  }

}
