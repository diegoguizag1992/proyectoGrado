import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { FirebaseStorageService } from './firebase-storage.service';



@Component({
  selector: 'app-respuesta-requerimientos',
  templateUrl: './respuesta-requerimientos.component.html',
  styleUrls: ['./respuesta-requerimientos.component.css']
})
export class RespuestaRequerimientosComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  title = 'app';
  nombreArchivo;
  datosurl: Usuario = {};
;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadFile(event) {
      const file = event.target.files[0];
      const filePath = this.nombreArchivo;
      const task = this.storage.upload(filePath, file).then(() => {
           const ref = this.storage.ref(filePath);
           const downloadURL = ref.getDownloadURL().subscribe(url => {
           const Url = url; // for ts
           this.datosurl.email = url // with this you can use it in the html
           console.log(this.datosurl);
       })
    })
  }
}
