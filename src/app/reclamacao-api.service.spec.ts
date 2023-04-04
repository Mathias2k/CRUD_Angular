import { TestBed } from '@angular/core/testing';

import { ReclamacaoApiService } from './reclamacao-api.service';

describe('ReclamacaoApiService', () => {
  let service: ReclamacaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamacaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
