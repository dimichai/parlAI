import { QuestionDocumentService } from './../services/question-document.service';
import { QuestionDocument } from './../models/question-document';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
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
  // userid: string = this.route.snapshot.queryParamMap.get('userid');
  // user_id = Number(this.userid);
  users: User[];
  selectedUser: User = <User>{};

  private router: Router;
  questionDocuments: QuestionDocument[] = [];

  constructor(router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _userService: UsersService,
    private boolService: BooleanService,
    private _qDocService: QuestionDocumentService) {
    this.router = router;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._userService.getUserById(this._userService.getUser().id.toString())
      .subscribe(
        data =>  this.selectedUser = data,
        error => console.log(error)
      );

    this._qDocService.getDocumentsByUserId(this._userService.getUser().id.toString())
        .subscribe(
          data => this.questionDocuments = data,
          error => console.log(error)
        );
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
    this._qDocService.currentDocument = question;
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
