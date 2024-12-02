// src/app/pages/dashboard/contacts/contacts.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddNewContactComponent } from '../../../shared/components/add-new-contact/add-new-contact.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [CommonModule, AddNewContactComponent, RouterModule]
})
export class ContactsComponent {
  isOpened = false;

  constructor(private router: Router) {}

  toggleAddNewContact() {
    this.isOpened = !this.isOpened;
  }

  isChildRouteActive(): boolean {
    return this.router.url.includes('/dashboard/contacts/lists');
  }
}