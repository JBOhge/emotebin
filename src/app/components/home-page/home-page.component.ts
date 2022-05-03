import { Component, OnInit } from '@angular/core';
import { Emote } from 'src/app/models/emote';
import { EmoteServiceService } from 'src/app/services/emote-service.service';
import {PageEvent} from '@angular/material/paginator';
import { getTotalNumberEmotes } from 'src/app/emoteData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  emoteList!: Emote[];
  length = getTotalNumberEmotes();
  pageSize = 12;

  constructor(private emoteService: EmoteServiceService) {}

  ngOnInit(): void {
    this.emoteService.getEmotes(1, this.pageSize).subscribe((res) => {
      this.emoteList = res;
    });
    //this.emoteList = Object.values(emoteList);
  }

  getPosts(pageEvent: PageEvent){
    this.emoteService.getEmotes(pageEvent.pageIndex + 1, pageEvent.pageSize).subscribe((res) => {
      this.emoteList = res;
      window.scrollTo(0,0);
    });
  }

}
