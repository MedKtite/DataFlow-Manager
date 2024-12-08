// src/app/web-scraping/web-scraping.component.ts
import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-web-scraping',
  templateUrl: './web-scraping.component.html',
  styleUrls: ['./web-scraping.component.scss']
})
export class WebScrapingComponent {
  faDotCircle = faDotCircle;

  toggleCheckbox(id: string): void {
    const checkbox = document.getElementById(id) as HTMLInputElement;
    checkbox.checked = !checkbox.checked;
  }
}