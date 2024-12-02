import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../../../../shared/components/star/star.component';
import { CreateNewListComponent } from '../../../../shared/components/create-new-list/create-new-list.component';


@Component({
  selector: 'app-lists',
  imports: [CommonModule, FormsModule, StarComponent, CreateNewListComponent ],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {
  isOpened = false;

  toggleCreateNewList() {
    this.isOpened = !this.isOpened;
  }
}