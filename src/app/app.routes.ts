import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CampaignsComponent } from './pages/dashboard/campaigns/campaigns.component.spec';

export const routes: Routes = [
   {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'campaigns', component: CampaignsComponent },

      ]
    },
];
