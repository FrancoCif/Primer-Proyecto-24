import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
    
    

  ],
  exports: [
    InicioSesionComponent,
    RegistroComponent,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule    

  ]
})
export class AutentificacionModule { }
