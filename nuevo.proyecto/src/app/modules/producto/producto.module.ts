import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { VentasComponent } from './pages/ventas/ventas.component';
import { CompraComponent } from './pages/compra/compra.component';


@NgModule({
  declarations: [
    VentasComponent,
    CompraComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
