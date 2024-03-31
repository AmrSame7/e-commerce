import { TestBed } from '@angular/core/testing';

import { EcoDataService } from './eco-data.service';

describe('EcoDataService', () => {
  let service: EcoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
