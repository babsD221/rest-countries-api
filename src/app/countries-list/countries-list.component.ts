import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { CountriesService } from '../services/countries.service';
import { CountryData } from '../models/country.model';
import { CountryComponent } from '../country/country.component';
@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule,SearchFilterComponent, CountryComponent],
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent {

  source: CountryData[] =[];
  searchFilter?: string;
  regionFilter?: string;

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countriesService.getAllCountries().subscribe((countries: CountryData[]) =>{
      this.source = countries;
    } );

    console.log(this.countries);
  }
  onSearchText(filterValue: string) {
   this.searchFilter = filterValue;
  }

  filterByRegion (region: string) {
    this.regionFilter = region;
  }

  get countries(): CountryData[] {
    return this.source.filter((country: CountryData) => 
      this.searchFilter ? 
      country.name.toLowerCase().includes(this.searchFilter.toLowerCase()): 
      country).filter(country => this.regionFilter ? country.region === this.regionFilter : country);
  }
}
