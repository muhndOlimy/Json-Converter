import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent }, // Login page route
    { path: 'home', component: MainPageComponent, canActivate: [authGuard] }, // Home page protected by guard
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: '/login' } // Catch-all route for undefined paths
];
