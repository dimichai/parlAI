import { QuestionDocument } from './../models/question-document';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionDocumentService {

  baseUrl = this._config.baseUrl + '/questionDocuments';
  currentDocument: QuestionDocument;

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) { }

  getDocumentsByUserId(userId: string): Observable<QuestionDocument[]> {
    const params = new HttpParams().set('userid', userId);

    return this._http
      .get(this.baseUrl, { params: params })
      .pipe(
        map((response: any) =>
          response.map(entity => new QuestionDocument().fromJson(entity))
        )
      );
  }
}
