import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {
 
  // registerForm = new FormGroup({
  //   // username: new FormControl(''),
  //   email: new FormControl('',Validators.required),
  //   password: new FormControl(''),
  // });
  public registerForm: FormGroup;

  siteKey: String;

  constructor(private authSVC:AuthService,private formBuilder:FormBuilder,private router:Router) {
    this.siteKey="6LeI-SQbAAAAAJcle3QGHbTaqCFqOtxMOwSpX51f";
   }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
    email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
    password:['',[Validators.required,Validators.minLength(6)]],
    recaptcha:['',[Validators.required]]
    });
  }

  onRegister(){
    // console.log('Form->', this.registerForm.value);
    // console.log('Form->', this.registerForm.value);
    const{email,password} = this .registerForm.value;
    this.authSVC.register(email,password);
    this.router.navigate(['/login']);
  }

  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }

  setMyStyle() {
    let styles = {
      'background':'#eb01a5',
      'background-image': 'url("https://us.123rf.com/450wm/asamask92/asamask921604/asamask92160400081/55517312-white-blue-sky-gradient-background-vector-illustration.jpg?ver=6',
      'background-repeat':'no-repeat',
      'background-size':'cover'
    };
    return styles;
}
}
