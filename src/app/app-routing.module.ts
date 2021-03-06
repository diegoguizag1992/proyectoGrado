import { VerComponent } from './components/auth/requerimientos/ver/ver.component';
import { TipoRequerimiento } from './models/tipoRequerimiento';
import { EliminarEmpleadoComponent } from './components/auth/administrador/eliminar-empleado/eliminar-empleado.component';
import { EliminarPerfilComponent } from './components/auth/administrador/eliminar-perfil/eliminar-perfil.component';
import { EliminarTipoRequerimientoComponent } from './components/auth/administrador/eliminar-tipo-requerimiento/eliminar-tipo-requerimiento.component';
import { CrearPerfilComponent } from './components/auth/administrador/crear-perfil/crear-perfil.component';
import { EmpleadosComponent } from './components/auth/administrador/empleados/empleados.component';
import { AdministradorComponent } from './components/auth/administrador/administrador.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { RespuestaRequerimientosComponent } from './components/auth/requerimientos/respuesta-requerimientos/respuesta-requerimientos.component';
import { RequerimientoComponent } from './components/auth/requerimientos/requerimiento/requerimiento.component';
import { RequerimientosComponent } from './components/auth/requerimientos/requerimientos.component';
import { PrincipalComponent } from './components/auth/principal/principal.component';
import { PerfilComponent } from './components/auth/perfiles/perfil/perfil.component';
import { NuevoUsuarioComponent } from './components/public/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/public/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './components/auth/perfiles/perfiles.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TipoRequerimientoComponent } from './components/auth/administrador/tipo-requerimiento/tipo-requerimiento.component';
import { ActualizarTipoRequerimientoComponent } from './components/auth/administrador/actualizar-tipo-requerimiento/actualizar-tipo-requerimiento.component';
import { EditarPerfilComponent } from './components/auth/administrador/editar-perfil/editar-perfil.component';
import { EditarEmpleadoComponent } from './components/auth/administrador/editar-empleado/editar-empleado.component';
import { RespuestaComponent } from './components/auth/requerimientos/respuesta/respuesta.component';
import { ListaSeguimientoComponent } from './components/auth/requerimientos/lista-seguimiento/lista-seguimiento.component';
import { VerSeguimientoComponent } from './components/auth/requerimientos/ver-seguimiento/ver-seguimiento.component';



const routes: Routes = [
  { path: '',  component: AdministradorComponent,
  children: [
   { path: 'perfil', component: CrearPerfilComponent },
   { path: 'empleados', component: EmpleadosComponent },
   { path: 'tipoRequerimiento', component: TipoRequerimientoComponent },
   { path: 'eliminarTipoRequerimiento', component: EliminarTipoRequerimientoComponent },
   { path: 'actualizarTipoReque/:id', component: ActualizarTipoRequerimientoComponent },
   { path: 'eliminarPerfil', component: EliminarPerfilComponent },
   { path: 'editarPerfil/:id', component: EditarPerfilComponent },
   { path: 'eliminarEmpleado', component: EliminarEmpleadoComponent },
   { path: 'editarEmpleado/:id', component: EditarEmpleadoComponent },
   { path: 'principal', component: PrincipalComponent }
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'JBolivar', component: PerfilComponent},
  // { path: 'principal', component: PrincipalComponent},
  { path: 'requerimientos', component: RequerimientosComponent},
  { path: 'error404', component: Error404Component},
  { path: 'requerimiento', component: RequerimientoComponent},
  { path: 'respuestaRequerimientos', component: RespuestaRequerimientosComponent},
  { path: 'administrador', component: AdministradorComponent},
  { path: 'listaSeguimientos', component: ListaSeguimientoComponent},
  { path: 'respuesta/:id', component: RespuestaComponent},
  { path: 'ver/:id', component: VerComponent},
  { path: 'verSeguimiento/:id', component: VerSeguimientoComponent},
  { path: '**', redirectTo: 'error404' },
  // { path: 'empleados', component: EmpleadosComponent},
  // { path: 'tipoRequerimiento', component: TipoRequerimientoComponent},
  // { path: 'perfil', component: CrearPerfilComponent},
  // { path: '', redirectTo: 'administrador', pathMatch: 'full' },
  // { path: 'administrador', loadChildren: () => import(`./components/auth/administrador/administrador.module`).then(m => m.AdministradorModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes,
      { enableTracing: true } // <-- debugging purposes only
      )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
