import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent  implements OnInit {
  authForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private cookieService:CookieService,
    private router:Router
    ) {  }

    ngOnInit() {
      this.authForm = this.fb.group({
        email: ['albertt.villanueva@gmail.com', [Validators.required, Validators.email]]
      });
    }

    onSubmit(form:FormGroup){
      if(form.valid){
        this.loginService.sendEmail(form.value.email).subscribe(data=>{
          this.router.navigate(["auth/reset"]);
        });
      }
    }

    get email() {
      return this.authForm.get('email')?.errors;
    }

    returnLogin(){
      this.router.navigate(["auth/login"]);
    }

}
