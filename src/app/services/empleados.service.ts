import { Empleados } from './../models/empleados';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private itemDoc: AngularFirestoreDocument<Empleados>;
  empleados: Observable<any>;

  constructor(private db: AngularFirestore,
              private storage: AngularFireStorage) { }


  infoEmpleados() {
    this.empleados = this.db.collection('empleados').valueChanges();
    return this.empleados;
  }

  deleteEmpleado(infoEmpleado){
    return this.db.collection('empleados').doc(infoEmpleado).delete();
  }

  actualizarEmpleados(item: Empleados) {
    console.log('este', item);

    this.itemDoc = this.db.doc<Empleados>(`empleados/${item.id}`);
    this.empleados = this.itemDoc.valueChanges();
    this.itemDoc.update(item);
  }

}
