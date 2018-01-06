import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarSliderImage1Src = '';
  calendarSliderImage1Description = '';
  calendarSliderImage2Src = '';
  calendarSliderImage2Description = '';
  calendarSliderImage3Src = '';
  calendarSliderImage3Description = '';
  calendarSliderImage4Src = '';
  calendarSliderImage4Description = '';
  calendarSliderImage5Src = '';
  calendarSliderImage5Description = '';



  constructor(private contentService: ContentService) { }



  ngOnInit() {
    // Pull updated content from Firebase
    this.getContent();
  }



  // Pulls page content from Firebase and assigns it to variables
  getContent() {
    this.contentService.getPageContent('calendarPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
      pageContent.calendarSchedule = pageContent.calendarSchedule ? pageContent.calendarSchedule : '';
      $('#calendarSchedule').html(pageContent.calendarSchedule);
      // Images
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
  }



}
