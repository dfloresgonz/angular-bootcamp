import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductDetailComponent } from './productos/product-detail/product-detail.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: ProductDetailComponent}
];
