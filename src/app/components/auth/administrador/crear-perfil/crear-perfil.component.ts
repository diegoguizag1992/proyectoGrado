import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Perfil } from 'src/app/models/perfil';
import Swal from 'sweetalert2'
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  informacionPerfil: Perfil = {};
  departamentos: Observable<any[]>;
  listaDepartamentos: any[] = [];

  constructor(private router: Router,
    private serviceRequerimiento: RequerimientoServiceService,
    private servicioEmpleados: EmpleadosService, ) { }

  ngOnInit() {
    this.departamentos = this.servicioEmpleados.informacionDepartamentos();
    this.departamentos.subscribe(data => {
      this.listaDepartamentos = data;
    })
  }

  crear() {

    if (this.informacionPerfil.name == null || this.informacionPerfil.name.length == 0 || /^\s+$/.test(this.informacionPerfil.name)) {
      Swal.fire(
        '',
        `El nombre del perfil no puede ser vacio`,
        'warning'
      );
      this.informacionPerfil.name = null;
      return;
    } else if (this.informacionPerfil.path == null || this.informacionPerfil.path.length == 0
              || /^\s+$/.test(this.informacionPerfil.path)) {
      Swal.fire(
        '',
        `La ruta del perfil no puede ser vacia`,
        'warning'
      );
      this.informacionPerfil.path = null;
      return;
    }

    if (this.informacionPerfil.name) {
      if (this.informacionPerfil.path) {
        this.serviceRequerimiento.crearPerfiles(this.informacionPerfil);
        Swal.fire(
          '',
          'El nombre del perfil fue creado con exito',
          'success'
        );
      }
      this.router.navigate(['/administrador']);
    }
  }

  atras() {
    this.router.navigate(["./administrador"])
  }
}
