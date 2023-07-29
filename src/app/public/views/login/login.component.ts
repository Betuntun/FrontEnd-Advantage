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

  authForm!:FormGroup;
  error:string ="";
  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private cookieService:CookieService,
    private router:Router
    ) {  }

  ngOnInit() {
		this.authForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
  }

  onSubmit(form:FormGroup){
    if(form.valid){
      this.loginService.login(form.value.email, form.value.password).subscribe(data=>{
        if(data.sucess){
          this.cookieService.set("token",data.token);
          this.router.navigate(["/home"]);
        }else
        {
          this.error = "No se encontro usuario ni contraseña";
        }
      });
    }else{
      this.error ="Complete todos los Campos";
    }
  }

  get email() {
		return this.authForm.get('email')!;
	}

	get password() {
		return this.authForm.get('password')!;
	}

  changePass(){
    this.router.navigate(['auth/password']);
  }



}
