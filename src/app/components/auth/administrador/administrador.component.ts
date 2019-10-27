import { TipoRequerimientoComponent } from './tipo-requerimiento/tipo-requerimiento.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { Empleados } from 'src/app/models/empleados';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {

  ver = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tipoRequerimiento(){
    this.router.navigate(["/tipoRequerimiento"])
    this.ver = false;
  }

}
