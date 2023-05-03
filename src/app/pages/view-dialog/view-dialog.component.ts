import { Component,Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/interfaces/user';
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styles: [
  ]
})
export class ViewDialogComponent implements OnInit {
  // userList: userObj[];
  userObj: userObj;
  @Input() data: any

  // op:any;
  // constructor(
  //    public dialogRef: MatDialogRef<ViewDialogComponent>,
  //    @Inject(MAT_DIALOG_DATA) public data:any ) { 

  //    }
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,private route: ActivatedRoute, private router: Router) { 
    // const rec = JSON.stringify(localStorage.getItem(this.data));
    this.userObj = new userObj();
    this.route.params.subscribe((res) => {
      this.userObj.userId = res['id'];
      this.data.userId =this.userObj.userId
    });
    // console.log(rec)
  }

  ngOnInit(): void {
    // this.op=this.data
    // const rec = 
    // const rec = JSON.parse(localStorage.getItem('data'));
    this.data.userId = 2
    //  console.log(this.data)
    //  this.data.splice(this.data.findIndex( (a : any) => a.userId == id), 1);
     const currentUser = this.data.find( (m : any) => m.userId == this.data.userId);

    console.log(currentUser)
    if (currentUser !== undefined) {
      this.data.userCity = currentUser.userCity;
      this.data.userEmail = currentUser.userEmail;
      this.data.userMobile = currentUser.userMobile;
      this.data.userName = currentUser.userName;
      this.data.userAddress = currentUser.userAddress;
      this.data.userCheck = currentUser.userCheck;
      this.data.userGender = currentUser.userGender;

    }
  }

}
