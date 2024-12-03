import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-submenu',
  imports: [CommonModule, RouterModule], 
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {
  @Input() title!: string;
  @Input() link!: string;
  @Input() icon!: string; 
  @Input() isOpen = false;
  @Input() isCollapsed = false;
  @Output() toggle = new EventEmitter<void>();

  toggleSubmenu() {
    if (!this.isCollapsed) {
      this.toggle.emit();
    }
  }
}