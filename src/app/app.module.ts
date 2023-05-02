import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserregisterComponent } from './pages/userregister/userregister.component';
import { UserlistingComponent } from './pages/userlisting/userlisting.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';
// import { ViewDialogComponent } from './pages/view-dialog/view-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserupdateComponent } from './pages/userupdate/userupdate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewDialogComponent } from './pages/view-dialog/view-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserlistingComponent,
    UserupdateComponent,
    ViewuserComponent,
    ViewDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    NgbModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
