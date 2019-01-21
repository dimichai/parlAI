import { Reference } from './../models/reference';
import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { MinistryDocument } from '../models/ministry-document';
import { Router } from '@angular/router';
import { QuestionAnsweringService } from '../services/question-answering.service';
import { BooleanService } from '../services/boolean.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-question-inspect',
  templateUrl: './question-inspect.component.html',
  styleUrls: ['./question-inspect.component.scss']
})
export class QuestionInspectComponent implements OnInit {

  selectedQuestion: Question;
  questions: Question[] = [];

  constructor(private router: Router,
    public qaService: QuestionAnsweringService,
    public boolService: BooleanService,
    public snackBar: MatSnackBar) {
    // tslint:disable-next-line:max-line-length
    // keywords: KUNSTSTOFFEN,ZWARE METALEN,GEMEENTEN,RECYCLING,AFVALVERWERKING,BEDROGSDELICTEN,SPORTORGANISATIES,HANDHAVING,SPEELTUINEN,MILIE,UDELICTEN
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(1, 'Kent u de uitzending van Zembla genaamd ‘De Kunstgrasberg’?', 'ZEMBLA', 'Zembla', 'Mediareferentie', [new Reference('De kunstgrasberg', 'https://zembla.bnnvara.nl/nieuws/de-kunstgrasberg')],
    // tslint:disable-next-line:max-line-length
    [new MinistryDocument('Beantwoording Kamervragen over de uitzending van Zembla De Kunstgrasberg', '04-10-2018', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/10/04/beantwoording-kamervragen-van-de-leden-kroger-en-westerveld-groenlinks-over-de-uitzending-van-zembla-de-kunstgrasberg')]));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(2, 'Klopt het dat er afgelopen zomer een miljoen vierkante meter aan kunstgras is verwijderd, wat neerkomt op drie duizend vrachtwagens vol vervuilende zware metalen?', 'ZWARE METALEN,GEMEENTEN,AFVALVERWERKING,MILIE', '', 'Vraag over het milieu', [],
    // tslint:disable-next-line:max-line-length
    [new MinistryDocument('Beantwoording Kamervragen over de uitzending van Zembla De Kunstgrasberg', '04-10-2018', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/10/04/beantwoording-kamervragen-van-de-leden-kroger-en-westerveld-groenlinks-over-de-uitzending-van-zembla-de-kunstgrasberg'),
    // tslint:disable-next-line:max-line-length
    new MinistryDocument('Aanbiedingsbrief bij afschrift brief over frauduleuze afvalverwerkingsbedrijven', '16-05-2018', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/05/16/afschrift-brief-over-frauduleuze-afvalverwerkingsbedrijven'),
    // tslint:disable-next-line:max-line-length
    new MinistryDocument('Afvalstromen van Chemours', '26-06-2018', 'https://www.rijksoverheid.nl/documenten/rapporten/2018/06/26/afvalstromen-van-chemours')]));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(3, 'Klopt het dat gemeentes recyclebedrijven tienduizend tot twintigduizend euro betalen om kunstgras te verwerken? Klopt het ook dat deze recyclebedrijven zich vaak niet houden aan deze afspraken en het kunstgras illegaal opslaan en/of illegaal doorverkopen? Deelt u de mening dat het zeer zorgelijk is dat deze bedrijven moedwillig vervuilen voor winst en dat deze winst betaald wordt door de Nederlandse burger?', 'GEMEENTEN,RECYCLING,AFVALVERWERKING,HANDHAVING,UDELICTEN', 'Nederlandse', 'Vraag over het milieu', [],
    // tslint:disable-next-line:max-line-length
    [new MinistryDocument('Kamerbrief met afschrift brief aan gemeente Dongen over afval uit kunstgrasvelden', '2018-11-06', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/11/06/afschrift-brief-aan-de-gemeente-dongen-over-afval-uit-kunstgrasvelden'),
    // tslint:disable-next-line:max-line-length
    new MinistryDocument('Kamerbrief met reactie op brand bij TUF recycling Dongen', '2018-10-17', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/10/17/brand-bij-tuf-recycling-dongen'),
    // tslint:disable-next-line:max-line-length
    new MinistryDocument('Kamerbrief over afval uit kunstgrasvelden', '2018-10-04', 'https://www.rijksoverheid.nl/documenten/kamerstukken/2018/10/04/afval-uit-kunstgrasvelden')]));
    // tslint:disable-next-line:max-line-length
    this.questions.push(new Question(4, 'Hoe vaak worden er inspecties uitgevoerd door de Inspectie Leefomgeving en Transport (ILT) bij bedrijven die kunstgras recyclen? Heeft de inspectie hier eerder over gerapporteerd? Zijn er sancties getroffen?', 'HANDHAVING,UDELICTEN,MILIE', 'Inspectie Leefomgeving', 'Vraag over het milieu',
    [new Reference('Inspectie Leefomgeving en Transport (ILT)', 'https://www.ilent.nl/over-ilt/het-werk-van-de-ilt')],
    // tslint:disable-next-line:max-line-length
    [new MinistryDocument('Besluit Wob-verzoek over inspecties van ILT', '2017-10-11', 'https://www.rijksoverheid.nl/documenten/wob-verzoeken/2017/10/11/besluit-wob-verzoek-over-inspecties-van-ilt'),
    // tslint:disable-next-line:max-line-length
    new MinistryDocument('Besluit op Wob-verzoek over inspecties ILT vanaf 1 januari 2015', '2017-06-12', 'https://www.rijksoverheid.nl/documenten/wob-verzoeken/2017/06/12/besluit-op-het-wob-verzoek-over-inspecties-van-ilt-vanaf-1-januari-2015')]));

    // this.selectedQuestion = this.questions[0];
  }

  ngOnInit() {
    this.boolService.setBool(true);
    this.qaService.questions = this.questions;
  }

  questionSelected(selected) {
    this.selectedQuestion = selected;
  }

  viewDocumentClicked(document: MinistryDocument) {

    window.open(document.url, '_blank');
  }
  
  yesBtnClicked(document: MinistryDocument){
    document.visible = false;
    this.openSnackBar();
  }
  
  noBtnClicked(document: MinistryDocument){
    document.visible = false;
    document.helpful = false;
    this.openSnackBar();
  }
  
    openSnackBar() {
    this.snackBar.open("Thank you for providing feedback!", "Close", {
      duration: 3000,
    });
    }

}
