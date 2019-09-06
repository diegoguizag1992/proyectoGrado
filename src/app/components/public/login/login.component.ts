import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              public  afAuth:  AngularFireAuth,
              public  auht: AuthServiceService) { }

  ngOnInit() {
  }

  loginPersonal() {
    this.router.navigate(['/nuevoUsuario']);

  }
  async  loginWithGoogle() {
      this.auht.signInWithGoogle();
  }

}

