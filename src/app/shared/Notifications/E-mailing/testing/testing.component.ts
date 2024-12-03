import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  imports: [CommonModule],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  isVisible = false;

  handleClose() {
    this.isVisible = false;
  }
}
