import { Empleados } from './../../../../models/empleados';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado: Empleados = {};
  constructor(private router: Router,
    private serviceRequerimiento: RequerimientoServiceService) { }

  ngOnInit() {
  }

  crearEmpleado(){

    if (this.empleado.nombre == null) {
      this.empleado.nombre= null;
      Swal.fire(
        '',
        `El nombre del empleado no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.empleado.nombre.length <= 0) {
      Swal.fire(
        '',
        `El nombre del empleado no puede ser vacio`,
        'warning'
      );
      this.empleado.nombre = null;
      return;
    }
    if (this.empleado.nombre === undefined) {
      Swal.fire(
        '',
        'El nombre del empleado no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleado.apellido == null) {
      this.empleado.apellido = null;
      Swal.fire(
        '',
        `El apellido no puede ser nula`,
        'warning'
      );
      return;
    }
    if (this.empleado.apellido.length <= 0) {
      Swal.fire(
        '',
        `El apellido no puede ser vacio`,
        'warning'
      );
      this.empleado.apellido = null;
      return;
    }
    if (this.empleado.apellido === undefined) {
      Swal.fire(
        '',
        'El apellido no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleado.correo == null) {
      this.empleado.correo = null;
      Swal.fire(
        '',
        `El correo no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.empleado.correo.length <= 0) {
      Swal.fire(
        '',
        `El correo no puede ser vacio`,
        'warning'
      );
      this.empleado.correo = null;
      return;
    }
    if (this.empleado.correo === undefined) {
      Swal.fire(
        '',
        'El correo no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleado.departamento == null) {
      this.empleado.departamento = null;
      Swal.fire(
        '',
        `El departamento no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.empleado.departamento.length <= 0) {
      Swal.fire(
        '',
        `El departamento no puede ser vacio`,
        'warning'
      );
      this.empleado.departamento = null;
      return;
    }
    if (this.empleado.departamento === undefined) {
      Swal.fire(
        '',
        'El departamento no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleado.nombre) {
        if(this.empleado.departamento){
        if(this.empleado.nombre){
           if(this.empleado.apellido){
            this.serviceRequerimiento.crearEmpleado(this.empleado);
            Swal.fire(
              '',
              'El empleado fue creado con exito',
              'success'
             );
           }
         }
      }
      this.router.navigate(['/administrador']);
    }
  }
  atras(){
    this.router.navigate(["./administrador"])
  }

}
