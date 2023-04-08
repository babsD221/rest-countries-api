import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatSelectModule,MatFormFieldModule,DropdownComponent],
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  @Output() searchTxt = new EventEmitter<string>();
  @Output() filterChanged = new EventEmitter<string>();

  regionFilter: string ="";
  options: string[] = ['Africa','Americas','Asia','Europe','Oceania']
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  sendFilterText(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchTxt.emit(filterValue);
  }

  applyFilter(filterRegion: string) {
    this.filterChanged.emit(filterRegion);
  }
}
