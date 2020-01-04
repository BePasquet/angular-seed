import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {
  /**
   * Used to manipulate user state
   */
  private userState$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(
    null
  );

  /**
   * Reactive user state shared across application on sigleton service
   */
  get user$(): Observable<UserModel | null> {
    return this.userState$.asObservable();
  }

  /**
   * Gets user from server
   */
  public getUser(): Observable<UserModel> {
    return of(
      new UserModel({ name: 'Pedro', email: 'dummyemail@gmail.com' })
    ).pipe(tap((user: UserModel) => this.userState$.next(user)));
  }
}
