import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Product = {
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  isOferta: boolean;
  porcentajeOferta: number;
}

@Component({
  selector: 'producto-card',
  imports: [NgFor, NgIf],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
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
