import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Usuario } from './../../../models/usuario';
import { AuthServiceService } from './../../../services/auth-service.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { Router, ActivatedRoute } from '@angular/router';
import { Empleados } from 'src/app/models/empleados';
import { registerLocaleData } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  ver = false;
  perfil = false;
  juridica = false;
  attribute;
  private user: Empleados = {};
  private userDetails: firebase.User = null;
  registro = 'No hay usuario';
  usuario: Usuario = {};
  datosLocalStorage: any = {};
  verDos;
  datosUsuario: Observable<any>;
  clientesSubscripcion: Subscription;
  infoLoginHtml = true;
  infoLoginHtmlDos = true;
  @Input() registros: string;

  constructor(public auth: AuthServiceService,
    private storage: LocalStorageService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.registros);

    this.auth.datos()
      .subscribe(user => {
        if (user) {
          this.userDetails = user;
          this.usuario.uid = user.uid;
          this.usuario.displayName = user.displayName;
          this.usuario.email = user.email;
          this.usuario.photoURL = user.photoURL;
        }
        else {
          this.userDetails = null;
        }
        if (Object.keys(this.usuario).length === 0) {
          console.log('No hay datos');
          this.registro = 'Ingrese a Jbolivar';
          return this.ver = false;
        } else {
          console.log('Si hay datos', this.usuario);
          this.registro = 'A Ingresado a Jbolivar';
          this.storage.store('datos', this.usuario);             // Guarda datos en local Storage
          this.attribute = this.storage.retrieve('datos');       // Trae los datos que estan almacenados en LocalStorage
          this.router.navigate(['/JBolivar']);
          this.perfil = true;
          return this.ver = true;
        }
      })
  }

  salir() {
    this.storage.clear('datos');

    this.registro = 'Ingrese a JBolivar';
    this.usuario.displayName = '';
    this.usuario.email = '';
    // this.infoLoginHtml = false;
    // this.infoLoginHtmlDos = false;
    this.auth.logout();
    return this.ver = false;
  }


  ngOnDestroy() {
    // console.log('Destroy');
    // this.clientesSubscripcion.unsubscribe();
    console.log('NavbarComponent:OnDestroy');

  }

  perfiles() {
    this.perfil = false;
    this.router.navigate(['/perfiles']);
  }

}


