import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { PreciosComponent } from './precios/precios.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListadoInscripcionesComponent } from './listado-inscripciones/listado-inscripciones.component';
import { ReportesComponent } from './reportes/reportes.component';
import { GraficoComponent } from './grafico/grafico.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'listado-inscripciones', pathMatch: 'full'
  },
  {
    path: 'inscripcion', component: InscripcionComponent
  },
  {
    path: 'listado-clientes', component: ListadoClientesComponent
  },
  {
    path: 'agregar-cliente', component: AgregarClienteComponent
  },
  {
    path: 'agregar-cliente/:clienteID', component: AgregarClienteComponent
  },
  {
    path: 'precios', component: PreciosComponent
  },
  {
    path: 'listado-inscripciones', component: ListadoInscripcionesComponent
  },
  {
    path: 'reportes', component: ReportesComponent
  },
  {
    path: 'grafico', component: GraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
