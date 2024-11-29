import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-new-list',
  imports: [CommonModule, FormsModule,],
  templateUrl: './create-new-list.component.html',
  styleUrl: './create-new-list.component.scss'
})
export class CreateNewListComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  handleSubmit() {
    // handle
  }
}
