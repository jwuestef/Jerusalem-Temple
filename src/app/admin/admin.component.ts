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
  
  currentUpload: Image;
  

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


  // Calendar page
  // Text editors
  calendarScheduleUpdated = false;
  // Image uploading
  calendarBackgroundImageSrc = '';
  calendarBackgroundImageDescription = '';
  calendarBackgroundImageSelectedFile: FileList;
  calendarBackgroundImageUploading = false;
  
  calendarSliderImage1Src = '';
  calendarSliderImage1Description = '';
  calendarSliderImage1SelectedFile: FileList;
  calendarSliderImage1Uploading = false;
  
  calendarSliderImage2Src = '';
  calendarSliderImage2Description = '';
  calendarSliderImage2SelectedFile: FileList;
  calendarSliderImage2Uploading = false;
  
  calendarSliderImage3Src = '';
  calendarSliderImage3Description = '';
  calendarSliderImage3SelectedFile: FileList;
  calendarSliderImage3Uploading = false;
  
  calendarSliderImage4Src = '';
  calendarSliderImage4Description = '';
  calendarSliderImage4SelectedFile: FileList;
  calendarSliderImage4Uploading = false;
  
  calendarSliderImage5Src = '';
  calendarSliderImage5Description = '';
  calendarSliderImage5SelectedFile: FileList;
  calendarSliderImage5Uploading = false;


  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page


  // Meet The Pastor page
  pastorBiographyUpdated = false;
  // Image uploading
  pastorImageSrc = '';
  pastorImageDescription = '';
  pastorImageSelectedFile: FileList;
  pastorImageUploading = false;


  // Church History page
  churchHistoryUpdated = false;
  // Image uploading
  historyImageSrc = '';
  historyImageDescription = '';
  historyImageSelectedFile: FileList;
  historyImageUploading = false;


  // Footer
  footerMap = '';
  footerScheduleUpdated = false;
  footerAddressUpdated = false;
  footerMapUpdated = false;



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
    // Home page
    this.contentService.getPageContent('homePage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
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


    // Calendar page
    this.contentService.getPageContent('calendarPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text editors
      pageContent.calendarSchedule = pageContent.calendarSchedule ? pageContent.calendarSchedule : '';
      tinymce.get('calendarSchedule').setContent(pageContent.calendarSchedule);
      // Images
      // Calendar Background Image
      pageContent.calendarBackgroundImage = pageContent.calendarBackgroundImage ? pageContent.calendarBackgroundImage : {};
      pageContent.calendarBackgroundImage['url'] = pageContent.calendarBackgroundImage['url'] ? pageContent.calendarBackgroundImage['url'] : '';
      pageContent.calendarBackgroundImage['description'] = pageContent.calendarBackgroundImage['description'] ? pageContent.calendarBackgroundImage['description'] : '';
      this.calendarBackgroundImageSrc = pageContent.calendarBackgroundImage['url'];
      this.calendarBackgroundImageDescription = pageContent.calendarBackgroundImage['description'];
      // Calendar Slider 1
      pageContent.calendarSliderImage1 = pageContent.calendarSliderImage1 ? pageContent.calendarSliderImage1 : {};
      pageContent.calendarSliderImage1['url'] = pageContent.calendarSliderImage1['url'] ? pageContent.calendarSliderImage1['url'] : '';
      pageContent.calendarSliderImage1['description'] = pageContent.calendarSliderImage1['description'] ? pageContent.calendarSliderImage1['description'] : '';
      this.calendarSliderImage1Src = pageContent.calendarSliderImage1['url'];
      this.calendarSliderImage1Description = pageContent.calendarSliderImage1['description'];
      // Calendar Slider 2
      pageContent.calendarSliderImage2 = pageContent.calendarSliderImage2 ? pageContent.calendarSliderImage2 : {};
      pageContent.calendarSliderImage2['url'] = pageContent.calendarSliderImage2['url'] ? pageContent.calendarSliderImage2['url'] : '';
      pageContent.calendarSliderImage2['description'] = pageContent.calendarSliderImage2['description'] ? pageContent.calendarSliderImage2['description'] : '';
      this.calendarSliderImage2Src = pageContent.calendarSliderImage2['url'];
      this.calendarSliderImage2Description = pageContent.calendarSliderImage2['description'];
      // Calendar Slider 3
      pageContent.calendarSliderImage3 = pageContent.calendarSliderImage3 ? pageContent.calendarSliderImage3 : {};
      pageContent.calendarSliderImage3['url'] = pageContent.calendarSliderImage3['url'] ? pageContent.calendarSliderImage3['url'] : '';
      pageContent.calendarSliderImage3['description'] = pageContent.calendarSliderImage3['description'] ? pageContent.calendarSliderImage3['description'] : '';
      this.calendarSliderImage3Src = pageContent.calendarSliderImage3['url'];
      this.calendarSliderImage3Description = pageContent.calendarSliderImage3['description'];
      // Calendar Slider 4
      pageContent.calendarSliderImage4 = pageContent.calendarSliderImage4 ? pageContent.calendarSliderImage4 : {};
      pageContent.calendarSliderImage4['url'] = pageContent.calendarSliderImage4['url'] ? pageContent.calendarSliderImage4['url'] : '';
      pageContent.calendarSliderImage4['description'] = pageContent.calendarSliderImage4['description'] ? pageContent.calendarSliderImage4['description'] : '';
      this.calendarSliderImage4Src = pageContent.calendarSliderImage4['url'];
      this.calendarSliderImage4Description = pageContent.calendarSliderImage4['description'];
      // Calendar Slider 5
      pageContent.calendarSliderImage5 = pageContent.calendarSliderImage5 ? pageContent.calendarSliderImage5 : {};
      pageContent.calendarSliderImage5['url'] = pageContent.calendarSliderImage5['url'] ? pageContent.calendarSliderImage5['url'] : '';
      pageContent.calendarSliderImage5['description'] = pageContent.calendarSliderImage5['description'] ? pageContent.calendarSliderImage5['description'] : '';
      this.calendarSliderImage5Src = pageContent.calendarSliderImage5['url'];
      this.calendarSliderImage5Description = pageContent.calendarSliderImage5['description'];
    });

    // Gallery page
    this.contentService.getPageContent('galleryPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Gallery page
      // Gallery page
      // Gallery page
      // Gallery page
    });

    // Meet The Pastor page
    this.contentService.getPageContent('pastorPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text editors
      pageContent.pastorBiography = pageContent.pastorBiography ? pageContent.pastorBiography : '';
      tinymce.get('pastorBiography').setContent(pageContent.pastorBiography);
      // Images
      // Pastor Image
      pageContent.pastorImage = pageContent.pastorImage ? pageContent.pastorImage : {};
      pageContent.pastorImage['url'] = pageContent.pastorImage['url'] ? pageContent.pastorImage['url'] : '';
      pageContent.pastorImage['description'] = pageContent.pastorImage['description'] ? pageContent.pastorImage['description'] : '';
      this.pastorImageSrc = pageContent.pastorImage['url'];
      this.pastorImageDescription = pageContent.pastorImage['description'];
    });

    // Church History page
    this.contentService.getPageContent('historyPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text editors
      pageContent.churchHistory = pageContent.churchHistory ? pageContent.churchHistory : '';
      tinymce.get('churchHistory').setContent(pageContent.churchHistory);
      // Images
      // Historical Image
      pageContent.historyImage = pageContent.historyImage ? pageContent.historyImage : {};
      pageContent.historyImage['url'] = pageContent.historyImage['url'] ? pageContent.historyImage['url'] : '';
      pageContent.historyImage['description'] = pageContent.historyImage['description'] ? pageContent.historyImage['description'] : '';
      this.historyImageSrc = pageContent.historyImage['url'];
      this.historyImageDescription = pageContent.historyImage['description'];
    });

    // Footer
    this.contentService.getPageContent('footer').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text editors
      pageContent.footerSchedule = pageContent.footerSchedule ? pageContent.footerSchedule : '';
      tinymce.get('footerSchedule').setContent(pageContent.footerSchedule);
      pageContent.footerAddress = pageContent.footerAddress ? pageContent.footerAddress : '';
      tinymce.get('footerAddress').setContent(pageContent.footerAddress);
      this.footerMap = pageContent.footerMap ? pageContent.footerMap : '';
    });
    
  }
  // End of getContent()





  // ----------------------------
  // ----------------------------
  // ----- Save Text Editor -----
  // ----------------------------
  // ----------------------------

  // Saves the content of the editor, and then shows a success message

  // Home page
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

  // Calendar page
  saveCalendarSchedule() {
    this.calendarScheduleUpdated = false;
    this.contentService.savePageContent('calendarPage', 'calendarSchedule', tinymce.get('calendarSchedule').getContent()).then( () => {
      this.calendarScheduleUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarScheduleUpdated = false;
      }, 2000);
    });
  }

  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page

  // Meet The Pastor page
  savePastorBiography() {
    this.pastorBiographyUpdated = false;
    this.contentService.savePageContent('pastorPage', 'pastorBiography', tinymce.get('pastorBiography').getContent()).then( () => {
      this.pastorBiographyUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.pastorBiographyUpdated = false;
      }, 2000);
    });
  }

  // Church History page
  saveChurchHistory() {
    this.churchHistoryUpdated = false;
    this.contentService.savePageContent('historyPage', 'churchHistory', tinymce.get('churchHistory').getContent()).then( () => {
      this.churchHistoryUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.churchHistoryUpdated = false;
      }, 2000);
    });
  }

  // Footer
  saveFooterSchedule() {
    this.footerScheduleUpdated = false;
    this.contentService.savePageContent('footer', 'footerSchedule', tinymce.get('footerSchedule').getContent()).then( () => {
      this.footerScheduleUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.footerScheduleUpdated = false;
      }, 2000);
    });
  }
  saveFooterAddress() {
    this.footerAddressUpdated = false;
    this.contentService.savePageContent('footer', 'footerAddress', tinymce.get('footerAddress').getContent()).then( () => {
      this.footerAddressUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.footerAddressUpdated = false;
      }, 2000);
    });
  }
  saveFooterMap() {
    this.footerMapUpdated = false;
    this.contentService.savePageContent('footer', 'footerMap', this.footerMap).then( () => {
      this.footerMapUpdated = true;
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.footerMapUpdated = false;
      }, 2000);
    });
  }





  // ----------------------------
  // ----------------------------
  // ----- Image uploading ------
  // ----------------------------
  // ----------------------------

  // Home page
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

  // Calendar page
  calendarSliderImage1Detection(event) {
    this.calendarSliderImage1SelectedFile = event.target.files;
  }
  calendarSliderImage2Detection(event) {
    this.calendarSliderImage2SelectedFile = event.target.files;
  }
  calendarSliderImage3Detection(event) {
    this.calendarSliderImage3SelectedFile = event.target.files;
  }
  calendarSliderImage4Detection(event) {
    this.calendarSliderImage4SelectedFile = event.target.files;
  }
  calendarSliderImage5Detection(event) {
    this.calendarSliderImage5SelectedFile = event.target.files;
  }
  calendarSliderImage1Upload() {
    if (this.calendarSliderImage1Description.trim() === '' || document.getElementById("calendarSliderImage1FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.calendarSliderImage1Uploading = true;
    this.calendarSliderImage2Uploading = false;
    this.calendarSliderImage3Uploading = false;
    this.calendarSliderImage4Uploading = false;
    this.calendarSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.calendarSliderImage1SelectedFile.item(0));
    this.currentUpload.description = this.calendarSliderImage1Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('calendarPage', 'calendarSliderImage1', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.calendarSliderImage1Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarSliderImage1Uploading = false;
      }, 2000);
    });
  }
  calendarSliderImage2Upload() {
    if (this.calendarSliderImage2Description.trim() === '' || document.getElementById("calendarSliderImage2FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.calendarSliderImage1Uploading = false;
    this.calendarSliderImage2Uploading = true;
    this.calendarSliderImage3Uploading = false;
    this.calendarSliderImage4Uploading = false;
    this.calendarSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.calendarSliderImage2SelectedFile.item(0));
    this.currentUpload.description = this.calendarSliderImage2Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('calendarPage', 'calendarSliderImage2', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.calendarSliderImage2Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarSliderImage2Uploading = false;
      }, 2000);
    });
  }
  calendarSliderImage3Upload() {
    if (this.calendarSliderImage3Description.trim() === '' || document.getElementById("calendarSliderImage3FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.calendarSliderImage1Uploading = false;
    this.calendarSliderImage2Uploading = false;
    this.calendarSliderImage3Uploading = true;
    this.calendarSliderImage4Uploading = false;
    this.calendarSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.calendarSliderImage3SelectedFile.item(0));
    this.currentUpload.description = this.calendarSliderImage3Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('calendarPage', 'calendarSliderImage3', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.calendarSliderImage3Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarSliderImage3Uploading = false;
      }, 2000);
    });
  }
  calendarSliderImage4Upload() {
    if (this.calendarSliderImage4Description.trim() === '' || document.getElementById("calendarSliderImage4FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.calendarSliderImage1Uploading = false;
    this.calendarSliderImage2Uploading = false;
    this.calendarSliderImage3Uploading = false;
    this.calendarSliderImage4Uploading = true;
    this.calendarSliderImage5Uploading = false;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.calendarSliderImage4SelectedFile.item(0));
    this.currentUpload.description = this.calendarSliderImage4Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('calendarPage', 'calendarSliderImage4', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.calendarSliderImage4Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarSliderImage4Uploading = false;
      }, 2000);
    });
  }
  calendarSliderImage5Upload() {
    if (this.calendarSliderImage5Description.trim() === '' || document.getElementById("calendarSliderImage5FileInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.calendarSliderImage1Uploading = false;
    this.calendarSliderImage2Uploading = false;
    this.calendarSliderImage3Uploading = false;
    this.calendarSliderImage4Uploading = false;
    this.calendarSliderImage5Uploading = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.calendarSliderImage5SelectedFile.item(0));
    this.currentUpload.description = this.calendarSliderImage5Description.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('calendarPage', 'calendarSliderImage5', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.calendarSliderImage5Src = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.calendarSliderImage5Uploading = false;
      }, 2000);
    });
  }

  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page
  // Gallery page

  // Meet The Pastor page
  pastorImageDetection(event) {
    this.pastorImageSelectedFile = event.target.files;
  }
  pastorImageUpload() {
    if (this.pastorImageDescription.trim() === '' || document.getElementById("pastorImageInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.pastorImageUploading = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.pastorImageSelectedFile.item(0));
    this.currentUpload.description = this.pastorImageDescription.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('pastorPage', 'pastorImage', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.pastorImageSrc = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.pastorImageUploading = false;
      }, 2000);
    });
  }

  // Church History page
  historyImageDetection(event) {
    this.historyImageSelectedFile = event.target.files;
  }
  historyImageUpload() {
    if (this.historyImageDescription.trim() === '' || document.getElementById("historyImageInput")['files'].length !== 1) {
      return;
    }
    // Display the upload progress bar for the current image and no others
    this.historyImageUploading = true;
    // Set file-to-be-uploaded to the file taken from the input fields
    this.currentUpload = new Image(this.historyImageSelectedFile.item(0));
    this.currentUpload.description = this.historyImageDescription.trim();
    // Upload the file via ContentService function (pageName, whichElement, newImage)
    this.contentService.pushUpload('historyPage', 'historyImage', this.currentUpload).then( newURL => {
      // Updates thumbnail image
      this.historyImageSrc = newURL.toString();
      // A few seconds after completion, hide the confirmation
      window.setTimeout( () => {
        this.historyImageUploading = false;
      }, 2000);
    });
  }
  
  
  
  
  // ----------------------------
  // ----------------------------
  // ----- Authentication -------
  // ----------------------------
  // ----------------------------

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
