import { TestBed } from '@angular/core/testing';

import { FlashnewsapiService } from './flashnewsapi.service';

describe('FlashnewsapiService', () => {
  let service: FlashnewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashnewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
