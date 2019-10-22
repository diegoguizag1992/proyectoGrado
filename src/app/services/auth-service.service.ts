import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { post } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { $ } from 'protractor';
import swal from 'sweetalert';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: Observable<firebase.User>;
  usuario: any = {};
  private github: Observable<firebase.User>;

  data: Observable<any>;
  dato = 'hola';
  datosLogin;
  attribute: [];
  private grupos: Usuario[];

  private userDetails: firebase.User = null;
  url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore,
    private http: HttpClient,
    private storage: LocalStorageService
  ) {
    this.user = firebaseAuth.authState;
  }


  datosEnviados() {
    this.grupos = this.storage.retrieve('datosLogin');
    // console.log(this.grupos);
    return this.grupos;
  }

  estadoLoginUusario() {
    firebase.auth().onAuthStateChanged(function (user) {     //Obtén el usuario con sesión activa
      if (user) {
        // console.log(user.displayName);
        return console.log(true);
      } else {
        return false;
      }
    });
  }



  datosUsuario() {
    return this.usuario;
  }

  datos() {
    return this.user;
  }

  //  login y logout Google

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(() => {
        window.location.assign('/JBolivar');
      }, (error) => {
        console.log(error);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut().then(() => {
      window.location.assign('/login');
    }, (error) => {
      console.log(error);
    });
  }

  //  Login GitHub
  signInWithGithub() {
    sessionStorage.setItem('datos', JSON.stringify(this.user));

    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  // Login email y password

  async login(email: string, password: string) {
    return await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(["./administrador"])
    }, (error) => {
      console.log(error);
    });
  }



  signInWithEmail(empleado) {
    console.log(empleado);
    let email;
    let password;
    email = empleado.email;
    // console.log(email);
    password = empleado.password;
    // console.log(pass);
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);

      var errorMessage = error.message;
      // ...
    });

  }

  menuRequerimientos(dato){
      console.log(dato);
      return dato;
  }

}

  // Inicio  usuario, contraseña
//   login(usuario) {
//     let email = usuario.email;
//     let password = usuario.password;
//     // console.log('Datos login personal', email, password);
//     return firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(function (user) {
//         console.log('Credenciales correctas, ¡bienvenido!');
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }

