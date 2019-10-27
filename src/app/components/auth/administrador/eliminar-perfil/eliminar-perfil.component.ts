import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Perfil } from 'src/app/models/perfil';
import { Observable } from 'rxjs';
import { PerfilServiceService } from 'src/app/services/perfil-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-eliminar-perfil',
  templateUrl: './eliminar-perfil.component.html',
  styleUrls: ['./eliminar-perfil.component.css']
})
export class EliminarPerfilComponent implements OnInit {

  infoPerfiles: Observable<any>;
  perfiles: Perfil = {};
  id: string;

  constructor(private router: Router,
              private servicePerfiles: PerfilServiceService) { }

  ngOnInit() {
    this.infoPerfiles = this.servicePerfiles.infoPerfiles();
    this.infoPerfiles.subscribe(data => {
      this.perfiles = data;
    });
  }

  editarPerfil(perfil: Perfil){
    this.id = perfil.name;
    this.router.navigate(['/editarPerfil', this.id]);
  }

  eliminar(perfil){
    this.servicePerfiles.deletePerfil(perfil.id)
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

}
