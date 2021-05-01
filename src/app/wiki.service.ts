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
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
    ],
  },
  {
    id: 'cicd2',
    title: 'CI CD 2',
    data: [
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal 2',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal 2',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
    ],
  },
];

const WikiEnv = [
  {
    env: 'DEV',
    title: 'DEV',
    subTitle: 'asdfasd',
    data: [
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
    ],
  },
  {
    env: 'QA',
    title: 'QA',
    subTitle: 'asdfasd',
    data: [
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
    ],
  },
  {
    env: 'PROD',
    title: 'PROD',
    subTitle: 'asdfasd',
    data: [
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
      {
        name: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        link: 'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
      },
    ],
  },
];
