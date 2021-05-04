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
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        Database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
      },
      {
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        Database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
      },
    ],
  },
  {
    env: 'QA',
    title: 'QA',
    subTitle: 'asdfasd',
    data: [
      {
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        Database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
        lastBuild: new Date().toDateString(),
      },
      {
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
        lastBuild: new Date().toDateString(),
      },
    ],
  },
  {
    env: 'PROD',
    title: 'PROD',
    subTitle: 'asdfasd',
    data: [
      {
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
        lastBuild: new Date().toDateString(),
      },
      {
        name: 'abcd',
        appUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        logUrl: [
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
          'https://wkpcmsdevapp.nmhsd.lcl/NMWorkPath/providerportal',
        ],
        database: {
          host: 'abacd',
          port: 1234,
          user: 'abacd',
          password: 'asdfasdfas',
        },
        lastBuild: new Date().toDateString(),
      },
    ],
  },
];
