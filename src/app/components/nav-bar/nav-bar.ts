import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  template: `
    <nav class="bg-gray-800 text-white p-4 flex justify-between items-center">
      <span class="text-xl font-semibold">MyApp</span>
      <div>
        <a *ngIf="!authenticated" class="mr-4" routerLink="/login">Login</a>
        <a *ngIf="!authenticated" class="mr-4" routerLink="/register"
          >Register</a
        >
        <a *ngIf="authenticated" class="mr-4" routerLink="/login">Dashboard</a>
        <button
          *ngIf="authenticated"
          (click)="logout()"
          class="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  `,
  styles: ``,
})
export class NavBar {
  get authenticated() {
    return this.authService.isAuthenticated();
  }

  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
