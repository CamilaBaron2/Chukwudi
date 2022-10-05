import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  personas:number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  suma(){
    this.personas++;
  }
  // personas = 1
  resta(){
    if(this.personas > 1){
      this.personas--;
    }
  }

}
