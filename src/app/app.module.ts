import { ActualizarTipoRequerimientoComponent } from './components/auth/administrador/actualizar-tipo-requerimiento/actualizar-tipo-requerimiento.component';
import { EliminarEmpleadoComponent } from './components/auth/administrador/eliminar-empleado/eliminar-empleado.component';
import { EliminarPerfilComponent } from './components/auth/administrador/eliminar-perfil/eliminar-perfil.component';
import { EliminarTipoRequerimientoComponent } from './components/auth/administrador/eliminar-tipo-requerimiento/eliminar-tipo-requerimiento.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { RequerimientosComponent } from './components/auth/requerimientos/requerimientos.component';
import { RespuestaRequerimientosComponent } from './components/auth/requerimientos/respuesta-requerimientos/respuesta-requerimientos.component';
import { RequerimientoComponent } from './components/auth/requerimientos/requerimiento/requerimiento.component';
import { PrincipalComponent } from './components/auth/principal/principal.component';
import { PerfilComponent } from './components/auth/perfiles/perfil/perfil.component';
import { NuevoUsuarioComponent } from './components/public/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/public/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {HttpClientModule, HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PerfilesComponent } from './components/auth/perfiles/perfiles.component';
import { AuthServiceService } from './services/auth-service.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Error404Component } from './components/shared/error404/error404.component';

import { MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule, MatProgressBarModule, MatPaginatorIntl } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministradorComponent } from './components/auth/administrador/administrador.component';
import { TipoRequerimientoComponent } from './components/auth/administrador/tipo-requerimiento/tipo-requerimiento.component';
import { EmpleadosComponent } from './components/auth/administrador/empleados/empleados.component';
import { CrearPerfilComponent } from './components/auth/administrador/crear-perfil/crear-perfil.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule } from "@angular/material";
import { PaginatorEspañol } from './components/auth/requerimientos/respuesta-requerimientos/paginator-español';
import { EditarPerfilComponent } from './components/auth/administrador/editar-perfil/editar-perfil.component';
import { EditarEmpleadoComponent } from './components/auth/administrador/editar-empleado/editar-empleado.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { RespuestaComponent } from './components/auth/requerimientos/respuesta/respuesta.component';
import { ListaSeguimientoComponent } from './components/auth/requerimientos/lista-seguimiento/lista-seguimiento.component';
import { VerComponent } from './components/auth/requerimientos/ver/ver.component';
import { VerSeguimientoComponent } from './components/auth/requerimientos/ver-seguimiento/ver-seguimiento.component';



@NgModule({
  declarations: [
    AppComponent,
    PerfilesComponent,
    SpinnerComponent,
    LoginComponent,
    NuevoUsuarioComponent,
    PerfilComponent,
    PrincipalComponent,
    RequerimientoComponent,
    RespuestaRequerimientosComponent,
    RequerimientosComponent,
    SpinnerComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    AdministradorComponent,
    TipoRequerimientoComponent,
    EmpleadosComponent,
    CrearPerfilComponent,
    EliminarTipoRequerimientoComponent,
    EliminarPerfilComponent,
    EliminarEmpleadoComponent,
    ActualizarTipoRequerimientoComponent,
    EditarPerfilComponent,
    EditarEmpleadoComponent,
    FechaPipe,
    RespuestaComponent,
    ListaSeguimientoComponent,
    VerComponent,
    VerSeguimientoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    AngularFireFunctionsModule
  ],
  providers: [ //{ provide: MatPaginatorIntl, useClass: PaginatorEspañol },
    AuthServiceService, MatDatepickerModule
  ],
  bootstrap: [AppComponent,
    ],
  exports: [
    RouterModule,

  ]})
export class AppModule { }





