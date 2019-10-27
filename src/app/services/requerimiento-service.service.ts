import { TipoRequerimiento } from 'src/app/models/tipoRequerimiento';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequerimientoServiceService {

  private itemDoc: AngularFirestoreDocument<TipoRequerimiento>;
  tipoRequerimiento: Observable<TipoRequerimiento>;

  empleados: Observable<any>;
  listaRequerimientos: Observable<any>;
  requerimientos: Observable<any>;



  constructor(private db: AngularFirestore,
              private storage: AngularFireStorage) { }



  crearPerfiles(perfil){
    perfil.id = this.db.createId();
    this.db
      .collection('perfiles')
      .doc(perfil.id)
      .set(perfil);
  }

  crearEmpleado(usuario){
    usuario.id = this.db.createId();
    this.db
      .collection('empleados')
      .doc(usuario.id)
      .set(usuario);
  }

  informacionRequerimientos(){
    this.requerimientos = this.db.collection('requerimientos').valueChanges();
    return this.requerimientos;
  }

  informacionEmpleados(){
    this.empleados = this.db.collection('empleados').valueChanges();
    return this.empleados;
  }

  crearRequerimiento(requerimiento){
    requerimiento.id = this.db.createId();
    this.db
      .collection('requerimientos')
      .doc(requerimiento.id)
      .set(requerimiento);
  }

  // Tipo requerimientos
  crearTipoRequerimiento(tipoRequerimiento){
    tipoRequerimiento.id = this.db.createId();
    this.db
      .collection('tipoRequerimientos')
      .doc(tipoRequerimiento.id)
      .set(tipoRequerimiento);
  }

  informacionTipoRequerimiento(){
    this.listaRequerimientos = this.db.collection('tipoRequerimientos').valueChanges();
    return this.listaRequerimientos;
  }

  actualizarTipoReuqerimiento(item: TipoRequerimiento) {
    this.itemDoc = this.db.doc<TipoRequerimiento>(`tipoRequerimientos/${item.id}`);
    this.tipoRequerimiento = this.itemDoc.valueChanges();
    this.itemDoc.update(item);
  }

  deleteTipoRequerimiento(infoRequerimiento){
    return this.db.collection('tipoRequerimientos').doc(infoRequerimiento).delete();
  }

  //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }

  // Obtiene la informacion de una coleccion especifica
  public getCat() {
    return this.db.collection('requerimientos').doc('--stats--').snapshotChanges()
    .pipe(map(action => {
        const data = action.payload.data();
        const id = action.payload.id;
        return { id, ...data };
      })
  )}
}
