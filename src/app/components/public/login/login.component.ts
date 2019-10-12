import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Observable } from 'rxjs';
import { Empleados } from 'src/app/models/empleados';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Empleados = {};
  private userDetails: firebase.User = null;

  @LocalStorage('datosLogin')
  datosLogin;

  constructor(private router: Router,
    public firebaseAuth: AngularFireAuth,
    public auht: AuthServiceService,
    private activatedRoutes: ActivatedRoute,
    private storage: LocalStorageService ) { }

  ngOnInit() {

  }
  // Login Personal
  loginPersonal() {
    this.router.navigate(['/nuevoUsuario']);
  }

  // Login con GitHub
  signInWithGithub() {
    this.auht.signInWithGithub()
    .then((res) => {
      // this.router.navigate(['/perfiles'])
    })
      .catch((err) => {
        sessionStorage.setItem('datos', JSON.stringify(this.user));

      })
  }

  // Login con Google
   loginWithGoogle() {
    this.auht.signInWithGoogle()
  }
}

