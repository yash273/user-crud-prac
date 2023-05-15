import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './users/userregister/userregister.component';
import { UserlistingComponent } from './users/userlisting/userlisting.component';
import { UserupdateComponent } from './users/userupdate/userupdate.component';
// import { ViewuserComponent } from './pages/viewuser/viewuser.component';

const routes: Routes = [
  // {
  //   path:'userregister',
  //   component:UserregisterComponent
  // },
  {
    path:'userlisting',
    component:UserlistingComponent
  },
  {
    path:'userupdate/:id',
    component:UserupdateComponent
  },
  // {
  //   path:'viewuser/:id',
  //   component:ViewuserComponent
  // },
  {
    path:'', redirectTo:'userlisting',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
