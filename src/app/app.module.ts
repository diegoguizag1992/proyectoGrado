import { RequerimientosComponent } from './components/auth/requerimientos/requerimientos.component';
import { RespuestaRequerimientosComponent } from './components/auth/requerimientos/respuesta-requerimientos/respuesta-requerimientos.component';
import { RequerimientoComponent } from './components/auth/requerimientos/requerimiento/requerimiento.component';
import { PrincipalComponent } from './components/auth/principal/principal.component';
import { PerfilComponent } from './components/auth/perfiles/perfil/perfil.component';
import { NuevoUsuarioComponent } from './components/public/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/public/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PerfilesComponent } from './components/auth/perfiles/perfiles.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
