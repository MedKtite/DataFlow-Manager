import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  imports: [CommonModule]


})
export class CampaignsComponent {
  isDropDownVisible = false;

  toggleDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}