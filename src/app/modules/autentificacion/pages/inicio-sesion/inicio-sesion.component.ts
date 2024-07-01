import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthServiceService } from '../../services/auth.service.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {


  hide = true;
  //definimos coleccion local de usuarios
  /*public datos: Usuario[];

  constructor() {
//damos diferentes valores para la interfaz
    this.datos = [
      {
        uid: 'primero',
        nombre: 'Franco',
        apellido: 'cifuentes',
        email: 'francocifuentes@gmail.com',
        rol: 'vis',
        password: '171518'

      },
      {
        uid: 'segundo',
        nombre: 'Pepe',
        apellido: 'ramos',
        email: 'peperamos@gmail.com',
        rol: 'vis',
        password: '189520'

      },
      {
        uid: 'tercero',
        nombre: 'Juan',
        apellido: 'Sanchez',
        email: 'Juansanchez@gmail.com',
        rol: 'vis',
        password: '176545'

      },

    ]
  }*/


  constructor(
    public servicioAuth: AuthServiceService,
    public ServicioFirestore: FirestoreService,
    public servicioRutas: Router,
  ) { }

  // definimos la interfaz usuario
  usuarios: Usuario = {
    uid: 'primero',
    nombre: 'Franco',
    apellido: 'cifuentes',
    email: 'francocifuentes@gmail.com',
    rol: 'vis',
    password: '171518',
  }

  async comparar() {
    // guardamos la informacion ingresada por el usuario para comparar con los guardados
    const credenciales = {

      email: this.usuarios.email,
      password: this.usuarios.password
    }
    try {

      //obrenemos
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email)
      if (!usuarioBD || usuarioBD.empty) {
        alert('Correo electronico no registrado')
        this.limpiarInput();
        return;
      }

      const usuarioDoc = usuarioBD.docs[0];
      const usuarioData = usuarioDoc.data() as Usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();


      if (hashedPassword !== usuarioData.password) {
        alert('contraseña incorrecta')
        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('Se pudo ingresar con exito')

        this.servicioRutas.navigate(['/inicio'])
      })

      .catch(err => {
        alert('Hubo un error al inciar sesion' + err)

        this.limpiarInput
      }
      )

    } catch(error){
      this.limpiarInput();
    }

    

  }
  limpiarInput() {
    const inputs = {
      password: this.usuarios.password = '',
      email: this.usuarios.email = ''
    }
  }


}

