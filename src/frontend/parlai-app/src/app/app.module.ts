import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material Components
import {MatButtonModule} from '@angular/material';
import { UploadComponent } from './upload/upload.component';
import { QuestionInspectComponent } from './question-inspect/question-inspect.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { QuestionComposeComponent } from './question-compose/question-compose.component';
import { QuestionSubmittedComponent } from './question-submitted/question-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    QuestionInspectComponent,
    DocumentViewComponent,
    QuestionComposeComponent,
    QuestionSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
