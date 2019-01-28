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
        keywords = 'Commerciële Luchtvaart';
        break;
      case 1:
        keywords = 'Verkeerswetgeving';
        break;
      case 2:
        keywords = 'Waterwegen';
        break;
      case 3:
        keywords = 'Transport & Voertuig Problemen';
        break;
      case 4:
        keywords = 'Mileuproblemen';
        break;
      case 5:
        keywords = 'Afvalbeheer en mileu';
        break;
      case 6:
        keywords = 'Luchtvaart en Luchthavenbeleid';
        break;
      case 7:
        keywords = 'Informatie van de Overheid';
        break;
      case 8:
        keywords = 'Probleemoplossingen';
        break;
      case 9:
        keywords = 'Overige onderwerpen';
        break;
    }

    const topicEntity = new QuestionTopic(topic.num, keywords);

    return topicEntity;
  }
}
