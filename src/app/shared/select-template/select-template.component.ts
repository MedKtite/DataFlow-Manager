import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-template',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss']
})
export class SelectTemplateComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  handleSubmit() {
    // handle submit logic
  }
}