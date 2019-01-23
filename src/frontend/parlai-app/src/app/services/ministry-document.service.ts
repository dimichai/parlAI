import { MinistryDocument } from './../models/ministry-document';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinistryDocumentService {

  baseUrl = this._config.baseUrl + '/documents';

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) { }

  getDocumentsByQuestion(question: Question): Observable<MinistryDocument> {
    return this._http
      .post(this.baseUrl, question)
      .pipe(
        map((response: any) =>
          response.map(entity => new MinistryDocument().fromJson(entity))
        )
      );
  }
}
