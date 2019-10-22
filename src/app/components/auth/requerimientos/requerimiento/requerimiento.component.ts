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


  constructor(private servicioRequerimiento: RequerimientoServiceService,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase) {

    // Listado tipo requerimientos
    this.tipoRequerimientos = this.servicioRequerimiento.informacionTipoRequerimiento();
    //  Listado empleados
    this.listaResponsable = this.servicioRequerimiento.informacionEmpleados();

    // Trae el numero de consecutivo de la base de datos
    this.item =  this.servicioRequerimiento.getCat();
    this.item.subscribe(data => {
      this.numero = data;
      this.requerimiento.numero = this.numero.numero;
      this.requerimiento.numero += 1;
      console.log(this.numero.numero);
    })

  }

  ngOnInit() {
  }

  crearRequerimiento() {




    // Crea registro de requerimiento en la base d edatos.
    this.servicioRequerimiento.crearRequerimiento(this.requerimiento);

    // Crea contador auto incrementable en firebasse
    const db = firebase.firestore();
    const increment = firebase.firestore.FieldValue.increment(1);
    // Document reference
    const storyRef = db.collection('requerimientos').doc('--stats--');
    // Update read count
    storyRef.update({ numero: increment });
    console.log(this.requerimiento);


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



