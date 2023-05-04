import { Component, DoCheck, OnInit } from '@angular/core';
import { userObj } from 'src/app/interfaces/user';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogService } from 'src/app/service/confirm-dialog.service';
import { UserregisterComponent } from '../userregister/userregister.component';
import { UserupdateComponent } from '../userupdate/userupdate.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styles: [
  ]
})
export class UserlistingComponent implements OnInit, DoCheck {

  userList: userObj[];
  userObj: userObj;

  constructor( private dialog: MatDialog, 
    private dialogService: ConfirmDialogService) { 
    this.userList = [];
    this.userObj = new userObj();
    
  }
   ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    } 
  }

  ngDoCheck(){
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
  }
  delete(id : any){
    // debugger
    const thisId =this.userList.findIndex( (m : any) => m.userId == id)
    this.dialogService.openConfirmDialog(this.userList[thisId])
    .afterClosed().subscribe((res:boolean) =>{
      if(res){
        const oldRecords = localStorage.getItem('userList');
        if (oldRecords !== null) {
        const userList = JSON.parse(oldRecords);
        userList.splice(userList.findIndex( (a : any) => a.userId == id), 1);
        localStorage.setItem('userList', JSON.stringify(userList));
      }
      const records = localStorage.getItem('userList');
      if (records !== null) {
        this.userList = JSON.parse(records);
      }
    }
    });
  }

  displayedColumns: string[] = ['srNo','userName','userGender', 'userCity', 'userAddress', 'userMobile','userCheck', 'userEmail', 'Action'];

  onCreate(){
    // debugger
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(UserregisterComponent,dialogConfig);
  };

  onView(id:any){
    const thisId =this.userList.findIndex( (m : any) => m.userId == id)
    this.dialogService.openviewDialog(this.userList[thisId])
  }

  onUpdate(id:any){
    let thisId =this.userList.findIndex( (m : any) => m.userId == id)
    // this.dialogService.openUpdateDialog(this.userList[thisId])
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    this.dialog.open(UserupdateComponent,dialogConfig);
  }
}
