import { Reference } from './../models/reference';
import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { MinistryDocument } from '../models/ministry-document';
import { Router } from '@angular/router';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { BooleanService } from '../services/boolean.service';
import { MatSnackBar } from '@angular/material';
import { QuestionDocumentService } from '../services/question-document.service';
import { QuestionService } from '../services/question.service';
import { QuestionDocument } from '../models/question-document';

@Component({
  selector: 'app-question-inspect',
  templateUrl: './question-inspect.component.html',
  styleUrls: ['./question-inspect.component.scss']
})
export class QuestionInspectComponent implements OnInit {

  currentDocument: QuestionDocument;
  selectedQuestion: Question = new Question();
  questions: Question[] = [];

  constructor(private router: Router,
    public qaService: QuestionAnsweringService,
    public boolService: BooleanService,
    private _qDocService: QuestionDocumentService,
    private _questionService: QuestionService,
    public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.boolService.setBool(true);

    this.qaService.questions = this.questions;
    if (this._qDocService.currentDocument) {
      this.currentDocument = this._qDocService.currentDocument;
    }

    this.loadData();
  }

  loadData() {
    if (this.currentDocument) {
      this._questionService.getQuestionsByDocId(this.currentDocument.id.toString())
        .subscribe(
          data =>  {this.questions = data; console.log(data); },
          error => console.log(error)
        );
    }
  }

  questionSelected(selected) {
    this.selectedQuestion = selected;
  }

  viewDocumentClicked(document: MinistryDocument) {

    window.open(document.url, '_blank');
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
    this.snackBar.open('Thank you for providing feedback!', 'Close', {
      duration: 3000,
    });
    }

}
