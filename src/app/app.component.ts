import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { AuthService } from './_services/auth.service';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Cook and Connect';
  provider: any;
  user: any;
  isSignedIn = false;

  constructor(public firebaseService: AuthService){}
  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    {this.isSignedIn= true;}
    else
    {this.isSignedIn= false;}



    const provider = new firebase.auth.GoogleAuthProvider();

    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
      this.user = user;
    });
  }
}
