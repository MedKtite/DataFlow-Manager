import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-submenu',
  imports: [CommonModule, RouterModule, FontAwesomeModule], 
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {
  @Input() title!: string;
  @Input() link!: string;
  @Input() icon!: string;
  isOpen = false;
  toggleSubmenu() {
    this.isOpen = !this.isOpen;
}

}
