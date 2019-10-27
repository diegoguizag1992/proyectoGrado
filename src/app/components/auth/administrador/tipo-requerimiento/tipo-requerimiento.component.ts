import { Component, OnInit } from '@angular/core';
import { TipoRequerimiento } from 'src/app/models/tipoRequerimiento';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-tipo-requerimiento',
  templateUrl: './tipo-requerimiento.component.html',
  styleUrls: ['./tipo-requerimiento.component.css']
})
export class TipoRequerimientoComponent implements OnInit {

  tipoRequerimiento: TipoRequerimiento = {};
  pattern = new RegExp('/^([0-9])*$/', 'i');
  numeros = "0123456789";


  constructor(private router: Router,
              private serviceRequerimiento: RequerimientoServiceService) { }

  ngOnInit() {
  }

  async crear() {

    if (this.tipoRequerimiento.name == null) {
      this.tipoRequerimiento.name = null;
      Swal.fire(
        '',
        `El nombre del tipo requerimineto no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.tipoRequerimiento.name.length <= 0) {
      Swal.fire(
        '',
        `El nombre del tipo requerimineto no puede ser vacio`,
        'warning'
      );
      this.tipoRequerimiento.name = null;
      return;
    }
    if (this.tipoRequerimiento.name === undefined) {
      Swal.fire(
        '',
        'El nombre del tipo requerimineto no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.tipoRequerimiento.name) {
      this.serviceRequerimiento.crearTipoRequerimiento(this.tipoRequerimiento)
      Swal.fire(
        '',
        'El nombre del tipo requerimineto fue creado con exito',
        'success'
      );
      this.router.navigate(['/administrador']);
    }
  }

  atras() {
    this.router.navigate(["./administrador"])
  }

}
