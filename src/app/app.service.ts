import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria, Producto } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  productosOrden: Producto[] = [];

  constructor(private http: HttpClient) { }

  obtenerCategorias() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>('assets/categories.json');
  }

  obtenerProductos() : Observable<Producto[]>{
    return this.http.get<Producto[]>('assets/products.json');
  }

  obtenerProductosOrden() {
    return this.productosOrden;
  }

  agregarCarrito(producto:Producto){
    if(this.productosOrden.indexOf(producto) === -1){
      producto.cantidad = 1;
      this.productosOrden.push(producto);
    }
  }
}
