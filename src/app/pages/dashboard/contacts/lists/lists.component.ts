import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lists',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  isOpened = false;

  toggleCreateNewList() {
    this.isOpened = !this.isOpened;
  }
}