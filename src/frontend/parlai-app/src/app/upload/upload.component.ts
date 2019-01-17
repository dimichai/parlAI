import { QuestionDocument } from './../models/question-document';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../models/question';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  // uploadForm: FormGroup;
  // items: FormArray;
  // isShowSpinner: Boolean = false;
  private router: Router;
  questionDocuments: QuestionDocument[] = [];

  constructor(router: Router, private formBuilder: FormBuilder) {
    this.router = router;

    this.questionDocuments.push(new QuestionDocument(1,
      'De uitzending van Zembla ‘De Kunstgrasberg’',
      'S.C. Kröger - GL - Lid Tweede Kamer',
      // tslint:disable-next-line:max-line-length
      'KUNSTSTOFFEN,ZWARE METALEN,GEMEENTEN,RECYCLING,AFVALVERWERKING,BEDROGSDELICTEN,SPORTORGANISATIES,HANDHAVING,SPEELTUINEN,MILIE,UDELICTEN',
      []));
  }

  ngOnInit() {
    // this.uploadForm = this.formBuilder.group({
    //   question: '',
    //   items: this.formBuilder.array([this.createItem()])
    // });
  }

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
