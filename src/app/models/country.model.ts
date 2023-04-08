export interface CountryData {
    flag: string;
    name: string;
    population: number;
    region: string;
    subRegion: string;
    capital: string;
    currencies?: string[];
    languages?: string[];
    borderCountries: string[];
    topLevelDomain: string;
}

export interface CurrencyData {
    name: string;
    symbol: string;
}