import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Perfil } from 'src/app/models/perfil';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  informacionPerfil: Perfil = {};
  constructor(private router: Router,
              private serviceRequerimiento: RequerimientoServiceService) { }

  ngOnInit() {
  }

  crear(){

    if (this.informacionPerfil.name == null) {
      this.informacionPerfil.name = null;
      Swal.fire(
        '',
        `El nombre del perfil no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.informacionPerfil.name.length <= 0) {
      Swal.fire(
        '',
        `El nombre del perfil no puede ser vacio`,
        'warning'
      );
      this.informacionPerfil.name = null;
      return;
    }
    if (this.informacionPerfil.name === undefined) {
      Swal.fire(
        '',
        'El nombre del perfil no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.informacionPerfil.path == null) {
      this.informacionPerfil.path = null;
      Swal.fire(
        '',
        `La ruta del perfil no puede ser nula`,
        'warning'
      );
      return;
    }
    if (this.informacionPerfil.path.length <= 0) {
      Swal.fire(
        '',
        `La ruta del perfil no puede ser vacia`,
        'warning'
      );
      this.informacionPerfil.path = null;
      return;
    }
    if (this.informacionPerfil.path === undefined) {
      Swal.fire(
        '',
        'La ruta del perfil no puede ser vacia',
        'info'
      );
      return;
    }
    if (this.informacionPerfil.name) {
      if(this.informacionPerfil.path){
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

  atras(){
    this.router.navigate(["./administrador"])
  }
}
