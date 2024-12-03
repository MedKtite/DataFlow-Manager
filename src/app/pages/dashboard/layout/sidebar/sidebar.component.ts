import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmenuComponent } from '../../../../shared/submenu/submenu.component';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, RouterModule, SubmenuComponent]
})
export class SidebarComponent {
  isCollapsed = true;
  openSubmenu: string | null = null; 


  toggleSubmenu(submenu: string) {
    this.openSubmenu = this.openSubmenu === submenu ? null : submenu;
}

toggleSidebar() {
  this.isCollapsed = !this.isCollapsed;
}

}

