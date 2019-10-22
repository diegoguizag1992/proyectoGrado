import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TipoRequerimientoComponent } from './tipo-requerimiento/tipo-requerimiento.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearPerfilRoutingModule } from './crear-perfil/crear-perfil-routing.module';


const heroesRoutes: Routes = [
  // { path: 'empleados',  component: EmpleadosComponent },
  // { path: 'tipoRequerimiento', component: TipoRequerimientoComponent },
  // { path: 'perfil', component: CrearPerfilComponent }
];


@NgModule({
  declarations: [
    CrearPerfilComponent,
    EmpleadosComponent,
    TipoRequerimientoComponent
  ],
  imports: [
    CrearPerfilRoutingModule
  ]
})
export class AdministradorModule { }
