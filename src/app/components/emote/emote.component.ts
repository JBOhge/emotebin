import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Emote } from 'src/app/models/emote';
import { CartService } from 'src/app/services/cart.service';
import { EmoteServiceService } from 'src/app/services/emote-service.service';
import { emoteList } from '../../emoteData';

@Component({
  selector: 'app-emote',
  templateUrl: './emote.component.html',
  styleUrls: ['./emote.component.css'],
})
export class EmoteComponent implements OnInit {
  @Input() emote: Emote = emoteList[3];

  constructor(private cartService:CartService) {}

  ngOnInit(): void {}

  addToCart() {
    let item:CartItem = {id:this.emote.id, emote:this.emote, quantity:1};
    this.cartService.addToCart(item);
  }
}
