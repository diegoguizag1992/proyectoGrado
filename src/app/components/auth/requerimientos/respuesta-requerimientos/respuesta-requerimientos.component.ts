import { Fecha } from './../../../../models/fecha';
import { Requerimiento } from './../../../../models/requerimiento';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatTableDataSource } from '@angular/material/table';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, concat } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-respuesta-requerimientos',
  templateUrl: './respuesta-requerimientos.component.html',
  styleUrls: ['./respuesta-requerimientos.component.css']
})


export class RespuestaRequerimientosComponent implements OnInit {

  displayedColumns = ['Id', 'Nombre', 'Fecha', 'Requerimiento', 'Asunto', 'Observaciones', 'Adjunto', 'Responder'];
  dataSource: any = {};
  fecha = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  sortedData: any[];


  constructor(private storage: AngularFireStorage,
              private serviceRequerimiento: RequerimientoServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.renderDataTable();
  }

  highlight(){
    alert('Hola Mundo')
  }

  // traemos la informacion del requerimiento
  renderDataTable() {
    this.serviceRequerimiento.informacionRequerimientos()
      .subscribe(
        x => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = x;
          console.log(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
        },
        error => {
          console.log('There was an error while retrieving Usuarios!' + error);
        });
  }

  // metodo de filtrado del <mat-form-field>  input matInput
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Eliminar espacios en blanco
    filterValue = filterValue.toLowerCase(); // El origen de datos predeterminado es coincidencias en minúsculas
    this.dataSource.filter = filterValue;
  }

  atras(){
    this.router.navigate(['/requerimientos']);
  }

  responderRequerimiento(datos: Requerimiento){
   this.router.navigate(['/respuesta', datos]);
  }

}
