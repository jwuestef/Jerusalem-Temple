import { Component, OnInit } from '@angular/core';

import { ScrollingService } from '../services/scrolling.service';

declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public scrollingService: ScrollingService) {
    $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') ) {
          $(this).collapse('hide');
      }
  });
  }

  ngOnInit() {
  }

}
