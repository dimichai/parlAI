import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  title = 'parlAI';
  users: User[];

  constructor(private router: Router,
    public uService: UsersService) { }

  ngOnInit() {
    this.users = this.uService.users;
  }

  userSelected(selected) {
    this.router.navigate(['upload'], {queryParams: { userid: selected.id } });
  }
}
