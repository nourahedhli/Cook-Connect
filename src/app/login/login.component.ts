/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import firebase from 'firebase/app';

@Component ({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    form: FormGroup;
    provider: any;
    user: any;
    isSignedIn = false;
    submitted = false;

    constructor(public firebaseService : AuthService){}
    ngOnInit(): void {
      if(localStorage.getItem('user')!==null){
      this.isSignedIn= true;}
      else{
      this.isSignedIn= false;}
    const provider = new firebase.auth.GoogleAuthProvider();

      this.provider = provider;
      firebase.auth().onAuthStateChanged(user=> {
        this.user = user;
      });

    }

    async onSignup(email:string,password:string){
      await this.firebaseService.signup(email,password);
      if(this.firebaseService.isLoggedIn)
      {this.isSignedIn = true;}
    }
    async onSignin(email:string,password:string){
      await this.firebaseService.signin(email,password);
      if(this.firebaseService.isLoggedIn)
      {this.isSignedIn = true;}
    }
    handleLogout(){
      this.isSignedIn = false;
    }

    logout(){
      firebase.auth().signOut().then(function() {
       console.log('sign out');

      }).catch(function(error) {
        // An error happened.
      });
    }


    loginWithGmail() {

      firebase.auth().signInWithPopup(this.provider).then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      let credential:any;

       credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.email);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });


    }

    facebookLogin(){

    const provider = new firebase.auth.FacebookAuthProvider();
    this.provider = provider;

    firebase.auth().signInWithPopup(provider).then((result) => {
      //let credential:any;
      //credential = result.credential;

      // The signed-in user info.


      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      //var accessToken = credential.accessToken;
      const user = result.user;
      console.log(user);

    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      // ...
    });


    }}
