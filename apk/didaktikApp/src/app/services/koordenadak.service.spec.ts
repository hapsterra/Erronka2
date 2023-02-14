import { TestBed } from '@angular/core/testing';

import { KoordenadakService } from './koordenadak.service';

describe('KoordenadakService', () => {
  let service: KoordenadakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoordenadakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
