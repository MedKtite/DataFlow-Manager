import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  imports: [CommonModule, RouterModule] 
})
export class CampaignsComponent {
  constructor(private router: Router) {   
  }
  isChildRouteActive(): boolean {
    return this.router.url.includes('/dashboard/campaigns/emails');
  }

  isDropDownVisible = false;


  toggleDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }
}