import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) {

    this.items = this.db.collection('items').valueChanges();
  }

}
