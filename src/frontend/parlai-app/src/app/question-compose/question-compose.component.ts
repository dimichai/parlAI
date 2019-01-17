import { Component, OnInit } from '@angular/core';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { Question } from '../models/question';

@Component({
  selector: 'app-question-compose',
  templateUrl: './question-compose.component.html',
  styleUrls: ['./question-compose.component.css']
})
export class QuestionComposeComponent implements OnInit {
  questions: Question[];
  constructor(public qaService: QuestionAnsweringService) { }

  ngOnInit() {
    this.questions = this.qaService.questions;
    // console.log(this.qaService.questions);
  }

}
