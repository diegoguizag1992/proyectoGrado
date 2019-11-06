import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerfilServiceService } from 'src/app/services/perfil-service.service';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Requerimiento } from 'src/app/models/requerimiento';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  id: string;
  informacionRequerimientos: Array<Requerimiento>;
  requerimientos: Requerimiento = {};

  constructor(private router: Router,
              private servicioRequerimientos: RequerimientoServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.id = parametro.id;
        // console.log('este', parametro);


        this.servicioRequerimientos.informacionRequerimientos()
          .subscribe(parametro => {
            // console.log('este', parametro);

            this.informacionRequerimientos = parametro;
            this.requerimientos = this.informacionRequerimientos.find(data => data.id === this.id);
            console.log(this.requerimientos);

          });
      });
  }

  atras() {
    this.router.navigate(['/respuestaRequerimientos']);
  }

}
