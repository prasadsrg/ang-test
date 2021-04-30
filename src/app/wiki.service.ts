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
    id: 'cicd',
    title: 'CI CD',
    data: [
      { name: 'Jenkins', link: 'asdfas/adsfa/asdf' },
      { name: 'TeamCity', link: 'asdfas/adsfa/asdf' },
    ],
  },
  {
    id: 'cicd2',
    title: 'CI CD 2',
    data: [
      { name: 'Jenkins 2', link: 'asdfas/adsfa/asd' },
      { name: 'TeamCity 2', link: 'asdfas/adsfa/asd' },
    ],
  },
];

const WikiEnv = [
  {
    env: 'DEV',
    title: 'DEV',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'dev/asda' },
      { name: 'aaa', link: 'dev/asda' },
    ],
  },
  {
    env: 'QA',
    title: 'QA',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'qa/asda' },
      { name: 'aaa', link: 'qa/asda' },
    ],
  },
  {
    env: 'PROD',
    title: 'PROD',
    subTitle: 'asdfasd',
    data: [
      { name: 'aaa', link: 'prod/asda' },
      { name: 'aaa', link: 'prod/asda' },
    ],
  },
];
