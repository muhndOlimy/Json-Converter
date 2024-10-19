import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  // Check if the user is authenticated
  if (authService.isLoggedIn()) {
    return true; // Allow access
  } else {
    // Redirect to login if not authenticated
    router.navigate(['/login']);
    return false;
  }
};