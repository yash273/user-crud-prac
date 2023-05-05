import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styles: [
  ]
})
export class UserregisterComponent implements OnInit {

  userObj: userObj;
  constructor(private router: Router,
    private dialogRef: MatDialogRef<UserregisterComponent>) { 
    this.userObj = new userObj();

  }
  ngOnInit( ): void {
  }

   newUserId(){
    // debugger;
    const oldRecords = localStorage.getItem('userList'); 
    if ( oldRecords !== null) {
      // const userList = JSON.parse(oldRecords);
      // const lastItem = userList.slice(-1).pop();
      const lastItemId = JSON.parse(oldRecords).slice(-1).pop().userId;
      return lastItemId + 1;
    }else {
      return 1;
    }
  }

  saveUser() {
    // debugger;
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
    this.onClose();
  }

  onClose(){
    this.dialogRef.close();
  }

}
