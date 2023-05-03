import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styles: [
  ]
})
export class ViewuserComponent implements OnInit {
 
  userObj: userObj;
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    // debugger;
    this.userObj = new userObj();
    this.route.params.subscribe((res) => {
      this.userObj.userId = res['id'];
    });
  }

  ngOnInit(): void {
    // debugger
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList =JSON.parse(oldRecords);
      const currentUser = userList.find( (m : any) => m.userId == this.userObj.userId);
      if (currentUser !== undefined) {
        this.userObj.userCity = currentUser.userCity;
        this.userObj.userEmail = currentUser.userEmail;
        this.userObj.userMobile = currentUser.userMobile;
        this.userObj.userName = currentUser.userName;
        this.userObj.userAddress = currentUser.userAddress;
        this.userObj.userCheck = currentUser.userCheck;
        this.userObj.userGender = currentUser.userGender;
      }
    }
  }

}
