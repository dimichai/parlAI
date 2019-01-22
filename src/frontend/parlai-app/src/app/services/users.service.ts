import { Injectable, Inject } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../app.config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = this._config.baseUrl + '/users';
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
            response.map(entity => new User().fromJson(entity)
            )
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
}
