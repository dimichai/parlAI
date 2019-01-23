import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user_id: BehaviorSubject<number>;
  private loggedInUser: User;
  private savedUser: string;

  users: User[] = [];

  constructor() {
    this.users.push(new User(1, 'abraamhaar', 'Arjuna Braamhaar',	'arjuna.braamhaar@minienm.nl', '06-14645024', 'motorrijtuigen,zonne-energie,innovatie,waterstof'));
    this.users.push(new User(2, 'yhildebrand', 'Yamilla Hildebrand', 'yamilla.hildebrand@minienm.nl', '06-82288782', 'kleine luchtvaart,luchtvaart,schiphol,regionale luchthavens'));
    this.users.push(new User(3,	'sspijker', 'Sien Spijker', 'sien.spijker@minienm.nl', '06-88465860', 'spoorwegen,verkeersveiligheid,verkeer,openbaarvervoer, taxi,bussen'));
    this.users.push(new User(4,	'hdijksterhuis', 'Hong Dijksterhuis', 'hong.dijksterhuis@mineinm.nl', '06-80456658', 'goederenvervoer,vrachtwagenchauffeurs,verkeersveiligheid'));
    this.users.push(new User(5, 'ykorenhof', 'Yassir Korenhof', 'yassir.korenhof@minienm.nl', '06-56678058', 'visserij,rijn,rivieren,waterkwaliteit,sluizen'));
  }

  // public getUser(): Observable<number> {
  //   return this.user_id.asObservable();
  // }

  public getUser() {
    return this.loggedInUser;
  }

  public setUser(userid: number): void {
    // this.loggedInUser.next(userid);
    this.loggedInUser = this.users.find(x => x.id === userid);
    localStorage.setItem('savedUser', this.loggedInUser.id.toString());
    console.log('Set userid to:',localStorage.getItem('savedUser'));
    console.log(this.loggedInUser.real_name);

    // this.loggedInUser.next(userid);
  }
}
