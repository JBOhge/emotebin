import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { emoteList } from 'src/app/emoteData';
import { EmoteComponent } from '../emote/emote.component';
import { spyOnClass } from 'jasmine-es6-spies';

import { HomePageComponent } from './home-page.component';
import { EmoteServiceService } from 'src/app/services/emote-service.service';
import { of } from 'rxjs';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let emoteService: jasmine.SpyObj<EmoteServiceService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [AppModule],
      providers: [{provide: EmoteServiceService, useFactory: () => spyOnClass(EmoteServiceService)}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    emoteService = TestBed.get(EmoteServiceService);
    emoteService.getEmotes.and.returnValue(of(Object.values(emoteList).slice(0,12)))
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display emotes', () => {
    let emotes = Object.values(emoteList);
    component.emoteList = emotes;
    fixture.detectChanges();
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

  it('should call the emoteService onit and display emotes', ()=>{

    expect(emoteService.getEmotes).toHaveBeenCalledOnceWith(1,12);

    expect(fixture.nativeElement.querySelectorAll('[data-test="emote"]').length).toEqual(12);



  })
});
