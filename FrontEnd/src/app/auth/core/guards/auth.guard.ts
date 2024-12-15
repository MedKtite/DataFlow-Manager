import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override router: Router, protected override keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(async (resolve) => {
      if (!this.authenticated) {
        this.keycloakAngular.login();
        return;
      }

      const requiredRoles = ['user'];
      const hasRequiredRole = requiredRoles.every((role: string) => this.roles.includes(role));
      resolve(hasRequiredRole);
    });
  }

// Helper method to encapsulate role-checking logic
    private hasAllRoles(requiredRoles: string[]): boolean {
        return requiredRoles.every((role: string) => this.roles.includes(role));
    }
}
