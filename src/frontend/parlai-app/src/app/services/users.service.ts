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
  ) {
    // this.users.push(new User(1, 'abraamhaar', 'Arjuna Braamhaar',	'arjuna.braamhaar@minienm.nl', '06-14645024', 'motorrijtuigen,zonne-energie,innovatie,waterstof'));
    // this.users.push(new User(2, 'yhildebrand', 'Yamilla Hildebrand', 'yamilla.hildebrand@minienm.nl', '06-82288782', 'kleine luchtvaart,luchtvaart,schiphol,regionale luchthavens'));
    // this.users.push(new User(3,	'sspijker', 'Sien Spijker', 'sien.spijker@minienm.nl', '06-88465860', 'spoorwegen,verkeersveiligheid,verkeer,openbaarvervoer, taxi,bussen'));
    // this.users.push(new User(4,	'hdijksterhuis', 'Hong Dijksterhuis', 'hong.dijksterhuis@mineinm.nl', '06-80456658', 'goederenvervoer,vrachtwagenchauffeurs,verkeersveiligheid'));
    // this.users.push(new User(5, 'ykorenhof', 'Yassir Korenhof', 'yassir.korenhof@minienm.nl', '06-56678058', 'visserij,rijn,rivieren,waterkwaliteit,sluizen'));
  }

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
}
