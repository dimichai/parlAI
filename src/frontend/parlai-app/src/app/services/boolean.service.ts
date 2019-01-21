import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BooleanService {

    private showBool: BehaviorSubject<boolean>;

    constructor() {
        this.showBool = new BehaviorSubject<boolean>(false);
    }

    public getBool(): Observable<boolean> {
        return this.showBool.asObservable();
    }

    public setBool(newValue: boolean): void {
        this.showBool.next(newValue);
    }
}
