import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBell, faUser, faCog, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from '../../../../shared/dropdown/dropdown.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, DropdownComponent] 
})
export class NavbarComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faUser, faCog, faBell, faChevronDown);
  }


}