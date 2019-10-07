import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorage } from 'ngx-webstorage';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent implements OnInit {

  constructor( private activatedRoutes: ActivatedRoute,
               private auth: AuthServiceService) { }

  ngOnInit() {


  }

}
