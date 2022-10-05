import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() items: Producto[] = [];

  constructor(private service : AppService) { }

  ngOnInit(): void {

  }

  mostrarProducto(producto: Producto){
    this.service.agregarCarrito(producto)
  }

}
