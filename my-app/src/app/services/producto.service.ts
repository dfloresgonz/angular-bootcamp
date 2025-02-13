import { Injectable } from '@angular/core';
import { Product } from '../productos/productos.component';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Product[] = [
    {
      id: 560,
      name: 'Laptop Lenovo V15 G4 Core I5 13420h 16gb 512gb 15.6 Español Color Iron Grey',
      price: 12300,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_881307-MLU77513227583_072024-O.webp`,
      description:
        'Tarjeta gráfica: Intel UHD Graphics, Con pantalla táctil: No',
      isOferta: false,
      porcentajeOferta: 0.5,
      finalPrice: 0,
    },
    {
      id: 894,
      name: 'Audifonos Inalámbricos HUAWEI FreeBuds SE 2 Negro',
      price: 1500.3455,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_826747-MLU77986349091_072024-O.webp`,
      description: 'Carga rápida,Cuenta con bluetooth,Resistente al agua.',
      isOferta: true,
      porcentajeOferta: 0.12,
      finalPrice: 0,
    },
    {
      id: 7489,
      name: 'Sony PlayStation 5 Slim 1tb Digital Color Blanco',
      price: 17456.97,
      imgUrl: `https://http2.mlstatic.com/D_NQ_NP_841132-MLU77796368248_072024-O.webp`,
      description:
        'Con tu Consola PlayStation 5 Slim tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.',
      isOferta: true,
      porcentajeOferta: 0.25,
      finalPrice: 0,
    },
  ];

  constructor() {
    this.calculateFinalPrice();
  }

  calculateFinalPrice() {
    this.productos = this.productos.map((p: Product) => {
      if (p.isOferta) {
        const descuento = p.price * p.porcentajeOferta;
        p.finalPrice = p.price - descuento;
        return p;
      }
      p.finalPrice = p.price;
      return p;
    });
  }

  getProductos() {
    this.calculateFinalPrice();
    return this.productos;
  }

  getProductoPorId(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }

  addProduct(product: Product) {
    this.productos.push(product);
    console.log('Products in service:', this.productos);
  }
}
