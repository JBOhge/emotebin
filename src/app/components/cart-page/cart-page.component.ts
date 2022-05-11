import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart: BehaviorSubject<CartItem[]>;

  constructor(private cartService: CartService) { 
    this.cart = cartService.getCart();
  }

  ngOnInit(): void {
  }

  getSubTotal(){
    return this.cartService.getSubTotal();
  }

}
