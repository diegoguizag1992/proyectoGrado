import { TipoRequerimientoComponent } from './tipo-requerimiento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'tipoRequerimiento', component: TipoRequerimientoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TipoRequerimientoRoutingModule { }
