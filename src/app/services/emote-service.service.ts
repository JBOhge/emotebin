import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getPage } from '../emoteData';

@Injectable({
  providedIn: 'root'
})
export class EmoteServiceService {

  constructor(private httpClient: HttpClient) { }


  getEmotes(pageNum:number, pageSize:number):Observable<any>{
    this.httpClient.get('PLACEHOLDER');
    return getPage(pageNum, pageSize);
  }
}
