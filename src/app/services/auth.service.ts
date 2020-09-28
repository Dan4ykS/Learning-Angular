import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected isAuth: boolean = JSON.parse(localStorage.getItem('auth'));

  constructor() {}

  logIn() {
    alert('Добро пожаловать!');
    this.isAuth = true;
    localStorage.setItem('auth', JSON.stringify(this.isAuth));
  }

  logOut() {
    alert('Досвидания!');
    this.isAuth = false;
    localStorage.setItem('auth', JSON.stringify(this.isAuth));
  }

  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
