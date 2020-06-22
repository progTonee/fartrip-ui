import { TestBed } from '@angular/core/testing';

import { EmployerCommentsService } from './employer-comments.service';

describe('EmployerCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployerCommentsService = TestBed.get(EmployerCommentsService);
    expect(service).toBeTruthy();
  });
});
