import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormControl, NgForm, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {
  @ViewChild('formulario') logUser:NgForm;

  submitted = true;

  
public loginForm: FormGroup;
// loginForm = new FormGroup({
//   email: new FormControl(null, Validators.required),
//   password: new FormControl(null, Validators.required),
// });

siteKey: String;

  constructor(private authSVC:AuthService, private router:Router, private formBuilder:FormBuilder) { 
    this.siteKey="6LeI-SQbAAAAAJcle3QGHbTaqCFqOtxMOwSpX51f";
  }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
      recaptcha:['',[Validators.required]]
      });
  }


  async onLogin(){

    const{email,password} = this.loginForm.value;
    try {
      const user = await this.authSVC.login(email,password);
      if(user){
        this.router.navigate(['']);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
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


