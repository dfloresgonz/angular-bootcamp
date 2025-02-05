import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'diego',
  imports: [NgFor],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Instagram';
  nombre: string = "Diego";
  imagen = `https://robohash.org/${this.nombre}`;
  colores: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
}
