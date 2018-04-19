import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-nav',
  templateUrl: './intro-nav.component.html',
  styleUrls: ['./intro-nav.component.scss']
})
export class IntroNavComponent implements OnInit {

  constructor() { }

  title = 'Navigation Bar';

  ngOnInit() {
  }

}
