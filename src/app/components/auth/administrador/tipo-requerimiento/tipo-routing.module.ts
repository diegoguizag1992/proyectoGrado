import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoRequerimientoComponent } from './tipo-requerimiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'tipoRequerimiento', component: TipoRequerimientoComponent }

];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRoutingModule { }
