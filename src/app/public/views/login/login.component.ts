import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

  }
  onSubmit(form:FormGroup){
    console.log(form);
  }
  authForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required,Validators.email]
    }),
    password: new FormControl('',{validators:[Validators.required]})
  });
}
