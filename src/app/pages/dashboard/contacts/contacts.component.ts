import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddNewContactComponent } from '../../../shared/add-new-contact/add-new-contact.component';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  imports: [ CommonModule, AddNewContactComponent]
})
export class ContactsComponent {
  isOpened = false;

  toggleAddNewContact() {
    this.isOpened = !this.isOpened;
  }
}