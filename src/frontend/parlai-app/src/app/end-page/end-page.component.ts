import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent implements OnInit {
  title: String = 'Thank You!';
  constructor() { }

  ngOnInit() {
  }

}
