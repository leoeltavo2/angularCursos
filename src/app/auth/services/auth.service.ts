import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import firebase from 'firebase/app';
// type User = firebase.User
// const user:firebase.User=...
// import {auth} from '@firebase/app-types';
import {User} from '@firebase/auth-types';
import {first} from 'rxjs/operators'
// import { type } from 'os';

@Injectable()
export class AuthService {
  public user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async login(email:string, password:string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;

    }catch(error){
        console.log(error);
        
    }
  }

  async register( email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(){
    try {
      await this.afAuth.signOut();
      
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser(){
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
      
    } catch (error) {
      console.log(error);
    }
  }

}
