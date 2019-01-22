import { TestBed } from '@angular/core/testing';

import { MinistryDocumentService } from './ministry-document.service';

describe('MinistryDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinistryDocumentService = TestBed.get(MinistryDocumentService);
    expect(service).toBeTruthy();
  });
});
