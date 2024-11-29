import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  @Input() subscription: boolean = false;

}
