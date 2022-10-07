import { provideCloudflareLoader } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/app.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() productos: Producto[] = [];

  total: number = 0;

  suma (indice: number){
    this.productos[indice].cantidad++;
    this.calcularTotal();
  }

  resta (indice: number){
    if(this.productos[indice].cantidad > 1){
      this.productos[indice].cantidad--;
      this.calcularTotal();
    }
  }

  calcularTotal(){
    this.total = this.productos.reduce(
      (vAcumulado, objetoIteracionActual) => vAcumulado + (objetoIteracionActual.cantidad * objetoIteracionActual.price),
      0);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
