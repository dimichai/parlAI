import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service'
import { User } from '../models/user';

@Component({
  selector: 'app-contact-peers',
  templateUrl: './contact-peers.component.html',
  styleUrls: ['./contact-peers.component.scss']
})
export class ContactPeersComponent implements OnInit {

  users: User[];

  constructor(public uService: UsersService) { }

  ngOnInit() {
    this.users = this.uService.users;
  }
}
