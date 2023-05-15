import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from '../modules/material/material.module';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserupdateComponent } from '../users/userupdate/userupdate.component';
import { ViewDialogComponent } from '../users/view-dialog/view-dialog.component';

@NgModule({
  declarations: [
    UserregisterComponent,
    UserlistingComponent,
    UserupdateComponent,
    ViewDialogComponent,
    MatConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  entryComponents: [MatConfirmDialogComponent,UserregisterComponent]
})
export class UserlistingmoduleModule { 
  // constructor(){
  //   console.log
  // }
}
