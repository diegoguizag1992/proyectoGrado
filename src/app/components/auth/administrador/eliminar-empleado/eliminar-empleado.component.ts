import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilServiceService } from 'src/app/services/perfil-service.service';
import { Observable } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-eliminar-empleado',
  templateUrl: './eliminar-empleado.component.html',
  styleUrls: ['./eliminar-empleado.component.css']
})
export class EliminarEmpleadoComponent implements OnInit {

  infoEmpleados: Observable<any>;
  empleados: Empleados = {};
  nombre: string;

  constructor(private router: Router,
              private serviceEmpleados: EmpleadosService) { }

  ngOnInit() {
    this.infoEmpleados = this.serviceEmpleados.infoEmpleados();
    this.infoEmpleados.subscribe(data => {
      this.empleados = data;
      console.log(this.empleados);
    })
  }

  editarEmpleado(perfil: Empleados){
    console.log(perfil);

    this.nombre = perfil.nombre;
    this.router.navigate(['/editarEmpleado', this.nombre]);
  }

  eliminar(perfil){
    console.log('Este',perfil.id);

    this.serviceEmpleados.deleteEmpleado(perfil.id)
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
