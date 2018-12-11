import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Components
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms'
// 3rd Party Components
import { PdfViewerModule } from 'ng2-pdf-viewer';
// ParlAI Components
import { UploadComponent } from './upload/upload.component';
import { QuestionInspectComponent } from './question-inspect/question-inspect.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { QuestionComposeComponent } from './question-compose/question-compose.component';
import { QuestionSubmittedComponent } from './question-submitted/question-submitted.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    QuestionInspectComponent,
    DocumentViewComponent,
    QuestionComposeComponent,
    QuestionSubmittedComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
