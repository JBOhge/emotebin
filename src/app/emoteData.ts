import { Observable, of } from 'rxjs';
import { Emote } from './models/emote';

export const emoteList = {
  1: {
    id: 1,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/25/static/light/3.0',
    code: 'Kappa',
    description: 'Sarcasm or wry humor. Kappa is our signature emote.',
    price: 123,
  },
  2: {
    id: 2,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/30259/static/light/3.0',
    code: 'HeyGuys',
    description:
      'A casual greeting. Used when joining chat, or when welcoming someone to a stream.',
    price: 234,
  },
  3: {
    id: 3,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/425618/static/light/3.0',
    code: 'LUL',
    description: 'Laughter. The emote version of Laugh Out Loud.',
    price: 345,
  },
  4: {
    id: 4,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/123171/static/light/3.0',
    code: 'CoolStoryBob',
    description:
      'A version of “Cool story, bro.” Used sarcastically when someone is saying something unimportant or babbling.',
    price: 456,
  },
  5: {
    id: 5,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/354/static/light/3.0',
    code: '4Head',
    description:
      'Laughter, but in a slightly mocking way. Often used as pity laughter when someone tells a lame/dad joke.',
    price: 567,
  },
  6: {
    id: 6,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/65/static/light/3.0',
    code: 'FrankerZ',
    description:
      'Used where there’s discussion about a dog or when a dog is shown on stream. Generally, dog stuff.',
    price: 7.89,
  },
  7: {
    id: 7,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/36/static/light/3.0',
    code: 'PJSalt',
    description:
      'When someone gets “salty” at their game or team. Often used in esports or pro gamers’ channels.',
    price: 157.99,
  },
  8: {
    id: 8,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/114836/static/light/3.0',
    code: 'Jebaited',
    description:
      'For when someone is “baited or tricked”. Often used in games where the player is surprised or lured into a trap.',
    price: 37.01,
  },
  9: {
    id: 9,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/58765/static/light/3.0',
    code: 'NotLikeThis',
    description:
      'Used to express dismay at an outcome, usually due to bad luck or a misplay.',
    price: 49.99,
  },
  10: {
    id: 10,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/28087/static/light/3.0',
    code: 'WutFace',
    description:
      'Used to express shock, disgust, or to note a loud, disruptive noise on stream.',
    price: 25.11,
  },
  11: {
    id: 11,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/81274/static/light/3.0',
    code: 'VoHiYo',
    description:
      'Used to celebrate anime, JRPGs, and everything otaku culture. Also used when something gets fixed.',
    price: 0.99,
  },
  12: {
    id: 12,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/64138/static/light/3.0',
    code: 'SeemsGood',
    description:
      'Casually agreeing that something is good or okay. Twitch’s own “thumbs up”.',
    price: 9.99,
  },
  13: {
    id: 13,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/245/static/light/3.0',
    code: 'ResidentSleeper',
    description:
      'For when there’s a lull in action, a boring cut scene or event, or when someone literally falls asleep.',
    price: 19.99,
  },
  14: {
    id: 14,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/360/static/light/3.0',
    code: 'FailFish',
    description: 'For when a Fail happens',
    price: 19.99,
  },
  15: {
    id: 15,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/115234/static/light/3.0',
    code: 'BatChest',
    description: 'OMG CHILLS',
    price: 999.99,
  },
  16: {
    id: 16,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/1904/static/light/3.0',
    code: 'BigBrother',
    description: 'You have NO MANA',
    price: 1.0,
  },
  17: {
    id: 17,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/86/static/light/3.0',
    code: 'BibleThump',
    description: 'This is so sad OMG',
    price: 10.67,
  },
  18: {
    id: 18,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/52/static/light/3.0',
    code: 'SMOrc',
    description: 'Why buy ward when ward no do damage',
    price: 36.84,
  },
  19: {
    id: 19,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/90076/static/light/3.0',
    code: 'StinkyCheese',
    description:
      "You cheated not only the game, but yourself You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference.",
    price: 0.01,
  },
  20: {
    id: 20,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/1902/static/light/3.0',
    code: 'Keepo',
    description: 'Kappa but with cat ears',
    price: 0.01,
  },
  21: {
    id: 21,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/111700/static/light/3.0',
    code: 'DatSheffy',
    description: 'Wow sehr cool!',
    price: 9.0,
  },
  22: {
    id: 22,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/33/static/light/3.0',
    code: 'DansGame',
    description: "You don't skip",
    price: 100.0,
  },
  23: {
    id: 23,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/74510/static/light/3.0',
    code: 'KappaClaus',
    description: 'Kappa but with a nice festive hat',
    price: 150.0,
  },
  24: {
    id: 24,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_e02650251d204198923de93a0c62f5f5/static/light/3.0',
    code: 'PotFriend',
    description: "It's your friend Iron Fist Alexander",
    price: 289.0,
  },
  25: {
    id: 25,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/22639/static/light/3.0',
    code: 'BabyRage',
    description: 'So UNLUCKY! Why am I never lucky!',
    price: 49.99,
  },
  26: {
    id: 26,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/62834/static/light/3.0',
    code: 'duDudu',
    description:
      'Song name: Darude - Sandstorm. duDududuDudu duDududuDudu duDududuDudu duDududuDudu duDududuDudu duDududuDudu ',
    price: 19.99,
  },
  27: {
    id: 27,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/47/static/light/3.0',
    code: 'PunchTrees',
    description: 'Hey checkout my dirt hut',
    price: 39.99,
  },
  28: {
    id: 28,
    url: 'https://static-cdn.jtvnw.net/emoticons/v2/160401/static/light/3.0',
    code: 'PunOko',
    description: 'Hey why would you do that!?',
    price: 85.79,
  },
};

export function getPage(pageNum: number, pageSize: number): Observable<any> {
  let start: number = (pageNum - 1) * pageSize;
  let end = start + pageSize;
  return of(Object.values(emoteList).slice(start, end));
}
