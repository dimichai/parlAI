import { Question } from 'src/app/models/question';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { QuestionInspectComponent } from './question-inspect/question-inspect.component';
import { QuestionComposeComponent } from './question-compose/question-compose.component';
import { QuestionSubmittedComponent } from './question-submitted/question-submitted.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { StartComponent } from './start/start.component';
import { EndPageComponent } from './end-page/end-page.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'question-inspect', component: QuestionInspectComponent },
  { path: 'question-compose', component: QuestionComposeComponent, data: {} },
  { path: 'question-submitted', component: QuestionSubmittedComponent },
  { path: 'document-view', component: DocumentViewComponent },
  { path: 'endpage', component: EndPageComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
