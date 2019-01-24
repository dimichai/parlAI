import { TestBed } from '@angular/core/testing';

import { KeywordService } from './keyword.service';

describe('KeywordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeywordService = TestBed.get(KeywordService);
    expect(service).toBeTruthy();
  });
});
