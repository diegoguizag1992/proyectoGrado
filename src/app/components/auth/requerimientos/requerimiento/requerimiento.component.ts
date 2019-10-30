import { Fecha } from './../../../../models/fecha';
import { Requerimiento } from './../../../../models/requerimiento';
import { TipoRequerimiento } from './../../../../models/tipoRequerimiento';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDatepickerInputEvent } from '@angular/material';
import { RequerimientoServiceService } from 'src/app/services/requerimiento-service.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

  requerimiento: Requerimiento = {};
  tipoRequerimientos: Observable<any[]>;
  listaResponsable: Observable<any[]>;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  listaEmpleados = {};
  nombreArchivo;
  item: Observable<any>;
  numero: any = {};
  fecha: any = {};
  model;
  nombre;

  constructor(private servicioRequerimiento: RequerimientoServiceService,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private router: Router) {

    // Listado tipo requerimientos
    this.tipoRequerimientos = this.servicioRequerimiento.informacionTipoRequerimiento();
    //  Listado empleados
    this.listaResponsable = this.servicioRequerimiento.informacionEmpleados();
    this.listaResponsable.subscribe(data => {
      this.listaEmpleados = data;
    })

    // Trae el numero de consecutivo de la base de datos
    this.item = this.servicioRequerimiento.getCat();
    this.item.subscribe(data => {
      this.numero = data;
      this.requerimiento.numero = this.numero.numero;
      this.requerimiento.numero += 1;
    })

  }

  ngOnInit() {
  }

  crearRequerimiento() {

    if (this.requerimiento.name == null) {
      this.requerimiento.name = null;
      Swal.fire(
        '',
        `El tipo de requerimiento no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.requerimiento.name.length <= 0) {
      Swal.fire(
        '',
        `El tipo de requerimiento no puede ser vacio`,
        'warning'
      );
      this.requerimiento.name = null;
      return;
    }
    if (this.requerimiento.name === undefined) {
      Swal.fire(
        '',
        'El tipo de requerimiento no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.requerimiento.empleado == null) {
      this.requerimiento.empleado = null;
      Swal.fire(
        '',
        `El nombre del responsable no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.requerimiento.empleado.length <= 0) {
      Swal.fire(
        '',
        `El nombre del responsable no puede ser vacio`,
        'warning'
      );
      this.requerimiento.empleado = null;
      return;
    }
    if (this.requerimiento.empleado === undefined) {
      Swal.fire(
        '',
        'El nombre del responsable no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.requerimiento.asunto == null) {
      this.requerimiento.asunto = null;
      Swal.fire(
        '',
        `El asunto del requerimiento no puede ser nulo`,
        'warning'
      );
      return;
    }
    if (this.requerimiento.asunto.length <= 0) {
      Swal.fire(
        '',
        `El asunto del requerimiento no puede ser vacio`,
        'warning'
      );
      this.requerimiento.asunto = null;
      return;
    }
    if (this.requerimiento.asunto === undefined) {
      Swal.fire(
        '',
        'El asunto del requerimineto no puede ser vacio',
        'info'
      );
      return;
    }
    if (this.requerimiento.observaciones == null) {
      this.requerimiento.observaciones = null;
      Swal.fire(
        '',
        `Las observaciones no puede ser nula`,
        'warning'
      );
      return;
    }
    if (this.requerimiento.observaciones.length <= 0) {
      Swal.fire(
        '',
        `Las observaciones no pueden ser vacias`,
        'warning'
      );
      this.requerimiento.observaciones = null;
      return;
    }
    if (this.requerimiento.observaciones === undefined) {
      Swal.fire(
        '',
        'Las observaciones no pueden ser vacias',
        'info'
      );
      return;
    }
    if (this.requerimiento.fecha == null) {
      this.requerimiento.fecha = null;
      Swal.fire(
        '',
        `La fecha no puede ser nula`,
        'warning'
      );
      return;
    }
    if (this.requerimiento.fecha.length <= 0) {
      Swal.fire(
        '',
        `La fecha no pueden ser vacia`,
        'warning'
      );
      this.requerimiento.fecha = null;
      return;
    }
    if (this.requerimiento.fecha === undefined) {
      Swal.fire(
        '',
        'La fecha no pueden ser vacia',
        'info'
      );
      return;
    }
    if (this.requerimiento.name) {
      if (this.requerimiento.empleado) {
        if (this.requerimiento.asunto) {
          if (this.requerimiento.observaciones) {
            if (this.requerimiento.fecha) {
            //Crea registro de requerimiento en la base d edatos.
                this.requerimiento.fecha = `${this.model.day} / ${this.model.month} / ${this.model.year}`;
                // var fecha: any = new Date();
                // fecha.toLocaleDateString("es-ES", this.model);
                // console.log(fecha.toLocaleDateString("es-ES", this.model));
                this.servicioRequerimiento.crearRequerimiento(this.requerimiento);
                // Crea contador auto incrementable en firebasse
                const db = firebase.firestore();
                const increment = firebase.firestore.FieldValue.increment(1);
                // Document reference
                const storyRef = db.collection('requerimientos').doc('--stats--');
                // Update read count
                storyRef.update({ numero: increment });
                console.log(this.requerimiento);
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
  }

  // Codigo adjuntar documentos en firebasse
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = this.nombreArchivo;
    const task = this.storage.upload(filePath, file).then(() => {
      const ref = this.storage.ref(filePath);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url; // for ts
        this.requerimiento.docAdjunto = url // with this you can use it in the html
        console.log(this.requerimiento);
      })
    })
  }
}



