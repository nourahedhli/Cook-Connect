/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn = false;
  
  constructor(public firebaseAuth : AngularFireAuth) { }
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true;
      localStorage.setItem('user',JSON.stringify(res.user));
    });
  }
  logout(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    }
}
