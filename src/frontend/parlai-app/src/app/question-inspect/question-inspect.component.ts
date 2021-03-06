import { QuestionTopic } from './../models/topic';
import { KeywordService } from './../services/keyword.service';
import { QuestionDocumentLookupComponent } from './../question-document-lookup/question-document-lookup.component';
import { Keyword } from './../models/keyword';
import { Reference } from './../models/reference';
import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { MinistryDocument } from '../models/ministry-document';
import { Router } from '@angular/router';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { BooleanService } from '../services/boolean.service';
import { MatSnackBar, MatBottomSheet } from '@angular/material';
import { QuestionDocumentService } from '../services/question-document.service';
import { QuestionService } from '../services/question.service';
import { QuestionDocument } from '../models/question-document';
import { Entity } from '../models/entity';

@Component({
  selector: 'app-question-inspect',
  templateUrl: './question-inspect.component.html',
  styleUrls: ['./question-inspect.component.scss']
})
export class QuestionInspectComponent implements OnInit {

  currentDocument: QuestionDocument;
  selectedQuestion: Question = new Question();
  selectedIndex: number;
  questions: Question[] = [];
  isLoading = false;

  constructor(private router: Router,
    public qaService: QuestionAnsweringService,
    public boolService: BooleanService,
    private _qDocService: QuestionDocumentService,
    private _questionService: QuestionService,
    private _kwService: KeywordService,
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    if (this._qDocService.currentDocument) {
      this.currentDocument = this._qDocService.currentDocument;
    }

    this.loadData();
  }

  loadData() {
    if (this.currentDocument) {
      this.isLoading = true;
      this._questionService.getQuestionsByDocId(this.currentDocument.id.toString())
        .subscribe(
          data => {
            this.questions = data;
            this._kwService.currentKeywords = this.questions[0].keywords;
            this.qaService.questions = this.questions;
          },
          error => console.log(error),
          () => this.isLoading = false
        );
    }
  }

  questionSelected(selected, index) {
    this.selectedQuestion = selected;
    this.selectedIndex = index;
  }

  viewDocumentClicked(document: MinistryDocument) {
    window.open(document.canonical, '_blank');
  }

  yesBtnClicked(document: MinistryDocument) {
    document.visible = false;
    this.openSnackBar();
  }

  noBtnClicked(document: MinistryDocument) {
    document.visible = false;
    document.helpful = false;
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('Bedankt voor uw terugkoppeling!', 'Sluiten', {
      duration: 3000,
    });
  }

  keywordClicked(keyword: Keyword) {
    this.bottomSheet.open(
      QuestionDocumentLookupComponent,
      {
        data: keyword
      });
  }

  entityRemoveClicked(entity: Entity) {
    entity.helpful = false;
    entity.visible = false;
    this.openSnackBar();
  }

  topicRemoveClicked(topic: QuestionTopic) {
    topic.helpful = false;
    topic.visible = false;
    this.openSnackBar();
  }

}
