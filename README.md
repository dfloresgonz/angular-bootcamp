# angular-bootcamp - clase 4

```bash
# crear componentes home y about
ng g c home --standalone
ng g c about --standalone
```

```typescript
// en el app.routes.ts
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos', component: ProductosComponent}
];
```

```html
<!-- en el app component quitar del import el ProductosComponent
 y quitar del html tambien -->
<!-- y en el html agregar -->
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
  <a routerLink="/productos">Productos</a>
</nav>
<router-outlet></router-outlet>
```

### Crear detalle del producto

```bash
# agregar componente detalle producto
ng g c productos/product-detail --standalone
```

```typescript
// agregar la ruta
  { path: 'productos/:id', component: ProductDetailComponent }
```

```typescript
// en productos.component.ts agregar RouterLink
imports: [NgFor, NgIf, RouterLink],
```

```html
<!-- en productos.html agregar -->
 <a [routerLink]="['1']">Ver</a>
 ```

 ```typescript
 // en product-detail component
 productId!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }
```

```typescript
// en productos.component.ts
// agregar id:number al type
// agregar ids a cada objecto del array
```

```html
<!-- en productos.html agregar -->
 <a [routerLink]="[producto.id]">Ver</a>
 ```

  ```typescript
 // en product-detail component
 productId!: number;
 ```

 ```html
<!-- product detal html  -->
 <div>
  <h3>Product Detail</h3>
  <p>Viewing product ID: {{productId}}</p>
</div>
 ```

 ### Mandar todo el objeto

 ```bash
 ng generate service services/producto
 ```

 2. mover el array de productos al service

 3. agregar los metodos al service

 ```typescript
 getProductos() {
    return this.productos;
  }

  // Método para buscar un producto por su id
  getProductoPorId(id: number) {
    return this.productos.find((producto) => producto.id === id);
  }
```

4. en el productos.component

import al service
```typescript
providers: [ProductoService]

productos?: Product[];

constructor(
private productoService: ProductoService
) {}


ngOnInit() {
  this.productos = this.productoService.getProductos();
}
   ```

5. en el product detail

```typescript
providers: [ProductoService]

export class ProductDetailComponent implements OnInit {}


constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.product = this.productoService.getProductoPorId(this.productId);
      console.log(this.product);
    });
  }
```

En el html agregar campos para mostrar