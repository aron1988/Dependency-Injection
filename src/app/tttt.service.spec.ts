import { TestBed } from '@angular/core/testing';

import { TtttService } from './tttt.service';

describe('TtttService', () => {
  let service: TtttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
