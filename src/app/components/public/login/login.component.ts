import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Observable } from 'rxjs';
import { Empleados } from 'src/app/models/empleados';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: Empleados = {};


  constructor(private router: Router,
    public firebaseAuth: AngularFireAuth,
    public auht: AuthServiceService) { }

  ngOnInit() {
    this.auht.datos()
      .subscribe(data => {
        this.user = data;
        console.log(this.user.displayName);
        sessionStorage.setItem('datos', JSON.stringify(this.user));
      })

  }

  loginPersonal() {
    this.router.navigate(['/nuevoUsuario']);

  }

  // Ingreso con GitHub
  signInWithGithub() {
    this.auht.signInWithGithub()
      .then((res) => {
        this.router.navigate(['/perfiles'])
      })
      .catch((err) => console.log(err));
  }

  // Ingreso con Google
  async  loginWithGoogle() {
    this.auht.signInWithGoogle()
    .then((res) => {
      this.router.navigate(['/perfiles'])
    })
      .catch((err) => console.log(err));
  }

  solicitud(){
    this.auht.solicitud();
  }

}

