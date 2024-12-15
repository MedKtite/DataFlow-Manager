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
import { ProfileComponent } from './user/profile/profile.component';
import { SettingComponent } from './user/setting/setting.component';
import { SecurityComponent } from './user/security/security.component';
import { PlansComponent } from './user/plans/plans.component';
import { SendersDomainsComponent } from './user/senders-domains/senders-domains.component';
import { SMTPAPIComponent } from './user/smtp-api/smtp-api.component';
import { PasswordComponent } from './user/password/password.component';
import { UserComponent } from './user/user/user.component';
import { AuthGuard } from './auth/core/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/sing-up/sing-up.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], // Protect the Dashboard page
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
          { path: 'emails', component: EmailsComponent,
            children: [
              { path: 'template', component: TemplateComponent, data: { skipLayout: true } },
            ]
          },
          { path: 'sms', component: SmsComponent },
          { path: 'whatsapp', component: WhatsappComponent },
        ]
      },
      { path: 'conversation', component: ConversationsComponent },
      { path: 'web-scraping', component: WebScrapingComponent },
      { path: 'reports', component: ReportComponent },
      {
        path: 'user',
        component: UserComponent,
        children: [
          { path: 'profile', component: ProfileComponent },
          { path: 'settings', component: SettingComponent },
          { path: 'security', component: SecurityComponent },
          { path: 'plans', component: PlansComponent },
          { path: 'senders-domains', component: SendersDomainsComponent },
          { path: 'smtp-api', component: SMTPAPIComponent },
          { path: 'password', component: PasswordComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];