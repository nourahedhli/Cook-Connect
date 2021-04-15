import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyAKLF2iGZPDb6E8GXOZ3HKxHSaJ8R01MpE",
    authDomain: "cook-and-connect-956fd.firebaseapp.com",
    databaseURL: "https://cook-and-connect-956fd-default-rtdb.firebaseio.com",
    projectId: "cook-and-connect-956fd",
    storageBucket: "cook-and-connect-956fd.appspot.com",
    messagingSenderId: "951889106103",
    appId: "1:951889106103:web:2e83223071c2d1f23de932",
    measurementId: "G-F6YLMDXC9C"}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }