import { Component,Inject, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserlistingComponent } from '../userlisting/userlisting.component';
@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styles: [
  ]
})
export class ViewDialogComponent implements OnInit {
  
constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef:MatDialogRef<UserlistingComponent>,) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }

  

}
