import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private _router = inject(Router);

  // Mock users
  private users = [
    { email: 'admin@example.com', password: 'admin123', role: 'admin' },
    { email: 'user@example.com', password: 'user123', role: 'user' }
  ];

  // Login method
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      // Store token and user details in localStorage
      localStorage.setItem('token', btoa(JSON.stringify({ email, role: user.role })));
      return true;
    }
    return false;
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get user role
  getUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const userData = JSON.parse(atob(token));
      return userData.role;
    }
    return null;
  }

  getUsers(){
    return this.users;
  }
}
