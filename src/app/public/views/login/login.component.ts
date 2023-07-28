import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  

  constructor(
    private fb:FormBuilder, 
    private loginService:LoginService, 
    private cookieService:CookieService,
    private router:Router
    ) { }

  ngOnInit() {

  }
  onSubmit(form:FormGroup){
    if(form.valid){
      this.loginService.login(form.value.email, form.value.password).subscribe(data=>{
        console.log("antes");
        if(data.sucess){
          this.cookieService.set("token",data.token);
          this.router.navigate(["/home"])
        }
      });
    }else{
      console.log("Complete todos los datos requeridos Email y Password");
    }
  }
  authForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required,Validators.email]
    }),
    password: new FormControl('',{validators:[Validators.required]})
  });
}
