import { Component, Input, OnInit } from '@angular/core';
import { Emote } from 'src/app/models/emote';
import { EmoteServiceService } from 'src/app/services/emote-service.service';
import { emoteList } from '../../emoteData';

@Component({
  selector: 'app-emote',
  templateUrl: './emote.component.html',
  styleUrls: ['./emote.component.css'],
})
export class EmoteComponent implements OnInit {
  
  @Input() emote:Emote = emoteList[3];

  constructor() {}

  ngOnInit(): void {
    
  }
}
