import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  isShowSpinner: Boolean = false;
  private router: Router
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  addTextArea(){
    var textBox = document.createElement("textarea");
    textBox.placeholder="Paste your questions here";
    // textBox.matinput;
    document.getElementById("textAreas").appendChild(textBox);
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
