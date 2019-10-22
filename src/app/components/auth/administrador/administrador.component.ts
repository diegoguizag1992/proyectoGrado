import { TipoRequerimientoComponent } from './tipo-requerimiento/tipo-requerimiento.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { Empleados } from 'src/app/models/empleados';
import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
