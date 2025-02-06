import {  NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgFor,NgIf,NgStyle,NgSwitch,NgSwitchCase,NgSwitchDefault],
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
  userRole: string = 'admin'
}
