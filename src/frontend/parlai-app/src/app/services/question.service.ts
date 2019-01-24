import { MinistryDocument } from './../models/ministry-document';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entity } from '../models/entity';
import { Keyword } from '../models/keyword';
import { QuestionTopic } from '../models/topic';

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

            entity.entities = [];
            question.entities.forEach(ent => {
              entity.entities.push(new Entity().fromJson(ent));
            });

            entity.topic = this.convertTopicToTitle(question.topic);

            return entity;
          })
        )
      );
  }

  // todo: remove this
  convertTopicToTitle(topic): QuestionTopic {
    let keywords = '';
    switch (topic.num) {
      case 0:
        keywords = 'Commercial Flying';
        break;
      case 1:
        keywords = 'Road Regulations';
        break;
      case 2:
        keywords = 'Waterways';
        break;
      case 3:
        keywords = 'Transportation & Vehicles Issues';
        break;
      case 4:
        keywords = 'Environmental Issues';
        break;
      case 5:
        keywords = 'Waste Management and Environment';
        break;
      case 6:
        keywords = 'Airport and Aviation Issues & Policies';
        break;
      case 7:
        keywords = 'Information from the Government';
        break;
      case 8:
        keywords = 'Solving Issues';
        break;
      case 9:
        keywords = 'Other Matters';
        break;
    }

    const topicEntity = new QuestionTopic(topic.num, keywords);

    return topicEntity;
  }
}
