import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { CrudService } from 'src/app/modules/admin/services/crud.service';


//IMPORTAMOS INTERFAZ
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

coleccionProducto2: Producto[]=[]
  constructor(public servicioCrud: CrudService ){}
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProducto2 = producto
    })
  }

}
