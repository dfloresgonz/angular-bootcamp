import {  CurrencyPipe, NgFor, NgIf } from '@angular/common';
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
  imports: [NgFor, NgIf, CurrencyPipe],
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
      name: 'Laptop Lenovo V15 G4 Core I5 13420h 16gb 512gb 15.6 Español Color Iron Grey',
      price: 12300,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_881307-MLU77513227583_072024-O.webp`,
      description: 'Tarjeta gráfica: Intel UHD Graphics, Con pantalla táctil: No',
      isOferta: false,
      porcentajeOferta: 0.5,
    },
    {
      name: 'Audifonos Inalámbricos HUAWEI FreeBuds SE 2 Negro',
      price: 1500.3455,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_826747-MLU77986349091_072024-O.webp`,
      description: 'Carga rápida,Cuenta con bluetooth,Resistente al agua.',
      isOferta: true,
      porcentajeOferta: 0.12,
    },
    {
      name: 'Sony PlayStation 5 Slim 1tb Digital Color Blanco',
      price: 17456.97,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_841132-MLU77796368248_072024-O.webp`,
      description: 'Con tu Consola PlayStation 5 Slim tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.',
      isOferta: true,
      porcentajeOferta: 0.25,
    }
  ]
}
