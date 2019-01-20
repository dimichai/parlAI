import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  title = 'parlAI';

  selectedUser = User;
  users: User[] = [];

  constructor(private router: Router) {
    this.users.push(new User(1, 'abraamhaar', 'Arjuna Braamhaar',	'arjuna.braamhaar@minienm.nl', '06-14645024', 'motorrijtuigen,zonne-energie,innovatie,waterstof'));
    this.users.push(new User(2, 'yhildebrand', 'Yamilla Hildebrand', 'yamilla.hildebrand@minienm.nl', '06-82288782', 'kleine luchtvaart,luchtvaart,schiphol,regionale luchthavens'));
    this.users.push(new User(3,	'sspijker', 'Sien Spijker', 'sien.spijker@minienm.nl', '06-88465860', 'spoorwegen,verkeersveiligheid,verkeer,openbaarvervoer, taxi,bussen'));
    this.users.push(new User(4,	'hdijksterhuis', 'Hong Dijksterhuis', 'hong.dijksterhuis@mineinm.nl', '06-80456658', 'goederenvervoer,vrachtwagenchauffeurs,verkeersveiligheid'));
    this.users.push(new User(5, 'ykorenhof', 'Yassir Korenhof', 'yassir.korenhof@minienm.nl', '06-56678058', 'visserij,rijn,rivieren,waterkwaliteit,sluizen'));

    // this.selectedUser = this.users[0];
  }

  ngOnInit() {

  }

  userSelected(selected) {
    // this.selectedUser = selected;
    this.router.navigate(['upload'], {queryParams: { user: selected.real_name } });
  }
}
