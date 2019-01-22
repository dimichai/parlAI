import { Component, OnInit } from '@angular/core';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { Question } from '../models/question';
import { BooleanService } from '../services/boolean.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-compose',
  templateUrl: './question-compose.component.html',
  styleUrls: ['./question-compose.component.css']
})
export class QuestionComposeComponent implements OnInit {
  questions: Question[];
  answers: any[] = [];
  constructor(private router: Router,
    public qaService: QuestionAnsweringService,
    public boolService: BooleanService) { }

  ngOnInit() {
    this.questions = this.qaService.questions;
    // console.log(this.qaService.questions);
  }

  viewFeedbacked (indexNum) {
    this.answers = [];
    this.answers.push({id: indexNum, author: 'Yamilla Hildebrand', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', date: '08-01-2019'});
    this.answers.push({id: indexNum, author: 'Hong Dijksterhuis', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', date: '11-01-2019'});
    this.answers.push({id: indexNum, author: 'Yassir Korenhof', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', date: '12-01-2019'});
    this.answers.push({id: indexNum, author: 'Sien Spijker', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXsaa', date: '17-01-2019'});
  }

  resetAnswer () {
    this.answers = [];
  }

  submitAnswer () {
    this.boolService.setHelpBool(false);
    this.router.navigate(['question-submitted']);
  }

}
