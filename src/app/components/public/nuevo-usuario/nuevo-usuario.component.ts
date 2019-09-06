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
    let objeto = JSON.stringify(this.empleados);
    console.log(objeto);

    let resultado = JSON.parse(objeto);
    console.log(resultado);



    localStorage.setItem('Nombre', JSON.stringify(this.empleados));

    var guardado = localStorage.getItem('Nombre');
    console.log('objetoObtenido: ', JSON.parse(guardado));



  }

}
