import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CrudService {
  private productosCollection: AngularFirestoreCollection<Producto>

  constructor(private database: AngularFirestore) {
    this.productosCollection = database.collection('productos')
  }

  //CREAR productos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        //creamos numero identificativo para el producto en la BD
        const idProducto = this.database.createId()
        //asingamos ID creado al atributo idProducto de la interfaz Producto
        producto.idProducto

        const resultado = await this.productosCollection.doc(idProducto).set(producto)

        resolve(resultado)
      } catch (error) {
        reject(error)
      };
    })
  }
  //AGREGAR productos


// snapshot  => toma captura del estado de los datos
// pipe => tuberías que retornan un nuevo arreglo
//map => resguuarda la nueva informacion y la envia como un documento

  obtenerProducto(){
    return this.productosCollection.snapshotChanges().pipe(map(action => action.map(a => a.payload.doc.data())))
  }
  //EDITAR productos
  //ELIMINAR productos
}
