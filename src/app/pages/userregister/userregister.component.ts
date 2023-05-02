import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styles: [
  ]
})
export class UserregisterComponent implements OnInit, OnChanges {

  // userObj: userObj;
  constructor(private router: Router) { 
    this.userObj = new userObj();
  }

  @Input() userObj : userObj

  ngOnInit( ): void {
  }
  ngOnChanges(){
    console.log('chnge')
  }

  newUserId(){
    debugger;
    const oldRecords = localStorage.getItem('userList');
    if ( oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      return userList.length + 1;
    }else {
      return 1;
    }
  }

  saveUser() {
    debugger;
    const latestId = this.newUserId();
    this.userObj.userId = latestId;
    const oldRecords = localStorage.getItem('userList');
    if ( oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    } else {
      const userArr = [];
      userArr.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userArr));
    }
    // this.router.navigateByUrl('/userlisting');


  }

}
