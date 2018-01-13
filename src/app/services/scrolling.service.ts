import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';



@Injectable()
export class ScrollingService {
 


  constructor(private router: Router, private _scrollToService: ScrollToService) { }
 


  public triggerScrollTo(page, scrollTarget) {
    
    // Set scrolling options
    const config: ScrollToConfigOptions = {
      target: scrollTarget,
      duration: 750,
      easing: 'easeOutElastic'
    };

    // First make sure we're on the right page
    this.router.navigateByUrl(page).then( () => {
      // Give the content a chance to load... then scroll to the provided target
      window.setTimeout( () => {
        this._scrollToService.scrollTo(config);
      }, 500)
    }).catch( (err) => {
      alert('Navigation error. Please contact the webmaster if this error continues.');
      console.log(err);
    })
 
  }



}
