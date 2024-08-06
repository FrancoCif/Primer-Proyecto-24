import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  //Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  //Definimos formulario para los productos

  /*
  *  Atributos alfanumericos (string) se inicializan con 
  
       *Atributos numericos (number) se inicializan con 0
  */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  });

  constructor(public servicioCrud: CrudService) { }

  ngOninit(): void { 
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      };
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxto")
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un producto")
        })
    };

  }
}
