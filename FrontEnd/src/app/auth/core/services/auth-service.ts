import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  router: any;

  constructor(private keycloakService: KeycloakService) {}

  async init() {
    await this.keycloakService.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'DataFlow',
        clientId: 'YBw1pBzxevy1XB7vxlwBKisDw4bAg0Ac'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      }
    });
  }
  login(email: string, password: string): Promise<any> {
    this.keycloakService.login().then(() => {
      this.router.navigate(['/dashboard']);
  });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          error: 'Invalid email or password.'
        });
      }, 2000);
    });
  }

  logout() {
    this.keycloakService.logout().then(() => {
      this.router.navigate(['/']);
    });
  };

  loginWithProvider(provider: string) {
    this.keycloakService.login({
      idpHint: provider
    });
  };
  
  isLoggedIn(): boolean {
    return this.keycloakService.isLoggedIn();
  }
}
