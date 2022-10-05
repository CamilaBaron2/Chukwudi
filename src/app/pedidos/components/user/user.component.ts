import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editar: boolean = false;
  direccion: string = '';
  choose: boolean =false;


  edit (){
    this.editar = !this.editar;
  }

  time (){
    this.choose = !this.choose
  }

  constructor() { }

  ngOnInit(): void {
  }

}
