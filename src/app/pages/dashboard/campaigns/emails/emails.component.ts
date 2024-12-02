import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SelectTemplateComponent } from '../../../../shared/select-template/select-template.component';


@Component({
  selector: 'app-emails',
  imports: [CommonModule, FormsModule, RouterModule, SelectTemplateComponent],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {
  constructor(private router: Router) {   
  }
  isChildRouteActive(): boolean {
    return this.router.url.includes('/dashboard/campaigns/emails/template');
  }

  isOpened = false;

  toggleSelectTemplate() {
    this.isOpened = !this.isOpened;
  }
}
