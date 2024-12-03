import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.create-new-list-container')) {
      this.onClose();
    }
  }

  handleSubmit() {
    // handle
  }
}
