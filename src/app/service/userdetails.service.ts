import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef,MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ViewDialogComponent } from '../pages/view-dialog/view-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor( private dialog:MatDialog) { }
  public AddEdit(data: any []): Observable<any> {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'app-view-dialog';
    dialogConfig.data = data;
    let dialogRef:MatDialogRef<ViewDialogComponent>;
    dialogRef = this.dialog.open(ViewDialogComponent, dialogConfig);
    return dialogRef.afterClosed();
  }
}
