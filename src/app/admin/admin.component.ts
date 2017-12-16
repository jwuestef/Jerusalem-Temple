import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Show/Hide page content
  showPageContent = false;
  showLoginForm = false;
  // Login form
  loginInfo = {
    email: '',
    password: ''
  };
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  loginErrors = [];



  constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, private router: Router) {
    // Ensure only admins can view this page
    // When we get the answer regarding authentication, the AuthState will change... it goes from NotAuthed -> NotAuthed or NotAuthed -> YesAuthed
    this.afAuth.auth.onAuthStateChanged(user => {
      // When that AuthState changes, check if there is a user in said auth info
      if (user) {
        console.log('We found a user! Allow this admin to proceed...')
        // Allow them to continue, shows the page content
        this.showPageContent = true;
      } else {
        console.log('There is NO USER - Make them sign in!');
        // There is no user, make them sign in
        this.showLoginForm = true;
      }
    });
  }



  ngOnInit() {
  }



  // Log the user in
  loginUser() {
    // Reset the login error
    this.loginErrors = [];
    // Check if errors exist on the login form.
    if (this.emailFormControl.hasError('pattern')
        || this.emailFormControl.hasError('required')
        || this.passwordFormControl.hasError('required')
    ) {
      // If so, stop the function.
      return;
    }
    // Login via authentication service
    this.afAuth.auth.signInWithEmailAndPassword(this.loginInfo.email, this.loginInfo.password)
    .then(() => {
      // On success, reset the login form
      this.resetLoginDialog();
      // Hide the login form and show the regular page content
      this.showLoginForm = false;
      this.showPageContent = true;
    }).catch((err) => {
      // Error kicked when trying to log in
      // console.log('Error inside login function of admin.component.ts:');
      // console.log(err.message);
      this.loginErrors = err.message.match( /[^\.!\?]+[\.!\?]+/g );
    });
  }



  // Logs the user out
  logout() {
    this.afAuth.auth.signOut();
    this.showPageContent = false;
    this.showLoginForm = true;
  }



  // Called when the login dialog popup is closed.
  resetLoginDialog() {
    // Erase any login error messages
    this.loginErrors = [];
    // Empty and reset the login form
    this.emailFormControl.reset();
    this.emailFormControl.markAsPristine();
    this.emailFormControl.markAsUntouched();
    this.emailFormControl.updateValueAndValidity();
    this.passwordFormControl.reset();
    this.passwordFormControl.markAsPristine();
    this.passwordFormControl.markAsUntouched();
    this.passwordFormControl.updateValueAndValidity();
  }



}
