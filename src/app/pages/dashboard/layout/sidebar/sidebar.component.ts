import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faBullhorn, faRepeat, faChartBar, faCog, faTachometerAlt, faList, faEnvelope, faSms, faComments } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { SubmenuComponent } from '../../../../shared/submenu/submenu.component';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule, SubmenuComponent]
})
export class SidebarComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(faUserPlus, faBullhorn, faRepeat, faChartBar, faCog, faTachometerAlt, faList, faEnvelope, faSms, faComments);
  }

  handleCollapse() {

  }
}