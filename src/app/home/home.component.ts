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
  homeLadyImageSrc = '';
  homeLadyImageDescription = '';
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
  homeChildcareSlider1Src = '';
  homeChildcareSlider1Description = '';
  homeChildcareSlider2Src = '';
  homeChildcareSlider2Description = '';
  homeChildcareSlider3Src = '';
  homeChildcareSlider3Description = '';
  homeChildcareSlider4Src = '';
  homeChildcareSlider4Description = '';
  homeChildcareSlider5Src = '';
  homeChildcareSlider5Description = '';
  // Prayer request form
  prayerRequestName = '';
  prayerRequestMessage = '';
  // Contact request form
  contactRequestName = '';
  contactRequestEmail = '';
  contactRequestPhone = '';
  contactRequestMessage = '';



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
      // Home Lady Image
      pageContent.homeLadyImage = pageContent.homeLadyImage ? pageContent.homeLadyImage : {};
      pageContent.homeLadyImage['url'] = pageContent.homeLadyImage['url'] ? pageContent.homeLadyImage['url'] : '';
      pageContent.homeLadyImage['description'] = pageContent.homeLadyImage['description'] ? pageContent.homeLadyImage['description'] : '';
      this.homeLadyImageSrc = pageContent.homeLadyImage['url'];
      this.homeLadyImageDescription = pageContent.homeLadyImage['description'];
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
      // Home Childcare Slider 1
      pageContent.homeChildcareSlider1 = pageContent.homeChildcareSlider1 ? pageContent.homeChildcareSlider1 : {};
      pageContent.homeChildcareSlider1['url'] = pageContent.homeChildcareSlider1['url'] ? pageContent.homeChildcareSlider1['url'] : '';
      pageContent.homeChildcareSlider1['description'] = pageContent.homeChildcareSlider1['description'] ? pageContent.homeChildcareSlider1['description'] : '';
      this.homeChildcareSlider1Src = pageContent.homeChildcareSlider1['url'];
      this.homeChildcareSlider1Description = pageContent.homeChildcareSlider1['description'];
      // Home Childcare Slider 2
      pageContent.homeChildcareSlider2 = pageContent.homeChildcareSlider2 ? pageContent.homeChildcareSlider2 : {};
      pageContent.homeChildcareSlider2['url'] = pageContent.homeChildcareSlider2['url'] ? pageContent.homeChildcareSlider2['url'] : '';
      pageContent.homeChildcareSlider2['description'] = pageContent.homeChildcareSlider2['description'] ? pageContent.homeChildcareSlider2['description'] : '';
      this.homeChildcareSlider2Src = pageContent.homeChildcareSlider2['url'];
      this.homeChildcareSlider2Description = pageContent.homeChildcareSlider2['description'];
      // Home Childcare Slider 3
      pageContent.homeChildcareSlider3 = pageContent.homeChildcareSlider3 ? pageContent.homeChildcareSlider3 : {};
      pageContent.homeChildcareSlider3['url'] = pageContent.homeChildcareSlider3['url'] ? pageContent.homeChildcareSlider3['url'] : '';
      pageContent.homeChildcareSlider3['description'] = pageContent.homeChildcareSlider3['description'] ? pageContent.homeChildcareSlider3['description'] : '';
      this.homeChildcareSlider3Src = pageContent.homeChildcareSlider3['url'];
      this.homeChildcareSlider3Description = pageContent.homeChildcareSlider3['description'];
      // Home Childcare Slider 4
      pageContent.homeChildcareSlider4 = pageContent.homeChildcareSlider4 ? pageContent.homeChildcareSlider4 : {};
      pageContent.homeChildcareSlider4['url'] = pageContent.homeChildcareSlider4['url'] ? pageContent.homeChildcareSlider4['url'] : '';
      pageContent.homeChildcareSlider4['description'] = pageContent.homeChildcareSlider4['description'] ? pageContent.homeChildcareSlider4['description'] : '';
      this.homeChildcareSlider4Src = pageContent.homeChildcareSlider4['url'];
      this.homeChildcareSlider4Description = pageContent.homeChildcareSlider4['description'];
      // Home Childcare Slider 5
      pageContent.homeChildcareSlider5 = pageContent.homeChildcareSlider5 ? pageContent.homeChildcareSlider5 : {};
      pageContent.homeChildcareSlider5['url'] = pageContent.homeChildcareSlider5['url'] ? pageContent.homeChildcareSlider5['url'] : '';
      pageContent.homeChildcareSlider5['description'] = pageContent.homeChildcareSlider5['description'] ? pageContent.homeChildcareSlider5['description'] : '';
      this.homeChildcareSlider5Src = pageContent.homeChildcareSlider5['url'];
      this.homeChildcareSlider5Description = pageContent.homeChildcareSlider5['description'];
    });
  }



  // Sends the prayer request
  postPrayer() {
    // Make the cursor show the progress icon, let the user know stuff is happening
    document.body.style.cursor = 'progress';
    // Prepare the object we're going to send
    const body = {
      prayerRequestName: this.prayerRequestName,
      prayerRequestMessage: this.prayerRequestMessage
    };
    // Send the post request to update that user
    // Doing it this way, to the path /sendPrayerRequest instead of the full path, avoids CORS errors.
    // This path is set up in the firebase.json file to direct to the cloud function.
    // Meaning - this request WILL NOT WORK ON LOCAL HOST - it will only work when deployed to Firebase.
    this.http.post('/sendPrayerRequest', body).subscribe(
      data => {
        // We received a message back from the server. Display this message in a popup and reset the variables.
        document.body.style.cursor = 'default';
        alert(data['answer']);
        this.prayerRequestName = '';
        this.prayerRequestMessage = '';
      },
      err => {
        document.body.style.cursor = 'default';
        alert('Error submitting form. Please contact us at JTAIndy@gmail.com.');
        console.log(err);
      },
      () => {
        document.body.style.cursor = 'default';
        this.prayerRequestName = '';
        this.prayerRequestMessage = '';
      }
    )
  }



  // Sends the contact message
  postMessage() {
    // Make the cursor show the progress icon, let the user know stuff is happening
    document.body.style.cursor = 'progress';
    // Prepare the object we're going to send
    const body = {
      contactRequestName: this.contactRequestName,
      contactRequestEmail: this.contactRequestEmail,
      contactRequestPhone: this.contactRequestPhone,
      contactRequestMessage: this.contactRequestMessage,
    };
    // Send the post request to update that user
    // Doing it this way, to the path /sendContactMessage instead of the full path, avoids CORS errors.
    // This path is set up in the firebase.json file to direct to the cloud function.
    // Meaning - this request WILL NOT WORK ON LOCAL HOST - it will only work when deployed to Firebase.
    this.http.post('/sendContactMessage', body).subscribe(
      data => {
        // We received a message back from the server. Display this message in a popup and reset the variables.
        document.body.style.cursor = 'default';
        alert(data['answer']);
        this.contactRequestName = '';
        this.contactRequestEmail = '';
        this.contactRequestPhone = '';
        this.contactRequestMessage = '';
      },
      err => {
        document.body.style.cursor = 'default';
        alert('Error submitting form. Please contact us at JTAIndy@gmail.com.');
        console.log(err);
      },
      () => {
        document.body.style.cursor = 'default';
        this.contactRequestName = '';
        this.contactRequestEmail = '';
        this.contactRequestPhone = '';
        this.contactRequestMessage = '';
      }
    )
  }




}
