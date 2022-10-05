import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/app.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() items: Producto[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
