import { Component } from '@angular/core';


//IMPORTAMOS INTERFAZ
import { Zapatilla } from 'src/app/models/zapatilla';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

//propiedad publica tipo array
public info: Zapatilla[]

constructor() {
  this.info = [
    {
      id: "",
      nombre: "Puma",
      modelo: "Suede XL x Pleasures",
      año: 2023,
      talle: 11,
      imagen: "https://highxtar.com/wp-content/uploads/2024/01/thumb-puma-x-pleasures-suede-xl-1440x1080.jpg",
      alt: "Puma Suede XL x Pleasures",
    },
    {
      id: "",
      nombre: "Adidas",
      modelo: "Campus 00s",
      año: 2023,
      talle: 11,
      imagen: "https://www.copncop.com/img/cms/adidas-campus-00s-red-copncop-blog.jpg",
      alt: "Campus 00s",
    },
     
  ]
}

}
