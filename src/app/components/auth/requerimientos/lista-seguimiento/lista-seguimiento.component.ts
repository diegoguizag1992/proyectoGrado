import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator} from '@angular/material';
import { Requerimiento } from 'src/app/models/requerimiento';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Seguimiento } from 'src/app/models/seguimiento';


@Component({
  selector: 'app-lista-seguimiento',
  templateUrl: './lista-seguimiento.component.html',
  styleUrls: ['./lista-seguimiento.component.css']
})
export class ListaSeguimientoComponent implements OnInit {

  displayedColumns = ['No. requerimiento', 'Nombre', 'responsable', 'Fecha', 'Requerimiento', 'Asunto', 'Observaciones', 'Adjunto', 'Estado', 'Responder'] //'Fecha', 'Requerimiento', 'Asunto', 'Observaciones', 'Adjunto', 'Responder'];
  dataSource: any = {};
  //dataSource: Observable<any[]>;

  fecha = {};
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  sortedData: any[];
  infoSeguimiento: Array<Seguimiento>;
  seguimiento: Seguimiento = {};
  numeroRequerimiento;


  constructor(private servicioSeguimiento: SeguimientoService,
              private storage: AngularFireStorage,
              private serviceRequerimiento: RequerimientoServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.servicioSeguimiento.informacionSeguimiento()
    .subscribe(parametro => {
      this.infoSeguimiento = parametro

    });
    this.renderDataTable();


  }

  renderDataTable() {
    this.servicioSeguimiento.informacionSeguimiento()
      .subscribe(
        x => {
          this.dataSource = new MatTableDataSource();
          this.dataSource.data = x;
          // console.log(this.dataSource.data);
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

  datosSeguimiento(datos: Seguimiento){

    this.router.navigate(['/verSeguimiento', datos]);
  }
}
