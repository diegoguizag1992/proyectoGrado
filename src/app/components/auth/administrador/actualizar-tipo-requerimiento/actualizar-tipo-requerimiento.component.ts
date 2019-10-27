import { TipoRequerimiento } from './../../../../models/tipoRequerimiento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-actualizar-tipo-requerimiento',
  templateUrl: './actualizar-tipo-requerimiento.component.html',
  styleUrls: ['./actualizar-tipo-requerimiento.component.css']
})
export class ActualizarTipoRequerimientoComponent implements OnInit {

  id: string;
  listaPaises: Array<TipoRequerimiento>;
  pais: TipoRequerimiento = {};

  constructor(private activatedRoute: ActivatedRoute,
              private servicioRequerimiento: RequerimientoServiceService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.id = parametro.id;

        this.servicioRequerimiento.informacionTipoRequerimiento()
          .subscribe(parametro => {
            this.listaPaises = parametro;
            this.pais = this.listaPaises.find(data => data.name === this.id);

            // this.id = +parametro.id;

          });
      });

  }

  async editarPais() {
    console.log(this.pais);

    if (this.pais.name.length <= 0) {
      Swal.fire(
        '',
        `El Tipo de requerimiento no puede ser vacio`,
        'warning'
      );
      this.pais.name = null;
      return;
    }
    if (this.pais.name === undefined) {
      Swal.fire(
        '',
        'El Tipo de requerimiento no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.pais.name.length <= 2) {
      Swal.fire(
        '',
        'El Tipo de requerimiento no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.pais.name) {
      this.servicioRequerimiento.actualizarTipoReuqerimiento(this.pais);
      Swal.fire(
        '',
        'El Tipo de requerimiento fue modificado con exito',
        'success'
      );
      this.router.navigate(['/administrador']);
    }
  }

}
