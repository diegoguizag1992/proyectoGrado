import { Observable } from 'rxjs';
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
  tipoRequerimientos: Observable<any[]>;
  requerimientos: any[] = [];


  pattern = new RegExp('/^([0-9])*$/', 'i');
  numeros = "0123456789";


  constructor(private router: Router,
              private serviceRequerimiento: RequerimientoServiceService) { }

  ngOnInit() {
    this.tipoRequerimientos = this.serviceRequerimiento.informacionTipoRequerimiento();
        this.tipoRequerimientos.subscribe(data  => {
          this.requerimientos = data;
        })
  }

  async crear() {

    if (this.tipoRequerimiento.name == null || this.tipoRequerimiento.name.length == 0 || /^\s+$/.test(this.tipoRequerimiento.name)) {
      Swal.fire(
        '',
        `El Tipo de requerimeinto no puede ser vacio`,
        'warning'
      );
      this.tipoRequerimiento.name = null;
      return;
    }
    if (this.tipoRequerimiento.name) {
      this.serviceRequerimiento.crearTipoRequerimiento(this.tipoRequerimiento)
      Swal.fire(
        '',
        'El Tipo de requerimineto fue creado con exito',
        'success'
      );
      this.router.navigate(['/administrador']);
    }
  }

  atras() {
    this.router.navigate(["./administrador"])
  }

}
