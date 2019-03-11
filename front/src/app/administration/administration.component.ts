import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  userData: Users[];
  editingData: {
    isadmin: boolean;
    isblock: boolean;
  };
  constructor(private regService: RegisterService , private router: Router) { }

  ngOnInit() {
    this.regService.getAllUser().subscribe(
      res => {
        this.userData = res;

      },
      err => console.log(err)
    );
  }
  deleteUser(username) {
    this.regService.deleteUser(username).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  blockUser(username, isBlock) {
    this.editingData = {
      isadmin: false,
      isblock: isBlock
    };
    this.regService.blockUser(username, this.editingData).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
  adminUser(username, isAdmin) {
    this.editingData = {
      isadmin: isAdmin,
      isblock: false
    };
    this.regService.adminUser(username, this.editingData).subscribe(
      res => {
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }
}

export interface Users {
  username: string;
  useremail: string;
  userpass: string;
  isadmin: boolean;
  isblock: boolean;
  isverify: boolean;
}
