import {  NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf,NgStyle],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instagram';
  nombre: string = "Diego";
  imagen = `https://robohash.org/${this.nombre}`;
  colorez: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
  hayNotificacion: boolean = true;
  colorBackground: string = 'purple';
}
