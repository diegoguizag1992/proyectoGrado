import { TipoRequerimiento } from './../../../../models/tipoRequerimiento';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-eliminar-tipo-requerimiento',
  templateUrl: './eliminar-tipo-requerimiento.component.html',
  styleUrls: ['./eliminar-tipo-requerimiento.component.css']
})
export class EliminarTipoRequerimientoComponent implements OnInit {

  // user: Usuario = {};
  tipoRequerimiento: Observable<any>;
  infoRequerimiento: TipoRequerimiento = {};
  id: string;

  constructor(private servicioRequerimientos: RequerimientoServiceService,
              private router: Router) { }

  ngOnInit() {
    this.tipoRequerimiento = this.servicioRequerimientos.informacionTipoRequerimiento();
    this.tipoRequerimiento.subscribe(data => {
      this.infoRequerimiento = data;
      console.log(this.infoRequerimiento);
    })

  }

  editarTipoRequerimiento(requerimiento: TipoRequerimiento) {
    this.id = requerimiento.name;
    this.router.navigate(['/actualizarTipoReque', this.id]);
  }

  delete(requerimiento: TipoRequerimiento){

    this.servicioRequerimientos.deleteTipoRequerimiento(requerimiento.id)
    .then(
      res => {
        Swal.fire(
        '',
        'El tipo requerimineto fue eliminado con exito',
        'success'
        );
          this.router.navigate(['/administrador']);
      },
      err => {
        console.log(err);
      }
    )
  }

  atras(){
    this.router.navigate(["/administrador"]);
  }

}
