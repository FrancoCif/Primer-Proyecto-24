import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';


import { AuthServiceService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';

import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  hide = true;
  //IMPORTACIONES DE INTERFAZ USUARIO
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }


  coleccionusuarios: Usuario[] = [];
  // FIN DE IMPORTACIONES


  constructor(
    public servicioAuth: AuthServiceService,
    public servicioRutas: Router,
    public servicioFirestore: FirestoreService,
  ) {



  }
  async registrar() {


    /*###################################Esto era el registro local
    
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/


    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }


    const res = this.servicioAuth.registrar(credenciales.email, credenciales.password)
//el metodo then es una promesa que devuelve el mismo valor si todo sale bien
    .then(res=>{
      alert('Se puo registrar con éxito')

//el etodo navigate nos redirecciona  aotra vista
      this.servicioRutas.navigate(['/inicio'])

    })

    //el metodo catch captura uuna falla y lo vuelve un error cuando la promesa sallga mal
.catch(res=>[
  alert('Hubo un error al registrar un nuevo usuario :(\n'+Error)
  ])
//constante uid captura el identificcador de la BD 
  const uid = await this.servicioAuth.obtenerUid()
// se le asigna el valor el atributo de la interfaz esta constante
this.usuarios.uid=uid

//sha356 es un algoritmo de hash que toma una entrada(la contraseña en este caso)
// y produce una cadena de caracteres, hexadecimal, que va a representar a su hash

this.usuarios.password=CryptoJS.SHA256(this.usuarios.password).toString();
//llamamos a la funcion guardUsuario()
this.guardarUsuario();

//llamamos a la funcion limpiarinputs para ejecutarla
    this.LimpiarInput()
  }

  LimpiarInput() {

    const Input = {
      // guardamos la informacion ingresada por el usuario para comparar con los guardados

      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''

    }
    alert('¡Te registraste con éxito!')

  }

  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
  
    .then(res => {
      console.log(this.usuarios)
    })
  
    .catch(err =>{
      console.log('error =>',err)
    })
  }
}

