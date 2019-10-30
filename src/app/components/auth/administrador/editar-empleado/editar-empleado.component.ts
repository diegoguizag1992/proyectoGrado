import { Empleados } from './../../../../models/empleados';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilServiceService } from 'src/app/services/perfil-service.service';
import Swal from 'sweetalert2';
import { EmpleadosService } from 'src/app/services/empleados.service';


@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  name: string;
  listaEmpleados: Array<Empleados>;
  empleados: Empleados = {};


  constructor(private activatedRoute: ActivatedRoute,
              private servicioEmpleados: EmpleadosService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.name = parametro.id;
        // console.log('este', parametro);


        this.servicioEmpleados.infoEmpleados()
          .subscribe(parametro => {
            // console.log('este', parametro);

            this.listaEmpleados = parametro;
            this.empleados = this.listaEmpleados.find(data => data.nombre === this.name);
          });
      });
  }


  async editarPais() {
    console.log(this.empleados);

    if (this.empleados.nombre.length <= 0) {
      Swal.fire(
        '',
        `El nombre no puede ser vacio`,
        'warning'
      );
      this.empleados.nombre = null;
      return;
    }
    if (this.empleados.nombre=== undefined) {
      Swal.fire(
        '',
        'El nombre no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.nombre.length <= 2) {
      Swal.fire(
        '',
        'El nombre no puede ser vacio',
        'info'
      );
      return;
    }
    //
    if (this.empleados.apellido.length <= 0) {
      Swal.fire(
        '',
        `El apellido no puede ser vacio`,
        'warning'
      );
      this.empleados.apellido = null;
      return;
    }
    if (this.empleados.apellido === undefined) {
      Swal.fire(
        '',
        'El apellido no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.apellido.length <= 2) {
      Swal.fire(
        '',
        'El apellido no puede ser vacio',
        'info'
      );
      return;
    }
    //
    if (this.empleados.departamento.length <= 0) {
      Swal.fire(
        '',
        `El departamento no puede ser vacio`,
        'warning'
      );
      this.empleados.departamento = null;
      return;
    }
    if (this.empleados.departamento === undefined) {
      Swal.fire(
        '',
        'El departamento no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.departamento.length <= 2) {
      Swal.fire(
        '',
        'El departamento no puede ser vacio',
        'info'
      );
      return;
    }
    //
    if (this.empleados.correo.length <= 0) {
      Swal.fire(
        '',
        `El correo no puede ser vacio`,
        'warning'
      );
      this.empleados.correo = null;
      return;
    }
    if (this.empleados.correo === undefined) {
      Swal.fire(
        '',
        'El correo no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.correo.length <= 2) {
      Swal.fire(
        '',
        'El correo no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.empleados.nombre) {
      if (this.empleados.apellido) {
        if (this.empleados.departamento) {
          if (this.empleados.correo) {

             this.servicioEmpleados.actualizarEmpleados(this.empleados);
             Swal.fire(
             '',
             'El perfil fue modificado con exito',
             'success'
            );
              this.router.navigate(['/administrador']);
         }
        }
      }
    }
  }
}
