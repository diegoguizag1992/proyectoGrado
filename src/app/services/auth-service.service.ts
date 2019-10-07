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
    // this.user.subscribe(
    //   (user) => {
    //     // console.log(user);
    //     if (user) {
    //       this.userDetails = user;
    //       this.usuario.uid = user.uid;
    //       this.usuario.displayName = user.displayName;
    //       this.usuario.email = user.email;
    //       this.usuario.photoURL = user.photoURL;
    //     }
    //     else {
    //       this.userDetails = null;
    //     }
    //     if (user == null) {

    //     } else {
    //       this.storage.store('datosLogin', this.usuario);
    //       this.datosEnviados()
    //       this.router.navigate(['./perfiles'])
    //     }
    //   })
  }


  datosEnviados(){
    this.grupos = this.storage.retrieve('datosLogin');
    // console.log(this.grupos);
    return this.grupos;
  }

  // estadoLocalStorage(datosUsuario) {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {

  //       this.usuario = new BehaviorSubject<Usuario>(null);
  //       this.data = this.usuario.asObservable();
  //       this.data
  //         .subscribe(arg => {
  //           console.log(arg);

  //         });
  //       return console.log('No user is signed in.', false);
  //     }
  //   });
  // }

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

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
  }

  salirSessionGoogle() {
    // console.log('An error happened');

    firebase.auth().signOut().then(function () {
      console.log('Sign-out successful.');

      return 'Sign-out successful.'
    }).catch(function (error) {
      console.log('An error happened.');
    });
  }

  signInWithGithub() {
    sessionStorage.setItem('datos', JSON.stringify(this.user));

    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  logOut() {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      return firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }


  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.user = undefined;
    console.log(this.user);

    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

  // Ingreso con email y password
  signInWithEmail(empleado) {
    console.log(empleado.email);
    let email: any = {};
    let pass;
    email = empleado.email;
    console.log(email);
    pass = empleado.pass;
    // console.log(pass);

    //firebase.auth().tenantId = ‘TENANT_PROJECT_ID’;

    // All future sign-in request now include tenant ID.


    return firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(function (result) {
        console.log('bienvenido');

        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
      }).catch(function (error) {
        console.log('error');

      });
  }

  // Inicio  usuario, contraseña
  async login(empleado) {
    console.log(empleado);
    sessionStorage.setItem('datos', JSON.stringify(empleado));
    return await this.firebaseAuth.auth.signInWithEmailAndPassword(empleado.email, empleado.pass)
  }

}

