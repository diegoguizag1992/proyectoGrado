import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  private itemDoc: AngularFirestoreDocument<any>;
  seguimiento: Observable<any>;

  constructor(private db: AngularFirestore,
    private storage: AngularFireStorage) { }


  informacionSeguimiento() {
    this.seguimiento = this.db.collection('estadoSeguimiento').valueChanges();
    return this.seguimiento;
  }

  public numeroSeguimiento() {
    return this.db.collection('seguimiento').doc('--stats--').snapshotChanges()
      .pipe(map(action => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
      );
    }

    crearSeguimiento(seguimiento) {
      seguimiento.id = this.db.createId();
      this.db
        .collection('seguimiento')
        .doc(seguimiento.id)
        .set(seguimiento);
    }
}
