import { Injectable } from '@angular/core';

//Cloud Firestore -> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*Definimos de froma privada la colección de usuarios para que no sea accesible en toda la aplicacion.
   Los definimos como una coleccion de Firestore que respete l estructura de nuestra interfaz Usuario. 
  */
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {

    /*
    UsuariosCollection va a definir una nueva coleccion usurios que estará en nuestra 
    base de datos
     */
    this.usuariosCollection = this.database.collection<Usuario>('Usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string) {
    /*
    
    creamos una nueva promesa junto a los metodos 
    resolve: promesa resuelta=> funcionaien
    reject: promesa rechazada -> no funciona
    */
    return new Promise(async (resolve, reject) => {

      try {
        usuario.uid = id

        const resultado = await this.usuariosCollection.doc(id).set(usuario);


        /*
        const resultado: coleccion de usuarios, envia como numero de documento el UID 
    
        y setea la informacion que ingresamos en el formulario de inicio
        */
        resolve(resultado)

      } catch (error) {
        //captura una falla y la vuelve un error
        reject(error)
      }
    }

    )
  }
}