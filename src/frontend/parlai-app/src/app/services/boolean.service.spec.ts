import { TestBed } from '@angular/core/testing';

import { BooleanService } from './boolean.service';

describe('BooleanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooleanService = TestBed.get(BooleanService);
    expect(service).toBeTruthy();
  });
});
