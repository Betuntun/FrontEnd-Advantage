import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ResetComponent } from './views/reset/reset.component';

const routes: Routes = [{
  path:'login', component:LoginComponent
},
{
  path: 'password', component:ChangepasswordComponent
},
{
  path: 'reset', component:ResetComponent
},
{
  path:'', redirectTo:"login",pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
