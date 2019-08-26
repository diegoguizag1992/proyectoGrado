import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'proyectoGrado';

  items: Observable<any[]>;

  constructor(private db: AngularFirestore) { }


  ngOnInit(): void {
    this.items = this.db.collection('items').valueChanges();
        // .subscribe(data => {
        //   console.log(data);
        // });
  }
}


