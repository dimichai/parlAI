import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BooleanService } from './services/boolean.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ContactPeersComponent } from './contact-peers/contact-peers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    showBtn: boolean;

    constructor(private router: Router,
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
    }

    openBottomSheet(): void {
      this.bottomSheet.open(ContactPeersComponent);
    }

    ngAfterViewInit() {
        this.boolService.getBool().subscribe(value => this.showBtn = value);
    }

    homeClicked() {
        this.boolService.setBool(false);
        this.router.navigate(['start']);
    }

    composeClicked() {
        this.boolService.setBool(false);
        this.router.navigate(['question-compose']);
    }
}
