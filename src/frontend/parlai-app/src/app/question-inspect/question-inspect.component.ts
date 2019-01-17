import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question-inspect',
  templateUrl: './question-inspect.component.html',
  styleUrls: ['./question-inspect.component.scss']
})
export class QuestionInspectComponent implements OnInit {

  selectedQuestion: Question;
  questions: Question[] = [];

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(1, 'Kent u de uitzending van Zembla genaamd ‘De Kunstgrasberg’?', 'KUNSTSTOFFEN,ZWARE METALEN,GEMEENTEN,RECYCLING,AFVALVERWERKING,BEDROGSDELICTEN,SPORTORGANISATIES,HANDHAVING,SPEELTUINEN,MILIE,UDELICTEN', ''));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(2, 'Klopt het dat er afgelopen zomer een miljoen vierkante meter aan kunstgras is verwijderd, wat neerkomt op drie duizend vrachtwagens vol vervuilende zware metalen?', '', ''));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(3, 'Klopt het dat gemeentes recyclebedrijven tienduizend tot twintigduizend euro betalen om kunstgras te verwerken? Klopt het ook dat deze recyclebedrijven zich vaak niet houden aan deze afspraken en het kunstgras illegaal opslaan en/of illegaal doorverkopen? Deelt u de mening dat het zeer zorgelijk is dat deze bedrijven moedwillig vervuilen voor winst en dat deze winst betaald wordt door de Nederlandse burger?', '', ''));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(4, 'Hoe vaak worden er inspecties uitgevoerd door de Inspectie Leefomgeving en Transport (ILT) bij bedrijven die kunstgras recyclen? Heeft de inspectie hier eerder over gerapporteerd? Zijn er sancties getroffen?', '', ''));

    this.selectedQuestion = this.questions[0];
  }

  ngOnInit() {
  }

  questionSelected(selected) {
    this.selectedQuestion = selected;
  }

}
