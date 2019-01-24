import { Keyword } from './../models/keyword';
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { QuestionDocument } from '../models/question-document';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { QuestionDocumentService } from '../services/question-document.service';

@Component({
  selector: 'app-question-document-lookup',
  templateUrl: './question-document-lookup.component.html',
  styleUrls: ['./question-document-lookup.component.scss']
})
export class QuestionDocumentLookupComponent implements OnInit {

  documents: QuestionDocument[];
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Keyword,
    private _qDocService: QuestionDocumentService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._qDocService.getDocumentsByKeyword(this.data)
      .subscribe(
        data => {
          this.documents = data;
          this.ref.markForCheck();
        },
        error => console.log(error)
      );
  }

}
