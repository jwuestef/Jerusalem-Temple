import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { ContentService } from '../services/content.service';
import { Image } from '../services/image.model';

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
  // Home page
  // Text editors
  homeVideo = '';
  homeScheduleUpdated = false;
  homeAddressUpdated = false;
  homeMissionUpdated = false;
  homeWelcomeUpdated = false;
  homeBeliefsUpdated = false;
  homeVideoUpdated = false;
  // Image uploading
  currentUpload: Image;
  homeBackgroundImageSrc = '';
  homeBackgroundImageDescription = '';
  homeBackgroundImageSelectedFile: FileList;
  homeBackgroundImageUploading = false;
  
  homeSliderImage1Src = '';
  homeSliderImage1Description = '';
  homeSliderImage1SelectedFile: FileList;
  homeSliderImage1Uploading = false;
  
  homeSliderImage2Src = '';
  homeSliderImage2Description = '';
  homeSliderImage2SelectedFile: FileList;
  homeSliderImage2Uploading = false;
  
  homeSliderImage3Src = '';
  homeSliderImage3Description = '';
  homeSliderImage3SelectedFile: FileList;
  homeSliderImage3Uploading = false;
  
  homeSliderImage4Src = '';
  homeSliderImage4Description = '';
  homeSliderImage4SelectedFile: FileList;
  homeSliderImage4Uploading = false;
  
  homeSliderImage5Src = '';
  homeSliderImage5Description = '';
  homeSliderImage5SelectedFile: FileList;
  homeSliderImage5Uploading = false;



  constructor(private afAuth: AngularFireAuth, private afd: AngularFireDatabase, private router: Router, private contentService: ContentService) {
    // Ensure only admins can view this page
    // When we get the answer regarding authentication, the AuthState will change... it goes from NotAuthed -> NotAuthed or NotAuthed -> YesAuthed
    this.afAuth.auth.onAuthStateChanged(user => {
      // When that AuthState changes, check if there is a user in said auth info
      if (user) {
        console.log('We found a user! Allow this admin to proceed...')
        // Allow them to continue, shows the page content
        this.showPageContent = true;
        // Pull updated content from Firebase
        this.getContent();
      } else {
        console.log('There is NO USER - Make them sign in!');
        // There is no user, make them sign in
        this.showLoginForm = true;
      }
    });
  }



  ngOnInit() {
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('homePage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Home page
      // Text editors
      pageContent.homeSchedule = pageContent.homeSchedule ? pageContent.homeSchedule : '';
      tinymce.get('homeSchedule').setContent(pageContent.homeSchedule);
      pageContent.homeAddress = pageContent.homeAddress ? pageContent.homeAddress : '';
      tinymce.get('homeAddress').setContent(pageContent.homeAddress);
      pageContent.homeMission = pageContent.homeMission ? pageContent.homeMission : '';
      tinymce.get('homeMission').setContent(pageContent.homeMission);
      pageContent.homeWelcome = pageContent.homeWelcome ? pageContent.homeWelcome : '';
      tinymce.get('homeWelcome').setContent(pageContent.homeWelcome);
      pageContent.homeBeliefs = pageContent.homeBeliefs ? pageContent.homeBeliefs : '';
      tinymce.get('homeBeliefs').setContent(pageContent.homeBeliefs);
      this.homeVideo = pageContent.homeVideo ? pageContent.homeVideo : '';
      // Images
      // Home Background Image
      pageContent.homeBackgroundImage = pageContent.homeBackgroundImage ? pageContent.homeBackgroundImage : {};
      pageContent.homeBackgroundImage['url'] = pageContent.homeBackgroundImage['url'] ? pageContent.homeBackgroundImage['url'] : '';
      pageContent.homeBackgroundImage['description'] = pageContent.homeBackgroundImage['description'] ? pageContent.homeBackgroundImage['description'] : '';
      this.homeBackgroundImageSrc = pageContent.homeBackgroundImage['url'];
      this.homeBackgroundImageDescription = pageContent.homeBackgroundImage['description'];
      // Home Slider 1
      pageContent.homeSliderImage1 = pageContent.homeSliderImage1 ? pageContent.homeSliderImage1 : {};
      pageContent.homeSliderImage1['url'] = pageContent.homeSliderImage1['url'] ? pageContent.homeSliderImage1['url'] : '';
      pageContent.homeSliderImage1['description'] = pageContent.homeSliderImage1['description'] ? pageContent.homeSliderImage1['description'] : '';
      this.homeSliderImage1Src = pageContent.homeSliderImage1['url'];
      this.homeSliderImage1Description = pageContent.homeSliderImage1['description'];
      // Home Slider 2
      pageContent.homeSliderImage2 = pageContent.homeSliderImage2 ? pageContent.homeSliderImage2 : {};
      pageContent.homeSliderImage2['url'] = pageContent.homeSliderImage2['url'] ? pageContent.homeSliderImage2['url'] : '';
      pageContent.homeSliderImage2['description'] = pageContent.homeSliderImage2['description'] ? pageContent.homeSliderImage2['description'] : '';
      this.homeSliderImage2Src = pageContent.homeSliderImage2['url'];
      this.homeSliderImage2Description = pageContent.homeSliderImage2['description'];
      // Home Slider 3
      pageContent.homeSliderImage3 = pageContent.homeSliderImage3 ? pageContent.homeSliderImage3 : {};
      pageContent.homeSliderImage3['url'] = pageContent.homeSliderImage3['url'] ? pageContent.homeSliderImage3['url'] : '';
      pageContent.homeSliderImage3['description'] = pageContent.homeSliderImage3['description'] ? pageContent.homeSliderImage3['description'] : '';
      this.homeSliderImage3Src = pageContent.homeSliderImage3['url'];
      this.homeSliderImage3Description = pageContent.homeSliderImage3['description'];
      // Home Slider 4
      pageContent.homeSliderImage4 = pageContent.homeSliderImage4 ? pageContent.homeSliderImage4 : {};
      pageContent.homeSliderImage4['url'] = pageContent.homeSliderImage4['url'] ? pageContent.homeSliderImage4['url'] : '';
      pageContent.homeSliderImage4['description'] = pageContent.homeSliderImage4['description'] ? pageContent.homeSliderImage4['description'] : '';
      this.homeSliderImage4Src = pageContent.homeSliderImage4['url'];
      this.homeSliderImage4Description = pageContent.homeSliderImage4['description'];
      // Home Slider 5
      pageContent.homeSliderImage5 = pageContent.homeSliderImage5 ? pageContent.homeSliderImage5 : {};
      pageContent.homeSliderImage5['url'] = pageContent.homeSliderImage5['url'] ? pageContent.homeSliderImage5['url'] : '';
      pageContent.homeSliderImage5['description'] = pageContent.homeSliderImage5['description'] ? pageContent.homeSliderImage5['description'] : '';
      this.homeSliderImage5Src = pageContent.homeSliderImage5['url'];
      this.homeSliderImage5Description = pageContent.homeSliderImage5['description'];
    });
  }



  // Saves the content of the editor, and then shows a success message
  saveHomeSchedule() {
    this.homeScheduleUpdated = false;
    this.contentService.savePageContent('homePage', 'homeSchedule', tinymce.get('homeSchedule').getContent()).then( () => {
      this.homeScheduleUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeScheduleUpdated = false;
      }, 2000);
    });
  }
  saveHomeAddress() {
    this.homeAddressUpdated = false;
    this.contentService.savePageContent('homePage', 'homeAddress', tinymce.get('homeAddress').getContent()).then( () => {
      this.homeAddressUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeAddressUpdated = false;
      }, 2000);
    });
  }
  saveHomeMission() {
    this.homeMissionUpdated = false;
    this.contentService.savePageContent('homePage', 'homeMission', tinymce.get('homeMission').getContent()).then( () => {
      this.homeMissionUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeMissionUpdated = false;
      }, 2000);
    });
  }
  saveHomeWelcome() {
    this.homeWelcomeUpdated = false;
    this.contentService.savePageContent('homePage', 'homeWelcome', tinymce.get('homeWelcome').getContent()).then( () => {
      this.homeWelcomeUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeWelcomeUpdated = false;
      }, 2000);
    });
  }
  saveHomeBeliefs() {
    this.homeBeliefsUpdated = false;
    this.contentService.savePageContent('homePage', 'homeBeliefs', tinymce.get('homeBeliefs').getContent()).then( () => {
      this.homeBeliefsUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeBeliefsUpdated = false;
      }, 2000);
    });
  }
  saveHomeVideo() {
    this.homeVideoUpdated = false;
    this.contentService.savePageContent('homePage', 'homeVideo', this.homeVideo).then( () => {
      this.homeVideoUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeVideoUpdated = false;
      }, 2000);
    });
  }



  // Image uploading
  homeBackgroundImageDetection(event) {
    this.homeBackgroundImageSelectedFile = event.target.files;
  }
  homeSliderImage1Detection(event) {
    this.homeSliderImage1SelectedFile = event.target.files;
  }
  homeSliderImage2Detection(event) {
    this.homeSliderImage2SelectedFile = event.target.files;
  }
  homeSliderImage3Detection(event) {
    this.homeSliderImage3SelectedFile = event.target.files;
  }
  homeSliderImage4Detection(event) {
    this.homeSliderImage4SelectedFile = event.target.files;
  }
  homeSliderImage5Detection(event) {
    this.homeSliderImage5SelectedFile = event.target.files;
  }

  homeBackgroundImageUpload() {
    if (this.homeBackgroundImageDescription.trim() === '' || document.getElementById("homeBackgroundImageInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = true;
    this.homeSliderImage1Uploading = false;
    this.homeSliderImage2Uploading = false;
    this.homeSliderImage3Uploading = false;
    this.homeSliderImage4Uploading = false;
    this.homeSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeBackgroundImageSelectedFile.item(0));
    this.currentUpload.description = this.homeBackgroundImageDescription.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeBackgroundImage', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeBackgroundImageSrc = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeBackgroundImageUploading = false;
      }, 2000);
    });
  }
  homeSliderImage1Upload() {
    if (this.homeSliderImage1Description.trim() === '' || document.getElementById("homeSliderImage1FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = false;
    this.homeSliderImage1Uploading = true;
    this.homeSliderImage2Uploading = false;
    this.homeSliderImage3Uploading = false;
    this.homeSliderImage4Uploading = false;
    this.homeSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeSliderImage1SelectedFile.item(0));
    this.currentUpload.description = this.homeSliderImage1Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeSliderImage1', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeSliderImage1Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeSliderImage1Uploading = false;
      }, 2000);
    });
  }
  homeSliderImage2Upload() {
    if (this.homeSliderImage2Description.trim() === '' || document.getElementById("homeSliderImage2FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = false;
    this.homeSliderImage1Uploading = false;
    this.homeSliderImage2Uploading = true;
    this.homeSliderImage3Uploading = false;
    this.homeSliderImage4Uploading = false;
    this.homeSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeSliderImage2SelectedFile.item(0));
    this.currentUpload.description = this.homeSliderImage2Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeSliderImage2', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeSliderImage2Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeSliderImage2Uploading = false;
      }, 2000);
    });
  }
  homeSliderImage3Upload() {
    if (this.homeSliderImage3Description.trim() === '' || document.getElementById("homeSliderImage3FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = false;
    this.homeSliderImage1Uploading = false;
    this.homeSliderImage2Uploading = false;
    this.homeSliderImage3Uploading = true;
    this.homeSliderImage4Uploading = false;
    this.homeSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeSliderImage3SelectedFile.item(0));
    this.currentUpload.description = this.homeSliderImage3Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeSliderImage3', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeSliderImage3Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeSliderImage3Uploading = false;
      }, 2000);
    });
  }
  homeSliderImage4Upload() {
    if (this.homeSliderImage4Description.trim() === '' || document.getElementById("homeSliderImage4FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = false;
    this.homeSliderImage1Uploading = false;
    this.homeSliderImage2Uploading = false;
    this.homeSliderImage3Uploading = false;
    this.homeSliderImage4Uploading = true;
    this.homeSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeSliderImage4SelectedFile.item(0));
    this.currentUpload.description = this.homeSliderImage4Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeSliderImage4', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeSliderImage4Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeSliderImage4Uploading = false;
      }, 2000);
    });
  }
  homeSliderImage5Upload() {
    if (this.homeSliderImage5Description.trim() === '' || document.getElementById("homeSliderImage5FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.homeBackgroundImageUploading = false;
    this.homeSliderImage1Uploading = false;
    this.homeSliderImage2Uploading = false;
    this.homeSliderImage3Uploading = false;
    this.homeSliderImage4Uploading = false;
    this.homeSliderImage5Uploading = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.homeSliderImage5SelectedFile.item(0));
    this.currentUpload.description = this.homeSliderImage5Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('homePage', 'homeSliderImage5', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.homeSliderImage5Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.homeSliderImage5Uploading = false;
      }, 2000);
    });
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
    this.afAuth.auth.signInWithEmailAndPassword(this.loginInfo.email, this.loginInfo.password).then( () => {
      // On success, reset the login form
      this.resetLoginDialog();
      // Hide the login form and show the regular page content
      this.showLoginForm = false;
      this.showPageContent = true;
    }).catch((err) => {
      // Error kicked when trying to log in
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
