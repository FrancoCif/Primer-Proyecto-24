import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { RegistroComponent } from './modules/autentificacion/pages/registro/registro.component';

const routes: Routes = [
  // {path:"", component:Componente1Component,},
  // {path:"componente2",component:Componente2Component},
  { path: "", component: InicioComponent },
  { path: "", loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule) },
  { path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule) },
  { path: "", loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
