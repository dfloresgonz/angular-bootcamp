import {  CurrencyPipe, DatePipe, LowerCasePipe, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

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

type Product = {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  isOferta: boolean;
  porcentajeOferta: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor,
    UpperCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,
    MiPipe,OfuscarPipe,PercentPipe],
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

  productos: Product[] = [
    {
      name: 'Laptop',
      price: 12000,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_826747-MLU77986349091_072024-O.webp`,
      description: 'Laptop gamer.....',
      isOferta: false,
      porcentajeOferta: 0.5,
    },
    {
      name: 'Audifonos',
      price: 100,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_826747-MLU77986349091_072024-O.webp`,
      description: 'audifonos...',
      isOferta: true,
      porcentajeOferta: 0.25,
    }
  ]
}
