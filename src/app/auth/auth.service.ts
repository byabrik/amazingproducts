import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor() { }

  getCurrentUser(): Observable<User> {
    return Observable.of(new User(1, 'First user'));
  }
}
