import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styles: [
  ]
})
export class UserupdateComponent implements OnInit {

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
        this.userObj.userState = currentUser.userState;
      }
    }
  }

  // newUserId(){
  //   debugger;
  //   const oldRecords = localStorage.getItem('userList');
  //   if ( oldRecords !== null) {
  //     const userList = JSON.parse(oldRecords);
  //     return userList.length + 1;
  //   }else {
  //     return 1;
  //   }
  // }

  updateUser() {
    // debugger;
    
    const oldRecords = localStorage.getItem('userList');
    if ( oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a : any) => this.userObj.userId),1);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    } 
    this.router.navigateByUrl('/userlisting');

  }


}
