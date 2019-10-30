import { Empleados } from './../../../models/empleados';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  empleados: any = {};

  constructor(private router: Router,
              private servicioAuth: AuthServiceService) { }

  ngOnInit() {
  }

  atras() {
    this.router.navigate(["./login"]);
  }

  loginEmpleado() {

    if (this.empleados.email == null) {
      this.empleados.email = null;
      Swal.fire(
        '',
        `El email no puede ser vacio`,
        'warning'
      );
      return;
    }
    if (this.empleados.email.length <= 0) {
      Swal.fire(
        '',
        `El email puede ser vacio`,
        'warning'
      );
      this.empleados.email= null;
      return;
    }
    if (this.empleados.email === undefined) {
      Swal.fire(
        '',
        'El email no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.password == null) {
      this.empleados.password = null;
      Swal.fire(
        '',
        `La contraseña no puede ser vacia`,
        'warning'
      );
      return;
    }
    if (this.empleados.password.length <= 0) {
      Swal.fire(
        '',
        `La contraseña no puede ser vacia`,
        'warning'
      );
      this.empleados.password = null;
      return;
    }
    if (this.empleados.password === undefined) {
      Swal.fire(
        '',
        'La contraseña no puede ser vacia',
        'info'
      );
      return;
    }
    if (this.empleados.email) {
    if (this.empleados.password) {
        this.servicioAuth.login(this.empleados.email, this.empleados.password);
      return;
    }
  }
  }
}

  // loginEmpleado() {
    // console.log(this.empleados);

    // this.empleados.email
    // console.log(this.empleados.pass);

    // if (this.empleados.pass === undefined) {
    //   Swal.fire(
    //     '',
    //     `Contraseña incorrecta`,
    //     'warning'
    //   );
    //   return;
    // }
    // if (this.empleados.pass === false) {
    //   Swal.fire(
    //     '',
    //     `Contraseña incorrecta`,
    //     'warning'
    //   );
    //   return;
    // }
    // if (this.empleados.pass <= 0) {
    //   Swal.fire(
    //     '',
    //     `Contraseña incorrecta`,
    //     'warning'
    //   );
    //   this.empleados.pass = null;
    //   return;
    // }
    // if (this.empleados.email === undefined) {
    //   Swal.fire(
    //     '',
    //     'El correo email no puede ser vacio',
    //     'info'
    //   );
    //   return;
    // }
    // if (this.empleados.email.length <= 11) {
    //   Swal.fire(
    //     '',
    //     'El nombre correo electronico no puede ser vacio',
    //     'info'
    //   );
    //   return;
    // }
  //   Swal.fire(
  //     'Bienvenido',
  //     'El usuario a ingresado con exito',
  //     'success'
  //   );
  //   this.router.navigate(['/perfiles']);
//   }
// }

  // let objeto = JSON.stringify(this.empleados);
  // console.log(objeto);

  // let resultado = JSON.parse(objeto);
  // console.log(resultado);

  // localStorage.setItem('Nombre', JSON.stringify(this.empleados));

  // var guardado = localStorage.getItem('Nombre');
  // console.log('objetoObtenido: ', JSON.parse(guardado));
