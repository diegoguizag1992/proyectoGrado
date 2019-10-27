import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoRequerimientoComponent } from './tipo-requerimiento.component';


const routes: Routes = [
  { path: 'tipoRequerimiento', component: TipoRequerimientoComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule { }
