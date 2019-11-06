import { Requerimiento } from './../../../../models/requerimiento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { Seguimiento } from 'src/app/models/seguimiento';
import { SeguimientoService } from 'src/app/services/seguimiento.service';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/models/estado';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  empleados = {}
  id: string;
  infoRequerimientos: Array<Seguimiento>;
  estado: Observable<any[]>;
  listaResponsable: Observable<any[]>;
  item: Observable<any>;
  listaEstado: any[] = [];
  seguimiento: Requerimiento = {};
  listaEmpleados = {};
  infoSeguimiento: Seguimiento = {};
  numero: any = {};
  fecha;
  nombreArchivo;



  constructor(private activatedRoute: ActivatedRoute,
    private servicioRequerimiento: RequerimientoServiceService,
    private router: Router,
    private servicioSeguimiento: SeguimientoService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe(parametro => {
        this.id = parametro.id;


        this.servicioRequerimiento.informacionRequerimientos()
          .subscribe(parametro => {
            this.infoRequerimientos = parametro;
            this.seguimiento = this.infoRequerimientos.find(data => data.id === this.id);

            this.estado = this.servicioSeguimiento.informacionEstado();
            this.estado.subscribe(data => {
              this.listaEstado = data;
              console.log('este es ok:', this.listaEstado);
            });

            // Informacion empleados.
            this.listaResponsable = this.servicioRequerimiento.informacionEmpleados();
            this.listaResponsable.subscribe(data => {
              this.listaEmpleados = data;
            });
            this.infoSeguimiento.responsable = this.seguimiento.empleado;
            this.infoSeguimiento.tipoRequerimiento = this.seguimiento.name;
            this.infoSeguimiento.numeroRequerimiento = this.seguimiento.numero;
          });
      });

    // Trae el numero de consecutivo de la base de datos
    this.item = this.servicioSeguimiento.numeroSeguimiento();
    this.item.subscribe(data => {
      this.numero = data;

      this.infoSeguimiento.numeroSeguimiento = this.numero.numeroSeguimiento;
      this.infoSeguimiento.numeroSeguimiento += 1;
    });
  }

  atras(){
    this.router.navigate(['/requerimientos']);
  }

  crearRequerimiento() {

    if (this.infoSeguimiento.responsableSeguimiento == null) {
      this.infoSeguimiento.responsableSeguimiento = null;
      Swal.fire(
        '',
        `Debe seleccionar un responsable del seguimiento`,
        'warning'
      );
      return;
    }
    if (this.infoSeguimiento.responsableSeguimiento.length <= 0) {
      Swal.fire(
        '',
        `Debe seleccionar un responsable del seguimiento`,
        'warning'
      );
      this.infoSeguimiento.responsableSeguimiento = null;
      return;
    }
    if (this.infoSeguimiento.responsableSeguimiento === undefined) {
      Swal.fire(
        '',
        'Debe seleccionar un responsable del seguimiento',
        'info'
      );
      return;
    }
    //
    if (this.infoSeguimiento.asuntoSeguimiento == null) {
      this.infoSeguimiento.asuntoSeguimiento = null;
      Swal.fire(
        '',
        `El asunto del seguimiento no puede ser vacio`,
        'warning'
      );
      return;
    }
    if (this.infoSeguimiento.asuntoSeguimiento.length <= 0) {
      Swal.fire(
        '',
        `El asunto del seguimiento no puede ser vacio`,
        'warning'
      );
      this.infoSeguimiento.asuntoSeguimiento = null;
      return;
    }
    if (this.infoSeguimiento.asuntoSeguimiento === undefined) {
      Swal.fire(
        '',
        'El asunto del seguimiento no puede ser vacio',
        'info'
      );
      return;
    }
    //
    if (this.infoSeguimiento.estado == null) {
      this.infoSeguimiento.estado = null;
      Swal.fire(
        '',
        `El estado del seguimiento no puede ser vacio`,
        'warning'
      );
      return;
    }
    if (this.infoSeguimiento.estado.length <= 0) {
      Swal.fire(
        '',
        `El estado del seguimiento no puede ser vacio`,
        'warning'
      );
      this.infoSeguimiento.estado = null;
      return;
    }
    if (this.infoSeguimiento.estado === undefined) {
      Swal.fire(
        '',
        'El estado del seguimiento no puede ser vacio',
        'info'
      );
      return;
    }
    //
    if (this.infoSeguimiento.observaciones == null) {
      this.infoSeguimiento.observaciones = null;
      Swal.fire(
        '',
        `Las observaciones del seguimiento no pueden ser vacias`,
        'warning'
      );
      return;
    }
    if (this.infoSeguimiento.observaciones.length <= 0) {
      Swal.fire(
        '',
        `Las observaciones del seguimiento no pueden ser vacias`,
        'warning'
      );
      this.infoSeguimiento.observaciones = null;
      return;
    }
    if (this.infoSeguimiento.observaciones === undefined) {
      Swal.fire(
        '',
        'El asunto del seguimiento no pueden ser vacias',
        'info'
      );
      return;
    }
    if (this.infoSeguimiento.responsableSeguimiento) {
      if (this.infoSeguimiento.asuntoSeguimiento) {
          if (this.infoSeguimiento.estado) {
            if (this.infoSeguimiento.observaciones) {
              this.infoSeguimiento.fechaSeguimiento = `${this.fecha.day} / ${this.fecha.month} / ${this.fecha.year}`;
              this.servicioSeguimiento.crearSeguimiento(this.infoSeguimiento);
              // Crea contador auto incrementable en firebasse
              const db = firebase.firestore();
              const increment = firebase.firestore.FieldValue.increment(1);
              // Document reference
              const storyRef = db.collection('seguimiento').doc('--stats--');
              // Update read count
              storyRef.update({ numeroSeguimiento: increment });
              Swal.fire(
                '',
                'El requerimiento fue creado con exito',
                'success'
              );
            }
            this.router.navigate(['/requerimientos']);
          }
        }
      }
    }

  // Codigo adjuntar documentos en firebasse
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.nombreArchivo;
    const task = this.storage.upload(filePath, file).then(() => {
      const ref = this.storage.ref(filePath);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url; // for ts
        this.infoSeguimiento.docAdjunto = url // with this you can use it in the html
        // console.log(this.requerimiento);
      });
    });
  }
}
