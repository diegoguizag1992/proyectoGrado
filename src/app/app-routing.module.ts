import { ListaRequerimientosComponent } from './components/auth/requerimientos/lista-requerimientos/lista-requerimientos.component';
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



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'nuevoUsuario', component: NuevoUsuarioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  { path: 'navbar:id', component: NavbarComponent},
  { path: 'JBolivar', component: PerfilComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'requerimientos', component: RequerimientosComponent},
  { path: 'error404', component: Error404Component},
  { path: 'requerimiento', component: RequerimientoComponent},
  { path: 'respuestaRequerimientos', component: RespuestaRequerimientosComponent},
  { path: 'listaRequerimientos', component: ListaRequerimientosComponent},
  { path: '**', redirectTo: 'error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
