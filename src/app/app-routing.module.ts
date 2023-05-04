import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistingComponent } from './pages/userlisting/userlisting.component';


const routes: Routes = [

  {
    path:'userlisting',
    component:UserlistingComponent
  },
  {
    path:'', redirectTo:'userlisting',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
