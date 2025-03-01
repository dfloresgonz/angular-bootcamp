import { Component, OnInit, Pipe, PipeTransform, inject } from '@angular/core';
import {
  CurrencyPipe,
  NgClass,
  NgFor,
  NgIf,
  PercentPipe,
} from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {
  ApiProductsService,
  ProductApi,
} from '../services/api-products.service';
import { ApiStudentsService, Student } from '../services/api-students.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
    MatButtonModule,
  ],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos?: Product[];
  dialog = inject(MatDialog);
  productosApi: ProductApi[] = [];
  students: Student[] = [];

  constructor(
    private readonly productoService: ProductoService,
    private readonly apiProductsService: ApiProductsService,
    private readonly apiStudentsService: ApiStudentsService
  ) {}

  async ngOnInit() {
    console.log('...ngOnInit');
    const access_token = localStorage.getItem('access_token');
    console.log('access_token:', access_token);

    this.productos = await this.productoService.getProductos(access_token!);
    this.productosApi = await this.apiProductsService.getAllProducts();
    this.students = await this.apiStudentsService.getAllStudents();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      data: {
        animal: 'unicorn',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result:`, result);
    });
  }

  verProducto(product: Product) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: {
        ...product,
      },
    });
  }
}
