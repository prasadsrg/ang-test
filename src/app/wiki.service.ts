import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor() {}

  getWikiLink() {
    return WikiLink;
  }

  getWikiEnv() {
    return WikiEnv;
  }
}

const WikiLink = [
  {
    title: 'CI CD',
    data: [
      { name: 'Jenkins', link: 'asdfas/adsfa/asdf' },
      { name: 'TeamCity', link: 'asdfas/adsfa/asdf' },
    ],
  },
  {
    title: 'CI CD 2',
    data: [
      { name: 'Jenkins', link: 'asdfas/adsfa/asdf' },
      { name: 'TeamCity', link: 'asdfas/adsfa/asdf' },
    ],
  },
];

const WikiEnv = [
  {
    env: 'DEV',
    title: 'abcd',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'asda' },
      { name: 'aaa', link: 'asda' },
    ],
  },
  {
    env: 'QA',
    title: 'abcd',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'asda' },
      { name: 'aaa', link: 'asda' },
    ],
  },
  {
    env: 'Prod',
    title: 'abcd',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'asda' },
      { name: 'aaa', link: 'asda' },
    ],
  },
];
