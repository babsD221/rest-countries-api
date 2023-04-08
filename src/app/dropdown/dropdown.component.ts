import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() placeHolder: string;
  @Input() options: string[];

  @Input() value: string;

  @Output() valueChanged: EventEmitter<string> =new EventEmitter();

  showOptions: boolean = true;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  chooseOption(option: string) {
    this.placeHolder = option;
    this.toggleOptions();
    this.valueChanged.emit(option);
  }
}
