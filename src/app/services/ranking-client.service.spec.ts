import { TestBed } from '@angular/core/testing';

import { RankingClientService } from './ranking-client.service';

describe('RankingClientService', () => {
  let service: RankingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
