import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BooleanService {

    private showBool: BehaviorSubject<boolean>;
    private showHelpBool: BehaviorSubject<boolean>;

    constructor() {
        this.showBool = new BehaviorSubject<boolean>(false);
        this.showHelpBool = new BehaviorSubject<boolean>(false);
    }

    public getBool(): Observable<boolean> {
        return this.showBool.asObservable();
    }

    public getHelpBool(): Observable<boolean> {
      return this.showHelpBool.asObservable();
    }

    public setBool(newValue: boolean): void {
        this.showBool.next(newValue);
    }

    public setHelpBool(newValue: boolean): void {
      this.showHelpBool.next(newValue);
    }
}
