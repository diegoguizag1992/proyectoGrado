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


const routes: Routes = [
  { path: '**', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'requerimientos', component: RequerimientosComponent},
  { path: 'requerimiento', component: RequerimientoComponent},
  { path: 'respuestaRequerimientos', component: RespuestaRequerimientosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
