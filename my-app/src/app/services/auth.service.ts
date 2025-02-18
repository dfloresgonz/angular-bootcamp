import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  username: string;
  // Add more user properties if needed
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      // es correcto
      const user: User = { username };
      this.isAuthenticated.next(true);
      this.currentUser.next(user);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated.next(false);
    this.currentUser.next(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userStr = localStorage.getItem('user');

    if (isLoggedIn && userStr) {
      try {
        const user = JSON.parse(userStr);
        this.isAuthenticated.next(true);
        this.currentUser.next(user);
      } catch (e) {
        this.logout(); // Clear invalid data
      }
    } else {
      this.logout(); // Ensure clean state
    }
  }
}
