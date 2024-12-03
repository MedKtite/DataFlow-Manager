import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-select-template',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  constructor(private router: Router) {}

  handleSubmit() {
    this.router.navigate(['/dashboard/campaigns/emails/template']);
  }
}