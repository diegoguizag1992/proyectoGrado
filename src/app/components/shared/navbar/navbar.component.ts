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
  attribute;
  private user: Empleados = {};
  private userDetails: firebase.User = null;
  registro = 'Ingrese a Jbolivar';
  usuario: Usuario = {};
  datosLocalStorage: any = {};
  verDos;
  datosUsuario: Observable<any>;
  clientesSubscripcion: Subscription;
  infoLoginHtml = true;
  infoLoginHtmlDos = true;

  constructor(public auth: AuthServiceService,
    private storage: LocalStorageService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {

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
        if (this.usuario === null) {
          this.registro = 'Ingrese a Jbolivar'
          this.ver = false;
        } else {
          console.log('Si hay datos', this.usuario);
          this.registro = 'A Ingresado a Jbolivar';
          this.ver = true;
          this.storage.store('datos', this.usuario);             // Guarda datos en local Storage
          this.attribute = this.storage.retrieve('datos');       // Trae los datos que estan almacenados en LocalStorage
          this.router.navigate(['/perfiles']);
        }
      })




    //   this.datosUsuario = this.auth.datos();
    //   this.datosUsuario.subscribe(
    //     (user) => {
    //       if (user) {
    //         this.userDetails = user;
    //         this.usuario.uid = user.uid;
    //         this.usuario.displayName = user.displayName;
    //         this.usuario.email = user.email;
    //         this.usuario.photoURL = user.photoURL;
    //       }
    //       else {
    //         this.userDetails = null;
    //       }

    //       if (Object.keys(this.usuario).length === 0) {
    //         this.registro = 'No esta registrado';
    //         console.log('No hay datos en el navbar');
    //       } else {
    //         this.ver = true;
    //         this.registro = 'A ingresado a JBolivar';
    //         this.attribute = this.usuario;
    //         console.log(this.attribute);
    //         this.storage.store('datosLogin', this.attribute);
    //       }
    //     })
    // }
  }



  // localStorage() {
  //     this.storage.store('datos', this.usuario);
  //     // console.log(this.usuario);

  //     this.attribute = this.storage.retrieve('datos');
  //     // console.log(this.attribute);

  //     if(Object.keys(this.attribute).length === 0) {
  //     // console.log('No esta registrado');
  //     return this.registro = 'No esta registrado';
  //   } else {
  //     // console.log('Si hay datos en el nabvar 2019');
  //     this.ver = true
  //     this.registro = 'A ingresado a JBolivar'
  //     // this.router.navigate(['/perfiles']);
  //     return this.attribute;
  //   }
  // }

  salir() {
    console.log('entro');
    this.ver = false;
    this.registro = 'Ingrese a JBolivar';
    this.infoLoginHtml = false;
    this.infoLoginHtmlDos = false;
    this.storage.clear('datos');
    this.router.navigate(['/login']);
    this.auth.logOut();
    if (this.attribute === null) {
      console.log('No hay datos en local');
    } else {

    }

  }

  salida() {
    this.auth.logout();
    this.router.navigate(['/login']);
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    // console.log('Destroy');
    // this.clientesSubscripcion.unsubscribe();
    console.log('NavbarComponent:OnDestroy');

  }

}


