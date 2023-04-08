import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryData } from '../models/country.model';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiurl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<CountryData[]> {
    return this.http.get<CountryData[]>(this.apiurl).pipe(
      map(countries => countries.map((country: any) => ({
        flag: country.flags.png,
        name: country.name.official,
        population: country.population,
        region: country.region,
        subRegion: country.subRegion,
        capital: country.capital,
        nativeName: country.name.nativeName,
        topLevelDomain: country.altSpellings[0],
        ...country.currencies ? {currencies:Object.values(country?.currencies).map((currency: any) => currency?.name)}:{},
        ...country.languages ?{languages: Object.values(country.languages)} : {},
        borderCountries: country.borderCountries
      })))
    );
  }
}

