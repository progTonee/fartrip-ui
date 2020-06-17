import { TestBed } from '@angular/core/testing';

import { AvailabeOrdersService } from './availabe-orders.service';

describe('AvailabeOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailabeOrdersService = TestBed.get(AvailabeOrdersService);
    expect(service).toBeTruthy();
  });
});
