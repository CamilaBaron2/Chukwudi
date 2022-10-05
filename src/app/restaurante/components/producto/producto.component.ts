import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/app.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() food!: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
