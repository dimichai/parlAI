import { Component, OnInit } from '@angular/core';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { Question } from '../models/question';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-compose',
  templateUrl: './question-compose.component.html',
  styleUrls: ['./question-compose.component.css']
})
export class QuestionComposeComponent implements OnInit {
  questions: Question[];
  answers: any[] = [];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(public qaService: QuestionAnsweringService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.questions = this.qaService.questions;
    // console.log(this.qaService.questions);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    // this.answers = [];
    // tslint:disable-next-line:max-line-length
    this.answers.push({id: 1, author: 'Yamilla Hildebrand', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', date: '08-01-2019'});

    // tslint:disable-next-line:max-line-length
    this.answers.push({id: 2, author: 'Hong Dijksterhuis', content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', date: '11-01-2019'});

    // tslint:disable-next-line:max-line-length
    // this.answers.push({id: 3, author: 'Yassir Korenhof', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', date: '12-01-2019'});
    // this.answers.push({id: 4, author: 'Sien Spijker', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXsaa', date: '17-01-2019'});
  }

  resetAnswer () {
    this.answers = [];
  }

}
