import { QuestionDocument } from './../models/question-document';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { User } from '../models/user';
import { UsersService } from '../services/users.service'
import { BooleanService } from '../services/boolean.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // uploadForm: FormGroup;
  // items: FormArray;
  // isShowSpinner: Boolean = false;
  userid: string = this.route.snapshot.queryParamMap.get('userid');
  user_id = Number(this.userid);
  users: User[];
  selectedUser: User;

  private router: Router;
  questionDocuments: QuestionDocument[] = [];

  constructor(router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public boolService: BooleanService,
    public uService: UsersService) {
    this.router = router;

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
  }

  ngOnInit() {
    this.users = this.uService.users;
    this.selectedUser = this.users.find(x => x.id === this.user_id);
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
    this.boolService.setHelpBool(true);
    this.boolService.setBool(true);
    this.router.navigate(['question-inspect']);
  }

  goQuestionCompose (question) {
    this.boolService.setHelpBool(true);
    this.boolService.setBool(true);
    this.router.navigate(['question-compose']);
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
