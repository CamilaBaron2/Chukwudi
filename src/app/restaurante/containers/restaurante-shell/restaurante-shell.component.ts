import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria, Producto } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-restaurante-shell',
  templateUrl: './restaurante-shell.component.html',
  styleUrls: ['./restaurante-shell.component.css']
})
export class RestauranteShellComponent implements OnInit {


  categorias: Categoria[] = [];
  productos: Producto[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.obtenerCategorias().subscribe( respuesta => {
      this.categorias = respuesta;
    });

    this.service.obtenerProductos().subscribe( respuesta => {
      this.productos = respuesta;
    });

  }
}
