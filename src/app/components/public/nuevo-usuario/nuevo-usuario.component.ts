import { Empleados } from './../../../models/empleados';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  empleados: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirigirLogin() {
    this.router.navigate(['/login']);
  }

  loginEmpleado() {
    console.log(this.empleados);

  }

}
