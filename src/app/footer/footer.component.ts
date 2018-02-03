import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerIframeSrc;


  constructor(private contentService: ContentService, private sanitizer: DomSanitizer) { }



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
      this.footerIframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(pageContent.footerMap);
      // Images
        // None
    });
  }



}
