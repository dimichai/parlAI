import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BooleanService } from './services/boolean.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ContactPeersComponent } from './contact-peers/contact-peers.component';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    showBtn: boolean;
    showHlp: boolean;
    savedUser: string;
    savedUserNum: number;

    constructor(private router: Router,
    public usersService: UsersService,
    public boolService: BooleanService,
    private bottomSheet: MatBottomSheet) { }

    ngOnInit() {
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
      this.showBtn = false;
      this.showHlp = false;

      this.savedUser = localStorage.getItem('savedUser');
      if (this.savedUser !== null) {
        localStorage.removeItem('savedUser');
        console.log('The savedUser is:',this.savedUser)
        this.savedUserNum = parseInt(this.savedUser);
        this.usersService.setUser(this.savedUserNum);
      }
    }

    openBottomSheet(): void {
      this.bottomSheet.open(ContactPeersComponent);
    }

    ngAfterViewInit() {
        this.boolService.getBool().subscribe(value => this.showBtn = value);
        console.log(this.showBtn);
        this.boolService.getHelpBool().subscribe(value => this.showHlp = value);
        console.log(this.showHlp);
    }

    homeClicked() {
        this.boolService.setBool(false);
        this.boolService.setHelpBool(false);
        this.router.navigate(['start']);
    }

    composeClicked() {
        this.boolService.setBool(false);
        this.router.navigate(['question-compose']);
    }
}
