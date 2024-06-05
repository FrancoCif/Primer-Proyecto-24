import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {


  hide = true;
//definimos coleccion local de usuarios
  public datos: Usuario[];

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
  }

  // definimos la interfaz usuario
  usuarios: Usuario = {
    uid: 'primero',
    nombre: 'Franco',
    apellido: 'cifuentes',
    email: 'francocifuentes@gmail.com',
    rol: 'vis',
    password: '171518',
  }

  comparar() {
// guardamos la informacion ingresada por el usuario para comparar con los guardados
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    for (let i = 0; i <= this.datos.length; i++) {
      //guardamos en 'credencial'  los valores cargados previamente uno por uno
      const credencial: any = this.datos[i]
      if (credencial.uid === credenciales.uid && credencial.nombre === credenciales.nombre && credencial.apellido === credenciales.apellido && credencial.email === credenciales.email && credencial.rol === credenciales.rol && credencial.password === credenciales.password) {
        alert("Ingresaste")
        break
      }
      else {
        alert("no ingresaste")
        break
      }
    }

  }
}

