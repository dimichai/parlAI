import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
          response.map(entity => new Question().fromJson(entity))
        )
      );

  }
}
