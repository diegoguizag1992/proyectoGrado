import { TipoRequerimientoComponent } from './tipo-requerimiento/tipo-requerimiento.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { Empleados } from 'src/app/models/empleados';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';



@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {
  name1;
  age;
  loading = false;
  buttionText = "Submit";
  trello = 'https://trello.com/b/pTCr1xCs';

  ver = true;
  endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';


  constructor(public afAuth: AngularFireAuth,
              private fun: AngularFireFunctions,
              private router: Router,
              private db: AngularFirestore,
              private servicioRequerimientos: RequerimientoServiceService,
              private http: HttpClient) { }

  ngOnInit() {
      this.servicioRequerimientos.datosPersonajes()
      .subscribe(data =>{
        console.log(data);

      })
  }

  tipoRequerimiento() {
    this.router.navigate(["/tipoRequerimiento"])
    this.ver = false;
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // sendEmail() {
  //     this.loading = true;
  //     this.buttionText = "Submiting...";
  //     let user = {
  //       name: this.nameFormControl.value,
  //       email: this.emailFormControl.value
  //     }
  //     this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
  //       data => {
  //         let res:any = data;
  //         console.log(
  //           `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
  //         );
  //       },
  //       err => {
  //         console.log(err);
  //         this.loading = false;
  //         this.buttionText = "Submit";
  //       },() => {
  //         this.loading = false;
  //         this.buttionText = "Submit";
  //       }
  //     );
  //   }
}

