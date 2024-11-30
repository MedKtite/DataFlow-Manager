import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [CommonModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  @Input() subscription: boolean = false;
  @Output() subscriptionChange = new EventEmitter<boolean>();

  toggleSubscription() {
    this.subscription = !this.subscription;
    this.subscriptionChange.emit(this.subscription);
    localStorage.setItem('starSubscription', JSON.stringify(this.subscription));
  }

}
