import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
    private http: HttpClient
  ) {}

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

  async login(email: string, password: string): Promise<any> {
    try {
      await this.keycloakService.login();
      this.router.navigate(['/dashboard']);
    } catch (error) {
      return {
        error: 'Invalid email or password.'
      };
    }
  }

  async logout() {
    await this.keycloakService.logout();
    this.router.navigate(['/']);
  }

  loginWithProvider(provider: string) {
    this.keycloakService.login({
      idpHint: provider
    });
  }

  async isLoggedIn(): Promise<boolean> {
    return await this.keycloakService.isLoggedIn();
  }

  register(email: string, password: string, firstName: string, lastName: string): Promise<any> {
    return this.http.post('/api/register', {
      email,
      password,
      firstName,
      lastName
    }).toPromise();
  }
}
