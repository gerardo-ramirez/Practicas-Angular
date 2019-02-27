import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
 
  name:string = "Alberto";
  age: number;
 address: {
   street: string;
   city: string;

};
hobbies: string[];
  constructor() { 
   
    this.age = 20;
    this.address = {
      street:"los andes" ,
      city:"quilmes"
    }
    this.hobbies = ["correr","saltar"];

  }

  posts=[];

  ngOnInit() {
  }

}
