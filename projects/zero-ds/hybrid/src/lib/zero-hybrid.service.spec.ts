import { TestBed } from '@angular/core/testing';

import { ZeroHybridService } from './zero-hybrid.service';

describe('ZeroHybridService', () => {
  let service: ZeroHybridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeroHybridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
