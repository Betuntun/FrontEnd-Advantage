import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent  implements OnInit {

  authForm!:FormGroup;
  error:string ="";
  success:string = "";
  element = false;
  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private cookieService:CookieService,
    private router:Router
    ) {  }
    ngOnInit() {
      this.authForm = this.fb.group({
        token: ['', [Validators.required]],
        password: ['', [Validators.required]],
        password_confirm: ['', [Validators.required]],
      });
    }

    onSubmit(form:FormGroup){
      if(form.valid){
        this.loginService.reset(form.value.token, form.value.password,form.value.password_confirm).subscribe(data=>{
          if(data.message == "success"){
            this.success = "Se cambio la contraseña";
            this.element = true;
          }
        },
        error => {
          this.error ='Hay un error con el token';
        })
      }else{
        this.error ="Complete todos los Campos";
      }
    }

    get token() {
      return this.authForm.get('token')!;
    }

    get password() {
      return this.authForm.get('password')!;
    }

    get password_confirm() {
      return this.authForm.get('password_confirm')!;
    }
    onPasswordChange() {
      if (this.password_confirm.value == this.password.value) {
        this.password_confirm.setErrors(null);
      } else {
        this.password_confirm.setErrors({ mismatch: true });
      }
    }
    returnLogin(){
      this.router.navigate(["auth/login"]);
    }
}
