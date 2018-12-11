import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-inspect',
  templateUrl: './question-inspect.component.html',
  styleUrls: ['./question-inspect.component.scss']
})
export class QuestionInspectComponent implements OnInit {

  selectedQuestion = 'q1';

  constructor() { }

  ngOnInit() {
  }

  questionSelected(selected: string) {
    this.selectedQuestion = selected;
  }

}
