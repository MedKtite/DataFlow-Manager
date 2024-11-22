import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserPlus, faBullhorn, faRepeat, faChartBar, faCog, faTachometerAlt, faList, faEnvelope, faSms, faComments } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

import { navData,  } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule,]
})
export class SidebarComponent {
  navData = navData;

  constructor(library: FaIconLibrary) {
    library.addIcons(faUserPlus, faBullhorn, faRepeat, faChartBar, faCog, faTachometerAlt, faList, faEnvelope, faSms, faComments);
  }

  handleCollapse() {
    // Implement collapse logic if needed
  }
}