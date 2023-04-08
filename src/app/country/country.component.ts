import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryData, CurrencyData } from '../models/country.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  currencies: string[];
  @Input() country: CountryData;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.currencies = Object.values(this.country.currencies).map((currency) => currency.name);;
    //console.log(this.currencies);
  }
}
