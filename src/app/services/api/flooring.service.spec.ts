import { TestBed } from '@angular/core/testing';

import { FlooringService } from './flooring.service';

describe('FlooringService', () => {
  let service: FlooringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlooringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
