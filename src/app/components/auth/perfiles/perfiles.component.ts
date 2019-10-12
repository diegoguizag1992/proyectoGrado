import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from 'ngx-webstorage';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  perfiles: Observable<any[]>;
  constructor(db: AngularFirestore) {
  this.perfiles = db.collection('perfiles').valueChanges();
      console.log(this.perfiles);

  }

  ngOnInit() {


  }

}
