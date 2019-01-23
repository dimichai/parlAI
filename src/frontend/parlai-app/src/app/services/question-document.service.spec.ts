import { TestBed } from '@angular/core/testing';

import { QuestionDocumentService } from './question-document.service';

describe('QuestionDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionDocumentService = TestBed.get(QuestionDocumentService);
    expect(service).toBeTruthy();
  });
});
