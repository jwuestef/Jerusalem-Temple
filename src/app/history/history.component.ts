import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyImageSrc = '';
  historyImageDescription = '';



  constructor(private contentService: ContentService) { }



  ngOnInit() {
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('historyPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
      pageContent.churchHistory = pageContent.churchHistory ? pageContent.churchHistory : '';
      $('#churchHistory').html(pageContent.churchHistory);
      // Images
      pageContent.historyImage = pageContent.historyImage ? pageContent.historyImage : {};
      pageContent.historyImage['url'] = pageContent.historyImage['url'] ? pageContent.historyImage['url'] : '';
      pageContent.historyImage['description'] = pageContent.historyImage['description'] ? pageContent.historyImage['description'] : '';
      this.historyImageSrc = pageContent.historyImage['url'];
      this.historyImageDescription = pageContent.historyImage['description'];
    });
  }



}