import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../productos.component';

@Component({
  selector: 'app-product-detail',
  providers: [ProductoService],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;
  product: Product | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.product = this.productoService.getProductoPorId(this.productId);
      console.log(this.product);
    });
  }
}
