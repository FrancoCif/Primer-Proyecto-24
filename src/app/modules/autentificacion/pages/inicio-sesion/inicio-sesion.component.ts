import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {


  hide = true;

public datos: Usuario[];
constructor(){
  this.datos=[
    //ingresar datos manuales
  ]
}

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }


  coleccionusuarios: Usuario[] = [];

  comparar() {

    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    for(let i=0; i<=this.datos.length; i++){
      const credencial = this.datos[i]
      if(credencial !== (credenciales.uid && credenciales.nombre && credenciales.apellido && credenciales.email && credenciales.rol && credenciales.password) ){
        alert("Ingresaste")
        break
      }
      else{
        alert("no ingresaste")
      }
    }

}
}
