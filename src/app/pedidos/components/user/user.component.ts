import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() totalProductos:number = 0;

  editar: boolean = false;
  direccion: string = '';


  edit (){
    this.editar = !this.editar;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
