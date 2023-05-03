import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../pages/mat-confirm-dialog/mat-confirm-dialog.component';
import { ViewDialogComponent } from '../pages/view-dialog/view-dialog.component';
import { userObj } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog: MatDialog) { }


  openConfirmDialog(newData : userObj){
    return  this.dialog.open(MatConfirmDialogComponent,{
      width: '400px',
      disableClose:true,
      data :{
        name : newData.userName
      }
    });
  }


  openviewDialog(newData : userObj){
    return  this.dialog.open(ViewDialogComponent,{
      width: '400px',
      disableClose:true,
      data :{
        name : newData.userName,
        email : newData.userEmail,
        gender : newData.userGender,
        city: newData.userCity,
        add: newData.userAddress,
        mob: newData.userMobile,
        checked: newData.userCheck,
      }
    });
  }
}
