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
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { PerfilesComponent } from './components/auth/perfiles/perfiles.component';
import { AuthServiceService } from './services/auth-service.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Error404Component } from './components/shared/error404/error404.component';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaRequerimientosComponent } from './components/auth/requerimientos/lista-requerimientos/lista-requerimientos.component';

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
    ListaRequerimientosComponent,
  ],
  imports: [
    BrowserModule,
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
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
