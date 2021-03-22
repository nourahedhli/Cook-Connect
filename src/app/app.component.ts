import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="demoApp";
  provider:any;
  user:any;

  constructor(){

  }
  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });

  }

  logout(){
    firebase.auth().signOut().then(function() {
     console.log("sign out");
     
    }).catch(function(error) {
      // An error happened.
    });
  }
 
 
  loginWithGmail() {
    firebase.auth().signInWithPopup(this.provider).then(function(result) {
     var user = result.user;
     console.log(user.email);
     
    }).catch(function(error) {
     
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  facebookLogin(){
   var provider = new firebase.auth.FacebookAuthProvider();
   this.provider = provider;

   firebase.auth().signInWithPopup(provider).then(function(result) {
 
    var user = result.user;
    console.log(user);
    
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
  }
 
  
}