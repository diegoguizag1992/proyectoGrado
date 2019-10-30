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

            this.estado = this.servicioSeguimiento.informacionSeguimiento();
            this.estado.subscribe(data => {
              this.listaEstado = data;
              console.log('este es:', this.listaEstado);
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
      console.log('este es:', this.numero);

      this.infoSeguimiento.numeroSeguimiento = this.numero.numeroSeguimiento;
      this.infoSeguimiento.numeroSeguimiento += 1;

    });


  }

  crearRequerimiento() {
    this.infoSeguimiento.fechaSeguimiento = `${this.fecha.day} / ${this.fecha.month} / ${this.fecha.year}`;
    this.servicioSeguimiento.crearSeguimiento(this.infoSeguimiento);
    // Crea contador auto incrementable en firebasse
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    // Document reference
    const storyRef = db.collection('seguimiento').doc('--stats--');
    // Update read count
    storyRef.update({ numeroSeguimiento: increment });
    console.log(this.infoSeguimiento);
    // console.log(this.seguimiento.numero);
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
      })
    })
  }
}
