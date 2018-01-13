import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ContentService } from '../services/content.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
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
    // Configure image gallery options
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageAutoPlayInterval: 5000,
          imageAutoPlayPauseOnHover: true,
          imageSwipe: true,
          imageInfinityMove : true,
          thumbnails: false,
          previewSwipe: true,
          previewAutoPlay: true,
          previewAutoPlayPauseOnHover: true,
          previewCloseOnClick: true,
          previewCloseOnEsc: true,
          previewFullscreen: true,
          previewZoom: true,
          previewKeyboardNavigation: true,
          previewInfinityMove: true
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          thumbnailsColumns: 3,
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];
    this.galleryImages = [
      {
          small: 'assets/whiteBackgroundFiller.png',
          medium: 'assets/whiteBackgroundFiller.png',
          big: 'assets/whiteBackgroundFiller.png',
      }
    ];
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

      // Reset the gallery images
      let newImages = this.galleryImages.slice(0, this.galleryImages.length);
      newImages = [
        {
          'small': this.calendarSliderImage1Src,
          'medium': this.calendarSliderImage1Src,
          'big': this.calendarSliderImage1Src
        },
        {
          'small': this.calendarSliderImage2Src,
          'medium': this.calendarSliderImage2Src,
          'big': this.calendarSliderImage2Src
        },
        {
          'small': this.calendarSliderImage3Src,
          'medium': this.calendarSliderImage3Src,
          'big': this.calendarSliderImage3Src

        },
        {
          'small': this.calendarSliderImage4Src,
          'medium': this.calendarSliderImage4Src,
          'big': this.calendarSliderImage4Src

        },
        {
          'small': this.calendarSliderImage5Src,
          'medium': this.calendarSliderImage5Src,
          'big': this.calendarSliderImage5Src
        }
      ];
      this.galleryImages = newImages;
    });
  }



}
