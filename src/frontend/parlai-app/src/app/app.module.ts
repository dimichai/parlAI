import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, AppConfig } from './app.config';

// Angular Components
import { HttpClientModule } from '@angular/common/http';

// Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Components
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatChipsModule, MatToolbarModule, MatBottomSheetModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
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
import { MatListModule } from '@angular/material/list';
import { ContactPeersComponent } from './contact-peers/contact-peers.component';
import { QuestionDocumentLookupComponent } from './question-document-lookup/question-document-lookup.component';

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
    ContactPeersComponent,
    QuestionDocumentLookupComponent,
  ],
  entryComponents: [
    ContactPeersComponent,
    QuestionDocumentLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatChipsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatBottomSheetModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
