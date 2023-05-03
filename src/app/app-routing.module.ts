import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './pages/userregister/userregister.component';
import { UserlistingComponent } from './pages/userlisting/userlisting.component';
import { UserupdateComponent } from './pages/userupdate/userupdate.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';

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
