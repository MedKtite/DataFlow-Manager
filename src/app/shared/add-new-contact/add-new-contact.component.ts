import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { EmailInputComponent } from '../emailnput/emailnput.component';

@Component({
  selector: 'app-add-new-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    PhoneNumberComponent,
    EmailInputComponent,
  ],
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent {
  @Output() close = new EventEmitter<void>();
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
      whatsApp: [''],
      address: [''],
    });
  }

  handleSubmit() {
    console.log(this.contactForm.value);
  }

  onClose() {
    this.close.emit();
  }
}