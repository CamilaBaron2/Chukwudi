import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-pedidos-shell',
  templateUrl: './pedidos-shell.component.html',
  styleUrls: ['./pedidos-shell.component.css']
})
export class PedidosShellComponent implements OnInit {

  productosAgregados:Producto[]=[]

  constructor(private service : AppService) { }

  ngOnInit(): void {
    this.productosAgregados = this.service.obtenerProductosOrden();
  }

}
