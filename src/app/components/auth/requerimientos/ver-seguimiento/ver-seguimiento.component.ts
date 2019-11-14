import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Seguimiento } from 'src/app/models/seguimiento';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-ver-seguimiento',
  templateUrl: './ver-seguimiento.component.html',
  styleUrls: ['./ver-seguimiento.component.css']
})
export class VerSeguimientoComponent implements OnInit {

  id: string;
  informacionSeguimiento: Array<Seguimiento>;
  seguimiento: Seguimiento = {};

  constructor(private router: Router,
    private servicioSeguimientos: SeguimientoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.id = parametro.id;
        // console.log('este', parametro);


        this.servicioSeguimientos.informacionSeguimiento()
          .subscribe(parametro => {
            // console.log('este', parametro);
            this.informacionSeguimiento = parametro;
            this.seguimiento = this.informacionSeguimiento.find(data => data.id === this.id);
            console.log(this.seguimiento);
          });
      });
  }
  atras() {
    this.router.navigate(['/listaSeguimientos']);
  }

}
