import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _roleSubject: Subject<any> = new BehaviorSubject(null);
  constructor() {
    let auth: any = { admin, user, read_only };
    sessionStorage.setItem('auth', JSON.stringify(auth));
  }

  roleEvent(): Observable<any> {
    return this._roleSubject.asObservable();
  }
  roleEmit(data: any): any {
    console.log(`role emit data :::: `, data);
    this.setSessionRole(data);
    this._roleSubject.next(data);
  }

  getSessionRole() {
    return localStorage.getItem('role') || 'admin';
  }
  setSessionRole(role: string) {
    localStorage.setItem('role', role);
  }

  getAuth(role: string, page: string) {
    let auth: any = sessionStorage.getItem('auth');
    auth = JSON.parse(auth);
    return auth[role][page];
  }
}

const admin = {
  person: {
    title: false,
    name: false,
    submit: false,
  },
  address: {
    address: false,
    country: false,
    submit: false,
  },
};

const user = {
  person: {
    title: false,
    name: true,
    submit: false,
  },
  address: {
    address: false,
    country: true,
    submit: false,
  },
};

const read_only = {
  person: {
    title: true,
    name: true,
    submit: true,
  },
  address: {
    address: true,
    country: true,
    submit: true,
  },
};
