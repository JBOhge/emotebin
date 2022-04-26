import { TestBed } from '@angular/core/testing';

import { EmoteServiceService } from './emote-service.service';

describe('EmoteServiceService', () => {
  let service: EmoteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
