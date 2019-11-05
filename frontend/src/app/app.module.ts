import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ReservacionComponent,
    ConfiguracionComponent,
    AgendaComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
