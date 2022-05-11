import { TestBed } from '@angular/core/testing';
import { emoteList } from '../emoteData';
import { CartItem } from '../models/cart-item';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not return null', () => {
    expect(service.getCart()).toBeTruthy();
    expect(
      service.getCart().subscribe((res) => {
        return res;
      })
    ).toBeTruthy();
  });

  it('should update the cart when addToCart is called', () => {
    let cart = service.getCart();
    let item: CartItem = { id: 1, emote: emoteList[1], quantity: 1 };
    service.addToCart(item);
    let cartList!: CartItem[];
    cart.subscribe((res) => {
      cartList = res;
    });
    expect(cartList.length).toBe(1);
    service.addToCart(item);
    expect(cartList.length).toBe(2);
  });

  it('should remove item from cart when removeFromCart() is called correctly', () => {
    let cart = service.getCart();
    let item: CartItem = { id: 1, emote: emoteList[1], quantity: 10};
    service.addToCart(item);
    let item2: CartItem = {id:2, emote: emoteList[2], quantity: 2};
    service.addToCart(item2);
    service.removeFromCart(item);
    expect(cart.value.length).toBe(1);
  })

  it('should empty cart when clearCart() is called', ()=>{
    let cart = service.getCart();
    let item: CartItem = { id: 1, emote: emoteList[1], quantity: 1 };
    service.addToCart(item);
    expect(cart.value.length).toBe(1);
    service.clearCart();
    expect(cart.value.length).toBe(0);
  })

  it('should return the subtotal when getSubTotal() is called', ()=>{
    let cart = service.getCart();
    let item: CartItem = { id: 1, emote: emoteList[1], quantity: 10 };
    service.addToCart(item);
    let item2: CartItem = {id:2, emote: emoteList[2], quantity: 2};
    service.addToCart(item2);
    expect(service.getSubTotal()).toBe(1698);
  })

  it('should return the correct number of items in the cart when getCartItemCount() is called', () => {
    let cart = service.getCart();
    let item: CartItem = { id: 1, emote: emoteList[1], quantity: 10};
    service.addToCart(item);
    let item2: CartItem = {id:2, emote: emoteList[2], quantity: 2};
    service.addToCart(item2);
    expect(service.getCartItemCount()).toBe(12);
  })
});
