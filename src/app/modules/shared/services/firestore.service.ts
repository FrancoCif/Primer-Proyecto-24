import { Injectable } from '@angular/core';

//Cloud Firestore -> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }
}
