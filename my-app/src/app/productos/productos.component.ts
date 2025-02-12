import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {
  CurrencyPipe,
  NgClass,
  NgFor,
  NgIf,
  PercentPipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../services/producto.service';

export type Product = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
  isOferta: boolean;
  porcentajeOferta: number;
  finalPrice: number;
};

@Pipe({
  name: 'shorttext',
  standalone: true,
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string) {
    return `${value.substring(0, 50)}...`;
  }
}

@Component({
  selector: 'producto-card',
  imports: [
    NgFor,
    NgIf,
    CurrencyPipe,
    NgClass,
    PercentPipe,
    ShortTextPipe,
    RouterLink,
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService],
})
export class ProductosComponent implements OnInit {
  productos?: Product[];

  constructor(private readonly productoService: ProductoService) {}

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }
}
