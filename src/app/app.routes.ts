
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CampaignsComponent } from './pages/dashboard/campaigns/campaigns.component';
import { ContactsComponent } from './pages/dashboard/contacts/contacts.component';
import { TemplateComponent } from './pages/dashboard/campaigns/emails/template/template.component';
import { ConversationsComponent } from './pages/dashboard/conversations/conversations.component';
import { WebScrapingComponent } from './pages/dashboard/web-scraping/web-scraping.component';
import { ReportComponent } from './pages/dashboard/report/report.component';
import { ListsComponent } from './pages/dashboard/contacts/lists/lists.component';
import { EmailsComponent } from './pages/dashboard/campaigns/emails/emails.component';
import { SmsComponent } from './pages/dashboard/campaigns/sms/sms.component';
import { WhatsappComponent } from './pages/dashboard/campaigns/whatsapp/whatsapp.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/home/about/about.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'contacts',
        component: ContactsComponent,
        children: [
          { path: 'lists', component: ListsComponent },
        ]
      },
      {
        path: 'campaigns',
        component: CampaignsComponent,
        children: [
          { path: 'emails', 
            component: EmailsComponent,
            children: [
              { path: 'template', 
                component: TemplateComponent,
                data: {
                  skipLayout: true
                }
              },
            ]
          },
          { path: 'sms', component: SmsComponent },
          { path: 'whatsapp', component: WhatsappComponent },
        ]
      },
      { path: 'conversation', component: ConversationsComponent },
      { path: 'web-scraping', component: WebScrapingComponent },
      { path: 'reports', component: ReportComponent },
    ]
  },
];