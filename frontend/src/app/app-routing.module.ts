import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { AdminComponent } from './componentes/admin/admin.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reservacion', component: ReservacionComponent },
  { path: 'reserva/:id', component: ReservaComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
