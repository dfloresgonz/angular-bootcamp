import { Injectable } from '@angular/core';
import { Product } from '../productos/productos.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  productos: Product[] = [];
  private readonly apiUrl = environment.backendUrl;

  constructor(private readonly http: HttpClient) {}

  async getProductos(access_token: string): Promise<Product[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });

    return firstValueFrom(
      this.http.get<Product[]>(`${this.apiUrl}/api/v1/products`, { headers })
    );
  }

  getProductoPorId(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }

  addProduct(product: Product) {
    this.productos.push(product);
    console.log('Products in service:', this.productos);
  }
}
