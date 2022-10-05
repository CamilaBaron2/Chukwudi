import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/app.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input() items:Categoria[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
