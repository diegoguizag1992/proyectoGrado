import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { post } from 'selenium-webdriver/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { $ } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: Observable<firebase.User>;
  data: Observable<any>;

  private userDetails: firebase.User = null;
  url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword';

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router,
              private db: AngularFirestore,
              private http: HttpClient
              ) {

    this.user = firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  datos() {
    return this.user;
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
  }

  signInWithGithub() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }
  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }

  // Ingreso con email y password
  signInWithEmail(empleado) {
    console.log(empleado.email);
    let email:any = {};
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
  async login(empleado) {
      console.log(empleado);

    return await this.firebaseAuth.auth.signInWithEmailAndPassword(empleado.email, empleado.pass)
    .then(function (result) {
      console.log('bienvenido');

      // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
    }).catch(function (error) {
        console.log('error');

    });;
  }

  solicitud(){
    this.data = this.http.post(this.url, {
        email: 'diego.guizag@gmail.com',
        password: '1022981362*.*28032536',
      }
    );

    this.data
    .subscribe(data => {
      console.log(data);

    })


}

}

