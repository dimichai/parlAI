import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInspectComponent } from './question-inspect.component';

describe('QuestionInspectComponent', () => {
  let component: QuestionInspectComponent;
  let fixture: ComponentFixture<QuestionInspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionInspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
