import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
    addTextArea(){
    var textBox = document.createElement("textarea");
    textBox.placeholder="Paste your questions here";
    // textBox.matinput;
    document.getElementById("textAreas").appendChild(textBox);
  }

}
