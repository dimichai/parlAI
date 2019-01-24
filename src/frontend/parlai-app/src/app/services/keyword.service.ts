import { Keyword } from './../models/keyword';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {
  currentKeywords: Keyword[];

  constructor() { }
}
