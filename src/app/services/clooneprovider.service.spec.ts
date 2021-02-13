import { TestBed } from '@angular/core/testing';

import { ClooneproviderService } from './clooneprovider.service';

describe('ClooneproviderService', () => {
  let service: ClooneproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClooneproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
