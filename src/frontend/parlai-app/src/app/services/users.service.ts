import { Keyword } from './../models/keyword';
import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = this._config.baseUrl + '/users';
  private user_id: BehaviorSubject<number>;
  private loggedInUser: User;
  private savedUser: string;

  users: User[] = [];

  constructor(
    private _http: HttpClient,
    @Inject(APP_CONFIG) private _config
  ) {  }

  getUsers(): Observable<User[]> {
    return this._http
      .get(this.baseUrl)
      .pipe(
        map(
          (response: any) =>
            response.map(entity => {
              const user = new User().fromJson(entity);
              return user;
            })
        )
      );
  }

  getUsersByKeywords(keywords: Keyword[]): Observable<User[]> {
    const url = this._config.baseUrl + '/usersByKeywords';
    return this._http
      .post(url, keywords)
      .pipe(
        map(
          (response: any) =>
            response.map(entity => {
              const user = new User().fromJson(entity);
              return user;
            })
        )
      );
  }

  getUserById(id: string): Observable<User> {
    const url = this.baseUrl + '/' + id;

    return this._http
      .get(url)
      .pipe(
        map(
          (response: any) => new User().fromJson(response)
        )
      );
  }

  public getUser() {
    return this.loggedInUser;
  }

  public setUser(user: User): void {
    this.loggedInUser = user;
    localStorage.setItem('savedUser', this.loggedInUser.id.toString());
  }

  public setUserById(userid: number) {
    this.getUserById(userid.toString()).subscribe(
        user => {
          this.loggedInUser = user;
          localStorage.setItem('savedUser', this.loggedInUser.id.toString());
        }
      );
  }
}
