import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Video Url
  homeVideo;
  // Image uploading
  homeBackgroundImageSrc = '';
  homeBackgroundImageDescription = '';
  homePastorImageSrc = '';
  homePastorImageDescription = '';
  homeSliderImage1Src = '';
  homeSliderImage1Description = '';
  homeSliderImage2Src = '';
  homeSliderImage2Description = '';
  homeSliderImage3Src = '';
  homeSliderImage3Description = '';
  homeSliderImage4Src = '';
  homeSliderImage4Description = '';
  homeSliderImage5Src = '';
  homeSliderImage5Description = '';
  homeCalendarLinkSrc = '';
  homeCalendarLinkDescription = '';
  homeGalleryLinkSrc = '';
  homeGalleryLinkDescription = '';
  homePastorLinkSrc = '';
  homePastorLinkDescription = '';
  homeHistoryLinkSrc = '';
  homeHistoryLinkDescription = '';
  homeChildcareImageSrc = '';
  homeChildcareImageDescription = '';
  // Prayer request form
  prayerRequestName = '';
  prayerRequestMessage = '';
  // Contact request form
  contactRequestName = '';
  contactRequestEmail = '';
  contactRequestPhone = '';
  contactRequestMessage = '';
  avoidSpam = '';



  constructor(private contentService: ContentService, public sanitizer: DomSanitizer, private http: HttpClient) { }



  ngOnInit() {
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('homePage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
      pageContent.homeSchedule = pageContent.homeSchedule ? pageContent.homeSchedule : '';
      $('#homeSchedule').html(pageContent.homeSchedule);
      pageContent.homeAddress = pageContent.homeAddress ? pageContent.homeAddress : '';
      $('#homeAddress').html(pageContent.homeAddress);
      pageContent.homeMission = pageContent.homeMission ? pageContent.homeMission : '';
      $('#homeMission').html(pageContent.homeMission);
      pageContent.homeWelcome = pageContent.homeWelcome ? pageContent.homeWelcome : '';
      $('#homeWelcome').html(pageContent.homeWelcome);
      pageContent.homeBeliefs = pageContent.homeBeliefs ? pageContent.homeBeliefs : '';
      $('#homeBeliefs').html(pageContent.homeBeliefs);
      pageContent.homeVideo = pageContent.homeVideo ? pageContent.homeVideo : '';
      this.homeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(pageContent.homeVideo);
      pageContent.homeChildcare = pageContent.homeChildcare ? pageContent.homeChildcare : '';
      $('#homeChildcare').html(pageContent.homeChildcare);
      // Images
      // Home Background Image
      pageContent.homeBackgroundImage = pageContent.homeBackgroundImage ? pageContent.homeBackgroundImage : {};
      pageContent.homeBackgroundImage['url'] = pageContent.homeBackgroundImage['url'] ? pageContent.homeBackgroundImage['url'] : '';
      pageContent.homeBackgroundImage['description'] = pageContent.homeBackgroundImage['description'] ? pageContent.homeBackgroundImage['description'] : '';
      this.homeBackgroundImageSrc = pageContent.homeBackgroundImage['url'];
      this.homeBackgroundImageDescription = pageContent.homeBackgroundImage['description'];
      document.getElementById('landingSection').style.backgroundImage = `url('${this.homeBackgroundImageSrc}')`;
      // Home Pastor Image
      pageContent.homePastorImage = pageContent.homePastorImage ? pageContent.homePastorImage : {};
      pageContent.homePastorImage['url'] = pageContent.homePastorImage['url'] ? pageContent.homePastorImage['url'] : '';
      pageContent.homePastorImage['description'] = pageContent.homePastorImage['description'] ? pageContent.homePastorImage['description'] : '';
      this.homePastorImageSrc = pageContent.homePastorImage['url'];
      this.homePastorImageDescription = pageContent.homePastorImage['description'];
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
      // Home Calendar Link
      pageContent.homeCalendarLink = pageContent.homeCalendarLink ? pageContent.homeCalendarLink : {};
      pageContent.homeCalendarLink['url'] = pageContent.homeCalendarLink['url'] ? pageContent.homeCalendarLink['url'] : '';
      pageContent.homeCalendarLink['description'] = pageContent.homeCalendarLink['description'] ? pageContent.homeCalendarLink['description'] : '';
      this.homeCalendarLinkSrc = pageContent.homeCalendarLink['url'];
      this.homeCalendarLinkDescription = pageContent.homeCalendarLink['description'];
      // Home Gallery Link
      pageContent.homeGalleryLink = pageContent.homeGalleryLink ? pageContent.homeGalleryLink : {};
      pageContent.homeGalleryLink['url'] = pageContent.homeGalleryLink['url'] ? pageContent.homeGalleryLink['url'] : '';
      pageContent.homeGalleryLink['description'] = pageContent.homeGalleryLink['description'] ? pageContent.homeGalleryLink['description'] : '';
      this.homeGalleryLinkSrc = pageContent.homeGalleryLink['url'];
      this.homeGalleryLinkDescription = pageContent.homeGalleryLink['description'];
      // Home Pastor Link
      pageContent.homePastorLink = pageContent.homePastorLink ? pageContent.homePastorLink : {};
      pageContent.homePastorLink['url'] = pageContent.homePastorLink['url'] ? pageContent.homePastorLink['url'] : '';
      pageContent.homePastorLink['description'] = pageContent.homePastorLink['description'] ? pageContent.homePastorLink['description'] : '';
      this.homePastorLinkSrc = pageContent.homePastorLink['url'];
      this.homePastorLinkDescription = pageContent.homePastorLink['description'];
      // Home History Link
      pageContent.homeHistoryLink = pageContent.homeHistoryLink ? pageContent.homeHistoryLink : {};
      pageContent.homeHistoryLink['url'] = pageContent.homeHistoryLink['url'] ? pageContent.homeHistoryLink['url'] : '';
      pageContent.homeHistoryLink['description'] = pageContent.homeHistoryLink['description'] ? pageContent.homeHistoryLink['description'] : '';
      this.homeHistoryLinkSrc = pageContent.homeHistoryLink['url'];
      this.homeHistoryLinkDescription = pageContent.homeHistoryLink['description'];
      // Home Childcare Image
      pageContent.homeChildcareImage = pageContent.homeChildcareImage ? pageContent.homeChildcareImage : {};
      pageContent.homeChildcareImage['url'] = pageContent.homeChildcareImage['url'] ? pageContent.homeChildcareImage['url'] : '';
      pageContent.homeChildcareImage['description'] = pageContent.homeChildcareImage['description'] ? pageContent.homeChildcareImage['description'] : '';
      this.homeChildcareImageSrc = pageContent.homeChildcareImage['url'];
      this.homeChildcareImageDescription = pageContent.homeChildcareImage['description'];
    });
  }



  // Sends the prayer request
  // Sends a POST request to Formspree with content of contact form.
  // Formspree is not compatible with Angular by default, so we have to use the http client
  postPrayer() {


  }



  // Sends the contact message
  // Sends a POST request to Formspree with content of contact form.
  // Formspree is not compatible with Angular by default, so we have to use the http client
  postMessage() {

    

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    // Url that we are sending the POST request to
    const url = 'https://formsubmit.io/send/JTAIndy@gmail.com';

    // WRONG
    // const data = {
    //   name: name,
    //   email: email,
    //   message: message
    // }

    // RIGHT
    const data = `name=${this.contactRequestName}&email=${this.contactRequestEmail}&phone=${this.contactRequestPhone}&message=${this.contactRequestMessage}&_formsubmit_id=${this.avoidSpam}`;

    // Actually send the post request, and listen for a response.
    this.http.post(url, data, httpOptions)
      .subscribe(
        value => { console.log('Response is: '); console.log(value); },
        error => { 
          alert('Error submitting form. Please contact us at JTAIndy@gmail.com.');
          console.log(error);
        },
        () => {
          alert('Submission successful');
          this.contactRequestName = '';
          this.contactRequestEmail = '';
          this.contactRequestPhone = '';
          this.contactRequestMessage = '';
        }
      );


      // Prepare the object we're going to send
      const body = {
        accessToken: token,
        uidToReset: this.editUserKey,
        newPassword: this.resetPassword
      };
      // Send the post request to update that user
      // Doing it this way, to the path /updateUserPassword instead of the full path, avoids CORS errors.
      // This path is set up in the firebase.json file to direct to the cloud function.
      // Meaning - this request WILL NOT WORK ON LOCAL HOST - it will only work when deployed to Firebase.
      this.http.post('/sendContactMessage', body).subscribe(
        data => {
          // If we receive 'false' as a response, it did not update the login credential - we need an admin to look at the logs and see why
          if (!data) {
            alert('ERROR - Failed to update password. User needs to login with OLD password. See Firebase cloud function logs for more details.');
          }
          // Regardless, time to hide the reset password popup
          this.resetPassword = '';
          this.resetPasswordConfirm = '';
          this.resetPasswordErrors = '';
        },
        err => {
          console.log('error in POST request to update user login credential, inside resetThisPassword(), inside existing-users.component.ts.');
          console.log(err);
          this.resetPasswordErrors = err.message;
        },
        () => console.log('Completed POST request to update user login credential, inside resetThisPassword(), inside existing-users.component.ts.')
      )






  }




}
