import { Perfil } from 'src/app/models/perfil';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {

  private itemDoc: AngularFirestoreDocument<Perfil>;
  requerimientos: Observable<any>;
  perfil: Observable<any>;

  constructor(private db: AngularFirestore,
              private storage: AngularFireStorage) { }


  // Perfiles. .
  infoPerfiles(){
    this.requerimientos = this.db.collection('perfiles').valueChanges();
    return this.requerimientos;
  }

  deletePerfil(infoPerfil){
    return this.db.collection('perfiles').doc(infoPerfil).delete();
  }

  actualizarPerfil(item: Perfil) {
    this.itemDoc = this.db.doc<Perfil>(`perfiles/${item.id}`);
    this.perfil = this.itemDoc.valueChanges();
    this.itemDoc.update(item);
  }


}
