import { Component, OnInit } from '@angular/core';
import { userObj } from 'src/app/interfaces/user';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styles: [
  ]
})
export class UserlistingComponent implements OnInit {

  userList: userObj[];
  constructor( private dialog: MatDialog ) { 
    this.userList = [];
    // const ELEMENT_DATA : userObj[]
    
  }
  

// constructor( ) { 
//     this.userList = [];
//     // const ELEMENT_DATA : userObj[]
//   }



  ngOnInit(): void {
    // debugger;
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }

  }

  delete(id : any){
    // debugger
    const oldRecords = localStorage.getItem('userList');
    if(confirm("Are sure you want to delete this item ?"))
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

 

  displayedColumns: string[] = ['srNo','userName','userGender', 'userCity', 'userAddress', 'userMobile','userCheck', 'userEmail', 'Action'];

  openDialog(){
    const records = localStorage.getItem('userList');

    this.dialog.open(ViewDialogComponent,{width:'100%',maxWidth:'400px',
      
   
  })
     

  
  
  }

}
