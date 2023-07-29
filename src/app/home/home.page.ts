import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { LoginService } from '../services/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user_name:string = "";
  private data = inject(DataService);
  constructor( private loginService: LoginService,   private cookieService:CookieService, private router: Router) {}

  ngOnInit() : void {
    this.loginService.user().subscribe(user => {
      if(user.success){
        this.user_name = user.user.name;
      }
    })
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  logOut()
  {
    this.cookieService.delete('token');
    this.router.navigate(['auth/login']);
  }

}
