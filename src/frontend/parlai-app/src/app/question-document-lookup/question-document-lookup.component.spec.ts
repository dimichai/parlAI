import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDocumentLookupComponent } from './question-document-lookup.component';

describe('QuestionDocumentLookupComponent', () => {
  let component: QuestionDocumentLookupComponent;
  let fixture: ComponentFixture<QuestionDocumentLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDocumentLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDocumentLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
