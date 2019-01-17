import { TestBed } from '@angular/core/testing';

import { QuestionAnsweringService } from './question-answering.service';

describe('QuestionAnsweringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionAnsweringService = TestBed.get(QuestionAnsweringService);
    expect(service).toBeTruthy();
  });
});
