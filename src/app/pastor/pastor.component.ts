import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-pastor',
  templateUrl: './pastor.component.html',
  styleUrls: ['./pastor.component.scss']
})
export class PastorComponent implements OnInit {
  pastorImageSrc = '';
  pastorImageDescription = '';


  constructor(private contentService: ContentService) { }



  ngOnInit() {
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
