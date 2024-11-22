import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faCreditCard, faCog, faLocationArrow, faTools, faSignOutAlt, faChevronDown, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class DropdownComponent {
  isDropDownVisible = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faCreditCard, faCog, faLocationArrow, faTools, faSignOutAlt, faChevronDown, faShieldAlt);
  }

  toggleDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}