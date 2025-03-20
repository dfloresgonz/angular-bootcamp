import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuardGuard } from './auth-guard.guard';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [authGuardGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
