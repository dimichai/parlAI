import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

uploadForm: FormGroup;
items: FormArray;
  isShowSpinner: Boolean = false;
  private router: Router
  
  constructor(router: Router, private formBuilder: FormBuilder) {
   this.router = router;
  }

  ngOnInit() {
  this.uploadForm = this.formBuilder.group({
    question: '',
    items: this.formBuilder.array([ this.createItem() ])
  });
}
  
createItem(): FormGroup {
  return this.formBuilder.group({
  question: '',
  });
}

addItem(): void {
  this.items = this.uploadForm.get('items') as FormArray;
  this.items.push(this.createItem());
}

  submitQuestion () {
    const that = this;
    this.isShowSpinner = true;
    window.setTimeout(function () {
      that.isShowSpinner = false;
      that.router.navigateByUrl('/question-inspect');
    }, 1000);
  }
}