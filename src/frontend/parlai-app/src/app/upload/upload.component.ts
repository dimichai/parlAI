import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

uploadForm: FormGroup;
items: FormArray;

  constructor(private formBuilder: FormBuilder) {}

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

}