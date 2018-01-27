import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { ContentService } from '../services/content.service';
import { ScrollingService } from '../services/scrolling.service';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  gallerySliderImage1Src = '';
  gallerySliderImage1Description = '';
  gallerySliderImage2Src = '';
  gallerySliderImage2Description = '';
  gallerySliderImage3Src = '';
  gallerySliderImage3Description = '';
  gallerySliderImage4Src = '';
  gallerySliderImage4Description = '';
  gallerySliderImage5Src = '';
  gallerySliderImage5Description = '';
  gallerySliderImage6Src = '';
  gallerySliderImage6Description = '';
  gallerySliderImage7Src = '';
  gallerySliderImage7Description = '';
  gallerySliderImage8Src = '';
  gallerySliderImage8Description = '';
  gallerySliderImage9Src = '';
  gallerySliderImage9Description = '';
  gallerySliderImage10Src = '';
  gallerySliderImage10Description = '';



  constructor(private contentService: ContentService, private scrollingService: ScrollingService) { }

  ngOnInit() {
    // When the page loads from another page that is scrolled down, so is this one.
    // Force it to the top of the page. Side effect of this work-around is this looks like a cool transition animation!
    this.scrollingService.triggerScrollToTargetOnCurrentPage('topOfPage');
    // Configure image gallery options
    this.galleryOptions = [
      {
          width: '750px',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          imageAutoPlayInterval: 4000,
          imageAutoPlayPauseOnHover: true,
          imageSwipe: true,
          imageInfinityMove : true,
          thumbnails: true,
          thumbnailsPercent: 20,
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
          width: '600px',
          height: '400px',
          thumbnailsColumns: 3,
      },
      // max-width 400
      {
          breakpoint: 400,
          width: '300px',
          height: '200px',
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
    this.contentService.getPageContent('galleryPage').then( pageContent => {
      pageContent = pageContent ? pageContent : {};
      // Text
        // None
      // Images
      // Gallery Slider 1
      pageContent.gallerySliderImage1 = pageContent.gallerySliderImage1 ? pageContent.gallerySliderImage1 : {};
      pageContent.gallerySliderImage1['url'] = pageContent.gallerySliderImage1['url'] ? pageContent.gallerySliderImage1['url'] : '';
      pageContent.gallerySliderImage1['description'] = pageContent.gallerySliderImage1['description'] ? pageContent.gallerySliderImage1['description'] : '';
      this.gallerySliderImage1Src = pageContent.gallerySliderImage1['url'];
      this.gallerySliderImage1Description = pageContent.gallerySliderImage1['description'];
      // Gallery Slider 2
      pageContent.gallerySliderImage2 = pageContent.gallerySliderImage2 ? pageContent.gallerySliderImage2 : {};
      pageContent.gallerySliderImage2['url'] = pageContent.gallerySliderImage2['url'] ? pageContent.gallerySliderImage2['url'] : '';
      pageContent.gallerySliderImage2['description'] = pageContent.gallerySliderImage2['description'] ? pageContent.gallerySliderImage2['description'] : '';
      this.gallerySliderImage2Src = pageContent.gallerySliderImage2['url'];
      this.gallerySliderImage2Description = pageContent.gallerySliderImage2['description'];
      // Gallery Slider 3
      pageContent.gallerySliderImage3 = pageContent.gallerySliderImage3 ? pageContent.gallerySliderImage3 : {};
      pageContent.gallerySliderImage3['url'] = pageContent.gallerySliderImage3['url'] ? pageContent.gallerySliderImage3['url'] : '';
      pageContent.gallerySliderImage3['description'] = pageContent.gallerySliderImage3['description'] ? pageContent.gallerySliderImage3['description'] : '';
      this.gallerySliderImage3Src = pageContent.gallerySliderImage3['url'];
      this.gallerySliderImage3Description = pageContent.gallerySliderImage3['description'];
      // Gallery Slider 4
      pageContent.gallerySliderImage4 = pageContent.gallerySliderImage4 ? pageContent.gallerySliderImage4 : {};
      pageContent.gallerySliderImage4['url'] = pageContent.gallerySliderImage4['url'] ? pageContent.gallerySliderImage4['url'] : '';
      pageContent.gallerySliderImage4['description'] = pageContent.gallerySliderImage4['description'] ? pageContent.gallerySliderImage4['description'] : '';
      this.gallerySliderImage4Src = pageContent.gallerySliderImage4['url'];
      this.gallerySliderImage4Description = pageContent.gallerySliderImage4['description'];
      // Gallery Slider 5
      pageContent.gallerySliderImage5 = pageContent.gallerySliderImage5 ? pageContent.gallerySliderImage5 : {};
      pageContent.gallerySliderImage5['url'] = pageContent.gallerySliderImage5['url'] ? pageContent.gallerySliderImage5['url'] : '';
      pageContent.gallerySliderImage5['description'] = pageContent.gallerySliderImage5['description'] ? pageContent.gallerySliderImage5['description'] : '';
      this.gallerySliderImage5Src = pageContent.gallerySliderImage5['url'];
      this.gallerySliderImage5Description = pageContent.gallerySliderImage5['description'];
      // Gallery Slider 6
      pageContent.gallerySliderImage6 = pageContent.gallerySliderImage6 ? pageContent.gallerySliderImage6 : {};
      pageContent.gallerySliderImage6['url'] = pageContent.gallerySliderImage6['url'] ? pageContent.gallerySliderImage6['url'] : '';
      pageContent.gallerySliderImage6['description'] = pageContent.gallerySliderImage6['description'] ? pageContent.gallerySliderImage6['description'] : '';
      this.gallerySliderImage6Src = pageContent.gallerySliderImage6['url'];
      this.gallerySliderImage6Description = pageContent.gallerySliderImage6['description'];
      // Gallery Slider 7
      pageContent.gallerySliderImage7 = pageContent.gallerySliderImage7 ? pageContent.gallerySliderImage7 : {};
      pageContent.gallerySliderImage7['url'] = pageContent.gallerySliderImage7['url'] ? pageContent.gallerySliderImage7['url'] : '';
      pageContent.gallerySliderImage7['description'] = pageContent.gallerySliderImage7['description'] ? pageContent.gallerySliderImage7['description'] : '';
      this.gallerySliderImage7Src = pageContent.gallerySliderImage7['url'];
      this.gallerySliderImage7Description = pageContent.gallerySliderImage7['description'];
      // Gallery Slider 8
      pageContent.gallerySliderImage8 = pageContent.gallerySliderImage8 ? pageContent.gallerySliderImage8 : {};
      pageContent.gallerySliderImage8['url'] = pageContent.gallerySliderImage8['url'] ? pageContent.gallerySliderImage8['url'] : '';
      pageContent.gallerySliderImage8['description'] = pageContent.gallerySliderImage8['description'] ? pageContent.gallerySliderImage8['description'] : '';
      this.gallerySliderImage8Src = pageContent.gallerySliderImage8['url'];
      this.gallerySliderImage8Description = pageContent.gallerySliderImage8['description'];
      // Gallery Slider 9
      pageContent.gallerySliderImage9 = pageContent.gallerySliderImage9 ? pageContent.gallerySliderImage9 : {};
      pageContent.gallerySliderImage9['url'] = pageContent.gallerySliderImage9['url'] ? pageContent.gallerySliderImage9['url'] : '';
      pageContent.gallerySliderImage9['description'] = pageContent.gallerySliderImage9['description'] ? pageContent.gallerySliderImage9['description'] : '';
      this.gallerySliderImage9Src = pageContent.gallerySliderImage9['url'];
      this.gallerySliderImage9Description = pageContent.gallerySliderImage9['description'];
      // Gallery Slider 10
      pageContent.gallerySliderImage10 = pageContent.gallerySliderImage10 ? pageContent.gallerySliderImage10 : {};
      pageContent.gallerySliderImage10['url'] = pageContent.gallerySliderImage10['url'] ? pageContent.gallerySliderImage10['url'] : '';
      pageContent.gallerySliderImage10['description'] = pageContent.gallerySliderImage10['description'] ? pageContent.gallerySliderImage10['description'] : '';
      this.gallerySliderImage10Src = pageContent.gallerySliderImage10['url'];
      this.gallerySliderImage10Description = pageContent.gallerySliderImage10['description'];

      // Reset the gallery images
      let newImages = this.galleryImages.slice(0, this.galleryImages.length);
      newImages = [
        {
          'small': this.gallerySliderImage1Src,
          'medium': this.gallerySliderImage1Src,
          'big': this.gallerySliderImage1Src
        },
        {
          'small': this.gallerySliderImage2Src,
          'medium': this.gallerySliderImage2Src,
          'big': this.gallerySliderImage2Src
        },
        {
          'small': this.gallerySliderImage3Src,
          'medium': this.gallerySliderImage3Src,
          'big': this.gallerySliderImage3Src

        },
        {
          'small': this.gallerySliderImage4Src,
          'medium': this.gallerySliderImage4Src,
          'big': this.gallerySliderImage4Src

        },
        {
          'small': this.gallerySliderImage5Src,
          'medium': this.gallerySliderImage5Src,
          'big': this.gallerySliderImage5Src
        },
        {
          'small': this.gallerySliderImage6Src,
          'medium': this.gallerySliderImage6Src,
          'big': this.gallerySliderImage6Src
        },
        {
          'small': this.gallerySliderImage7Src,
          'medium': this.gallerySliderImage7Src,
          'big': this.gallerySliderImage7Src
        },
        {
          'small': this.gallerySliderImage8Src,
          'medium': this.gallerySliderImage8Src,
          'big': this.gallerySliderImage8Src

        },
        {
          'small': this.gallerySliderImage9Src,
          'medium': this.gallerySliderImage9Src,
          'big': this.gallerySliderImage9Src

        },
        {
          'small': this.gallerySliderImage10Src,
          'medium': this.gallerySliderImage10Src,
          'big': this.gallerySliderImage10Src
        }
      ];
      this.galleryImages = newImages;
    });
  }



}
