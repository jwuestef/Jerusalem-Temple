import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';
import { ScrollingService } from '../services/scrolling.service';



@Component({
  selector: 'app-pastor',
  templateUrl: './pastor.component.html',
  styleUrls: ['./pastor.component.scss']
})
export class PastorComponent implements OnInit {
  pastorImageSrc = '';
  pastorImageDescription = '';


  constructor(private contentService: ContentService, private scrollingService: ScrollingService) { }



  ngOnInit() {
    // When the page loads from another page that is scrolled down, so is this one.
    // Force it to the top of the page. Side effect of this work-around is this looks like a cool transition animation!
    this.scrollingService.triggerScrollToTargetOnCurrentPage('topOfPage');
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('pastorPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
      pageContent.pastorBiography = pageContent.pastorBiography ? pageContent.pastorBiography : '';
      $('#pastorBiography').html(pageContent.pastorBiography);
      // Images
      pageContent.pastorImage = pageContent.pastorImage ? pageContent.pastorImage : {};
      pageContent.pastorImage['url'] = pageContent.pastorImage['url'] ? pageContent.pastorImage['url'] : '';
      pageContent.pastorImage['description'] = pageContent.pastorImage['description'] ? pageContent.pastorImage['description'] : '';
      this.pastorImageSrc = pageContent.pastorImage['url'];
      this.pastorImageDescription = pageContent.pastorImage['description'];
    });
  }


}
