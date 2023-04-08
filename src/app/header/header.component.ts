import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,BrowserAnimationsModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  modeIcon:string  = "nightlight"
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    
  }

  toggleTheme() {

    this.themeService.toggleMode();
    this.isDarkMode = this.themeService.currentTheme === 'dark';

  }

}
