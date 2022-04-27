import { Component, OnInit } from '@angular/core';
import { emoteList } from 'src/app/emoteData';
import { Emote } from 'src/app/models/emote';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  emoteList!:Emote[];

  constructor() { }

  ngOnInit(): void {
    this.emoteList = Object.values(emoteList);
  }

}
