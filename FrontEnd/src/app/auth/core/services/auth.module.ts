import { NgModule, APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthService } from './auth-service';

function initializeKeycloak(authService: AuthService) {
  return () => authService.init();
}

@NgModule({
  imports: [
    KeycloakAngularModule
  ],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [AuthService]
    }
  ]
})
export class AuthModule { }