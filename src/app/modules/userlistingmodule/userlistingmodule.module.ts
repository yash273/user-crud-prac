import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatConfirmDialogComponent } from 'src/app/pages/mat-confirm-dialog/mat-confirm-dialog.component';
import { UserlistingComponent } from 'src/app/pages/userlisting/userlisting.component';
import { UserregisterComponent } from 'src/app/pages/userregister/userregister.component';
import { UserupdateComponent } from 'src/app/pages/userupdate/userupdate.component';
import { ViewDialogComponent } from 'src/app/pages/view-dialog/view-dialog.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

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
