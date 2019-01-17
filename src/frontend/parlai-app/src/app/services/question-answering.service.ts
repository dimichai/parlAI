import { Question } from 'src/app/models/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnsweringService {
  questions: Question[];

  constructor() { }
}
