import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Components
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatChipsModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// 3rd Party Components
import { PdfViewerModule } from 'ng2-pdf-viewer';
// ParlAI Components
import { UploadComponent } from './upload/upload.component';
import { QuestionInspectComponent } from './question-inspect/question-inspect.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { QuestionComposeComponent } from './question-compose/question-compose.component';
import { QuestionSubmittedComponent } from './question-submitted/question-submitted.component';
import { StartComponent } from './start/start.component';
import { EndPageComponent } from './end-page/end-page.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    QuestionInspectComponent,
    DocumentViewComponent,
    QuestionComposeComponent,
    QuestionSubmittedComponent,
    StartComponent,
    EndPageComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
