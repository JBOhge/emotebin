import { ComponentFixture, TestBed } from '@angular/core/testing';
import { emoteList } from 'src/app/emoteData';

import { EmoteComponent } from './emote.component';

describe('EmoteComponent', () => {
  let component: EmoteComponent;
  let fixture: ComponentFixture<EmoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoteComponent);
    component = fixture.componentInstance;
    component.emote = emoteList[1];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an emote image', () => {
    expect(
      fixture.nativeElement.querySelector('[data-test="emote-image"]')
    ).toBeTruthy();
  });

  it('should display emote info', () => {
    component.emote = emoteList[1];
    expect(
      fixture.nativeElement.querySelector('[data-test="emote-code"]').innerText
    ).toBe(emoteList[1].code);
    expect(
      fixture.nativeElement.querySelector('[data-test="emote-description"]')
        .innerText
    ).toBe(emoteList[1].description);
    expect(
      fixture.nativeElement.querySelector('[data-test="emote-price"]').innerText
    ).toContain(emoteList[1].price);
  });

  it('should have a add to cart button', () => {
    expect(fixture.nativeElement.querySelector('[data-test="add-to-cart-btn"]')).toBeTruthy();
  });
});
