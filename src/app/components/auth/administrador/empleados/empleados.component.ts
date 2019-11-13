import { Empleados } from './../../../../models/empleados';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import Swal from 'sweetalert2'
import { EmpleadosService } from 'src/app/services/empleados.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { Observable } from 'rxjs';
import { Seguimiento } from 'src/app/models/seguimiento';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleado: Empleados = {};
  // departamentos: any = {};
  departamentos: Observable<any[]>;
  listaDepartamentos: any[] = [];
  estado: Observable<any[]>;
  listaEstado: any[] = [];
  infoSeguimiento: Seguimiento = {};


  constructor(private router: Router,
    private serviceRequerimiento: RequerimientoServiceService,
    private servicioEmpleados: EmpleadosService,
    private servicioSeguimiento: SeguimientoService) { }

  ngOnInit() {
    this.departamentos = this.servicioEmpleados.informacionDepartamentos();
    this.departamentos.subscribe(data => {
      this.listaDepartamentos = data;
      console.log('este es', this.listaDepartamentos);

    });
  }

  crearEmpleado() {

    if (this.empleado.nombre == null || this.empleado.nombre.length == 0 || /^\s+$/.test(this.empleado.nombre)) {
      Swal.fire(
        '',
        `El nombre no puede ser vacio`,
        'warning'
      );
      this.empleado.correo = null;
      return;
    } else if (!(/([a-z\xc0-\xff]+)$/i.test(this.empleado.nombre))) {   // Valida que el input no contenga numeros
      Swal.fire(
        '',
        'El nombre no puede contener nùmeros',
        'warning'
      );
      return;
    }

    // Validación apellido
    if (this.empleado.apellido == null || this.empleado.apellido.length == 0 || /^\s+$/.test(this.empleado.apellido)) {
      Swal.fire(
        '',
        `El apellido no puede ser vacio`,
        'warning'
      );
      this.empleado.correo = null;
      return;
    } else if (!(/([a-z\xc0-\xff]+)$/i.test(this.empleado.apellido))) {   // Valida que el input no contenga numeros
      Swal.fire(
        '',
        'El apellido no puede contener nùmeros',
        'warning'
      );
      return;
    }

    // Validar departamentos
    if (this.empleado.departamento == null) {
      this.empleado.departamento = null;
      Swal.fire(
        '',
        `El departamento no puede ser nulo`,
        'warning'
      );
      return;
    }

    if (this.empleado.correo == null || this.empleado.correo.length == 0 || /^\s+$/.test(this.empleado.correo)) {
      Swal.fire(
        '',
        `El correo no puede ser vacio`,
        'warning'
      );
      this.empleado.correo = null;
      return;
    }
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!re.exec(this.empleado.correo)) {
      Swal.fire(
        '',
        `Ingrese un correo valido`,
        'warning'
      );
      this.empleado.correo = null;
      return;
    }

    if (this.empleado.nombre) {
        if(this.empleado.apellido){
        if(this.empleado.departamento){
           if(this.empleado.correo){

            this.empleado.nombreCompleto = `${this.empleado.nombre} ${this.empleado.apellido}`;
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
  atras() {
    this.router.navigate(["./administrador"])
  }

}
