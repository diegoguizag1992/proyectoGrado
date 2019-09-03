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
  loader = true;


  constructor() { }


  ngOnInit(): void {
        // .subscribe(data => {
        //   console.log(data);
        // });
  }
}


