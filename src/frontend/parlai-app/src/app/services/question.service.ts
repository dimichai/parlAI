import { MinistryDocument } from './../models/ministry-document';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entity } from '../models/entity';
import { Keyword } from '../models/keyword';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl = this._config.baseUrl + '/questions';

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) { }

  getQuestionsByDocId(docId: string): Observable<Question[]> {
    const params = new HttpParams().set('docid', docId);

    return this._http
      .get(this.baseUrl, { params: params })
      .pipe(
        map((response: any) =>
          response.map(question => {
            const entity = new Question().fromJson(question);
            entity.documents = [];
            question.documents.forEach(doc => {
              entity.documents.push(new MinistryDocument().fromJson(doc));
            });

            entity.keywords = [];
            question.keywords.forEach(kw => {
              entity.keywords.push(new Keyword().fromJson(kw));
            });

            return entity;
          })
        )
      );
  }
}
