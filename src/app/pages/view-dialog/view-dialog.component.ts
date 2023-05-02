import { Component,Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';import { userObj } from 'src/app/interfaces/user';
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styles: [
  ]
})
export class ViewDialogComponent implements OnInit {
  // userList: userObj[];

  op:any;
  constructor(
     public dialogRef: MatDialogRef<ViewDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data:any ) { 

     }

  ngOnInit(): void {
    this.op=this.data
    console.log(this.data)
  }

}
