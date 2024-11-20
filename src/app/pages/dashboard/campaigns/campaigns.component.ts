import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  standalone: true,
  imports: [CommonModule]

})
export class CampaignsComponent {
  isDropDownVisible = false;

  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faTrash, faChevronDown, faChevronRight);
  }

  toggleDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}