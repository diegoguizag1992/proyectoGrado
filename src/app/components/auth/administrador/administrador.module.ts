import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { TipoRequerimientoComponent } from './tipo-requerimiento/tipo-requerimiento.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearPerfilRoutingModule } from './crear-perfil/crear-perfil-routing.module';
import { EliminarTipoRequerimientoComponent } from './eliminar-tipo-requerimiento/eliminar-tipo-requerimiento.component';
import { EliminarPerfilComponent } from './eliminar-perfil/eliminar-perfil.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { ActualizarTipoRequerimientoComponent } from './actualizar-tipo-requerimiento/actualizar-tipo-requerimiento.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';


const heroesRoutes: Routes = [
  // { path: 'empleados',  component: EmpleadosComponent },
  // { path: 'tipoRequerimiento', component: TipoRequerimientoComponent },
  // { path: 'perfil', component: CrearPerfilComponent }
];


@NgModule({
  declarations: [
    CrearPerfilComponent,
    EmpleadosComponent,
    TipoRequerimientoComponent,
    EliminarTipoRequerimientoComponent,
    EliminarPerfilComponent,
    EliminarEmpleadoComponent,
    ActualizarTipoRequerimientoComponent,
    EditarPerfilComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    CrearPerfilRoutingModule
  ]
})
export class AdministradorModule { }
