import { TestBed } from '@angular/core/testing';

import { EmoteServiceService } from './emote-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { emoteList, getPage } from '../emoteData';

describe('EmoteServiceService', () => {
  let service: EmoteServiceService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(EmoteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a observable of emotes', () => {
    httpClient = TestBed.inject(HttpClient);

    spyOn(httpClient, 'get').and.returnValue(of(Object.values(emoteList)));

    const spy = jasmine.createSpy('spy');
    service.getEmotes(1,12).subscribe(spy);

    expect(spy).toHaveBeenCalledWith(Object.values(emoteList).slice(0, 12));
  })
});
