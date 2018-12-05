import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSubmittedComponent } from './question-submitted.component';

describe('QuestionSubmittedComponent', () => {
  let component: QuestionSubmittedComponent;
  let fixture: ComponentFixture<QuestionSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
