import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<CartItem[]>([]);

  constructor() { }

  getCart():BehaviorSubject<CartItem[]>{
    return this.cart;
  }

  addToCart(item: CartItem){
    let cartList:CartItem[] = this.cart.value;
    cartList.push(item);
    this.cart.next(cartList);
  }

  removeFromCart(item: CartItem){
    let cartList:CartItem[] = this.cart.value;
    cartList = cartList.filter(oldItem => {
      return oldItem.id != item.id;
    });
    this.cart.next(cartList);
  }

  clearCart(){
    this.cart.next([]);
  }

  getSubTotal(){
    let total:number = 0;
    this.cart.value.forEach(item => {
      total += item.emote.price * item.quantity;
    }); 
    return total; 
  }

  getCartItemCount(){
    let count:number = 0;
    this.cart.value.forEach(item => {
      count += item.quantity;
    })
    return count;
  }
}
