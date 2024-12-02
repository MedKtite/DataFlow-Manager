import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SelectTemplateComponent } from '../../../../shared/components/select-template/select-template.component';


@Component({
  selector: 'app-emails',
  imports: [CommonModule, FormsModule, RouterModule, SelectTemplateComponent],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.scss'
})
export class EmailsComponent {

  isOpened = false;

  toggleSelectTemplate() {
    this.isOpened = !this.isOpened;
  }
}
