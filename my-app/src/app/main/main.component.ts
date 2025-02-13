import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProductosComponent } from '../productos/productos.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    MatTabsModule,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    MatButton,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  onLogout() {
    console.log('Logout');
  }
}
