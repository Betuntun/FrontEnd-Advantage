import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './views/login/login.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './views/changepassword/changepassword.component';
import { ResetComponent } from './views/reset/reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    ChangepasswordComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    IonicModule,
    ReactiveFormsModule


  ]
})
export class PublicModule { }
