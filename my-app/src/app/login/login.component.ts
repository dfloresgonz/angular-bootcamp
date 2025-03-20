import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    const auth = await this.authService.login(this.username, this.password);
    if (auth) {
      this.router.navigate(['/main']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
