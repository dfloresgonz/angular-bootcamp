import { Component, Pipe, PipeTransform } from '@angular/core';
import { ProductosComponent } from './productos/productos.component';

@Pipe({
  name: 'alrevezPipe',
  standalone: true,
})
export class MiPipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'ofucar',
  standalone: true,
})
export class OfuscarPipe implements PipeTransform {
  transform(value: string) {
    return `${value.substring(0,3)}***`
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Instagram';
  nombre: string = "dIeGo";
  imagen = `https://robohash.org/${this.nombre}`;
  colorez: string[] = ['rojo', 'verde', 'azul', 'amarillo'];
  hayNotificacion: boolean = true;
  colorBackground: string = 'purple';
  userRole: string = 'admin';
  today: Date = new Date();
  sueldo: number = 1234234289.35563;
  porcentaje: number = 0.56789;

  
}
