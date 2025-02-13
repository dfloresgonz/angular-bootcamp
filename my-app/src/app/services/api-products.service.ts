import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export type ProductApi = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private readonly apiUrl = 'https://fakestoreapi.com';
  constructor(private readonly http: HttpClient) {}

  getAllProducts() {
    return firstValueFrom(
      this.http.get<ProductApi[]>(`${this.apiUrl}/products`)
    );
  }
}
