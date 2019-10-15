import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-requerimientos',
  templateUrl: './requerimientos.component.html',
  styleUrls: ['./requerimientos.component.css'],
})
export class RequerimientosComponent implements OnInit {

  menu = true;

  constructor(private auth: AuthServiceService,
    private router: Router) { }

  ngOnInit() {
    this.auth.menuRequerimientos(this.menu)
  }

  crearRequerimientos() {
    this.router.navigate(["./requerimiento"]);
  }

  listaRequerimientos() {
    this.router.navigate(["./listaRequerimientos"]);
  }

  respuestaRequerimientos() {
    this.router.navigate(["./respuestaRequerimientos"]);
  }

}
