import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



  constructor(private contentService: ContentService) { }



  ngOnInit() {
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('footer').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
      pageContent.footerSchedule = pageContent.footerSchedule ? pageContent.footerSchedule : '';
      $('#footerSchedule').html(pageContent.footerSchedule);
      pageContent.footerAddress = pageContent.footerAddress ? pageContent.footerAddress : '';
      $('#footerAddress').html(pageContent.footerAddress);
      pageContent.footerMap = pageContent.footerMap ? pageContent.footerMap : '';
      $('#footerMap').html(pageContent.footerMap);
      // Images
        // None
    });
  }



}
