import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { emoteList } from 'src/app/emoteData';
import { EmoteComponent } from '../emote/emote.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display emotes', () => {
    let emotes = Object.values(emoteList);
    component.emoteList = emotes;
    expect(fixture.nativeElement.querySelectorAll('[data-test="emote"]').length).toEqual(emotes.length);
  });

  it('should display different emotes', () => {
    let emotes = Object.values(emoteList);
    component.emoteList = emotes;
    fixture.detectChanges();
    let emoteElements = fixture.nativeElement.querySelectorAll('[data-test="emote"]');
    let firstEmote = emoteElements[0];
    let secondEmote = emoteElements[1];

    expect(
      firstEmote.querySelector('[data-test="emote-code"]').innerText
    ).toBe(emoteList[1].code);
    expect(
      firstEmote.querySelector('[data-test="emote-description"]')
        .innerText
    ).toBe(emoteList[1].description);
    expect(
      firstEmote.querySelector('[data-test="emote-price"]').innerText
    ).toContain(emoteList[1].price);

    expect(
      secondEmote.querySelector('[data-test="emote-code"]').innerText
    ).toBe(emoteList[2].code);
    expect(
      secondEmote.querySelector('[data-test="emote-description"]')
        .innerText
    ).toBe(emoteList[2].description);
    expect(
      secondEmote.querySelector('[data-test="emote-price"]').innerText
    ).toContain(emoteList[2].price);


  });
});
