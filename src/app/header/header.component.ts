import { Component, OnInit } from '@angular/core';

import { ScrollingService } from '../services/scrolling.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public scrollingService: ScrollingService) { }

  ngOnInit() {
  }

}
