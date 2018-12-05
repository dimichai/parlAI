import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComposeComponent } from './question-compose.component';

describe('QuestionComposeComponent', () => {
  let component: QuestionComposeComponent;
  let fixture: ComponentFixture<QuestionComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
