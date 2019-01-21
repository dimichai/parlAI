import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BooleanService } from './services/boolean.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    showBtn: boolean;

    constructor(private router: Router,
    public boolService: BooleanService) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
        
        this.showBtn = false;
    }
    
    ngAfterViewInit() {
        this.boolService.getBool().subscribe(value => this.showBtn=value);
        console.log(this.showBtn);
    }
    
    homeClicked(){
        this.boolService.setBool(false);
        this.router.navigate(['start']);
    }
    
    composeClicked(){
        this.boolService.setBool(false);
        this.router.navigate(['question-compose']);
    }
}