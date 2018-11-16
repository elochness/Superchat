import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user :User;
  constructor() { }

  public getUser():  User{
    return this.user;
  }

  public setUser(username: string): void{
    this.user = new User(username);
  }
}
