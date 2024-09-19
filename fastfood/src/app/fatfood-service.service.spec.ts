import { TestBed } from '@angular/core/testing';

import { FatfoodServiceService } from './fatfood-service.service';

describe('FatfoodServiceService', () => {
  let service: FatfoodServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatfoodServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
