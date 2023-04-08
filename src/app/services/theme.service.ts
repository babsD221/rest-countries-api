import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



export enum Theme {
  dark = 'dark',
  light = 'light'
}
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private mode: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.light);

  constructor() { }

  get mode$() {
    return this.mode.asObservable();
  }

  get currentTheme() {
    return this.mode.value;
  }

  toggleMode() {
    console.log(this.mode.value);
    this.mode.value === Theme.light ? this.mode.next(Theme.dark) : this.mode.next(Theme.light);
  }
}
