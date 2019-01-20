import { QuestionDocument } from './../models/question-document';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { User } from '../models/user';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // uploadForm: FormGroup;
  // items: FormArray;
  // isShowSpinner: Boolean = false;
  // userid: string;
  userid: string = this.route.snapshot.queryParamMap.get('userid');
  user_id = Number(this.userid);
  users: User[] = [];
  selectedUser: User;

  private router: Router;
  questionDocuments: QuestionDocument[] = [];

  constructor(router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.router = router;

    this.users.push(new User(1, 'abraamhaar', 'Arjuna Braamhaar',	'arjuna.braamhaar@minienm.nl', '06-14645024', 'motorrijtuigen,zonne-energie,innovatie,waterstof'));
    this.users.push(new User(2, 'yhildebrand', 'Yamilla Hildebrand', 'yamilla.hildebrand@minienm.nl', '06-82288782', 'kleine luchtvaart,luchtvaart,schiphol,regionale luchthavens'));
    this.users.push(new User(3,	'sspijker', 'Sien Spijker', 'sien.spijker@minienm.nl', '06-88465860', 'spoorwegen,verkeersveiligheid,verkeer,openbaarvervoer, taxi,bussen'));
    this.users.push(new User(4,	'hdijksterhuis', 'Hong Dijksterhuis', 'hong.dijksterhuis@mineinm.nl', '06-80456658', 'goederenvervoer,vrachtwagenchauffeurs,verkeersveiligheid'));
    this.users.push(new User(5, 'ykorenhof', 'Yassir Korenhof', 'yassir.korenhof@minienm.nl', '06-56678058', 'visserij,rijn,rivieren,waterkwaliteit,sluizen'));

    this.questionDocuments.push(new QuestionDocument(1,
      'De uitzending van Zembla ‘De Kunstgrasberg’',
      'S.C. Kröger - GL - Lid Tweede Kamer',
      // tslint:disable-next-line:max-line-length
      'KUNSTSTOFFEN,ZWARE METALEN,GEMEENTEN,RECYCLING,AFVALVERWERKING,BEDROGSDELICTEN,SPORTORGANISATIES,HANDHAVING,SPEELTUINEN,MILIE,UDELICTEN',
      []),
      new QuestionDocument(2,
        'Illegale praktijken rondom recycling van kunstgras',
        'F.P. Wassenberg - PVDD - Lid Tweede Kamer',
        // tslint:disable-next-line:max-line-length
        'RECYCLING,KUNSTSTOFFEN,GEMEENTEN,MILIEUVERGUNNINGEN,PROVINCIES,HANDHAVING,MILIEUDELICTEN,CHANTAGE,FAILLISSEMENTEN,CRIMINALITEIT',
        []));

    this.selectedUser = this.users.find(x => x.id === this.user_id);
    // this.username = this.selectedUser.real_name;
  }

  ngOnInit() {
  }
    // this.uploadForm = this.formBuilder.group({
    //   question: '',
    //   items: this.formBuilder.array([this.createItem()])
    // });

  // createItem(): FormGroup {
  //   return this.formBuilder.group({
  //     question: '',
  //   });
  // }

  // addItem(): void {
  //   this.items = this.uploadForm.get('items') as FormArray;
  //   this.items.push(this.createItem());
  // }

  answerClicked(question) {
    this.router.navigate(['question-inspect']);
  }

  // submitQuestion(): void {
  //   // const that = this;
  //   // this.isShowSpinner = true;
  //   // window.setTimeout(function () {
  //   //   that.isShowSpinner = false;
  //   //   that.router.navigateByUrl('/question-inspect');
  //   // }, 1000);
  //   this.router.navigate(['question-inspect']);
  // }
}
