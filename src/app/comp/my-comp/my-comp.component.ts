import { Component, OnInit } from '@angular/core';
import {Persona} from'../../persona';
@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  persona = new Persona();

  constructor(){
  this.persona.setNombre("Gerardo");
  this.persona.setApellidos("Puerta");
  this.persona.setEdad(18);
  this.persona.setSexo("H");
  }


  ngOnInit(): void {
  }

}
