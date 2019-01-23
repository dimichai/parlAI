import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {
  pdfSrc = '/assets/example-doc.pdf';

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  backClicked() {
    this.location.back();
  }

}
