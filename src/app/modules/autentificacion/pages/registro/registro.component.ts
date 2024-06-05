import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  hide = true;

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }


  coleccionusuarios: Usuario[] = [];

  registrar() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    //mostramos credenciales por consola
    this.coleccionusuarios.push(credenciales)
    console.log(credenciales)
    console.log(this.coleccionusuarios)
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
}

