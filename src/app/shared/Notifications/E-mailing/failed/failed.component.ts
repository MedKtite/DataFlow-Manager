import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-failed',
  imports: [CommonModule],
  templateUrl: './failed.component.html',
  styleUrl: './failed.component.scss'
})
export class FailedComponent {
  isVisible = false;

  handleClose() {
    this.isVisible = false;
  }

}
