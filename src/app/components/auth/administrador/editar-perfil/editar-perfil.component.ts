import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { ActivatedRoute, Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import Swal from 'sweetalert2';
import { PerfilServiceService } from 'src/app/services/perfil-service.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  name: string;
  listaPaises: Array<Perfil>;
  perfil: Perfil = {};

  constructor(private activatedRoute: ActivatedRoute,
              private servicioPerfil: PerfilServiceService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.name = parametro.id;
        // console.log('este', parametro);


        this.servicioPerfil.infoPerfiles()
          .subscribe(parametro => {
            // console.log('este', parametro);

            this.listaPaises = parametro;
            this.perfil = this.listaPaises.find(data => data.name === this.name);
          });
      });
  }


  async editarPais() {
    console.log(this.perfil);

    if (this.perfil.name.length <= 0) {
      Swal.fire(
        '',
        `El perfil no puede ser vacio`,
        'warning'
      );
      this.perfil.name = null;
      return;
    }
    if (this.perfil.name === undefined) {
      Swal.fire(
        '',
        'El perfil no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.perfil.name.length <= 2) {
      Swal.fire(
        '',
        'El perfil no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.perfil.name) {
      this.servicioPerfil.actualizarPerfil(this.perfil);
      Swal.fire(
        '',
        'El perfil fue modificado con exito',
        'success'
      );
      this.router.navigate(['/administrador']);
    }
  }
}
