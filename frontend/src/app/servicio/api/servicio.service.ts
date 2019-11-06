import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { Empresa } from '../../model/empresa';
import { Usuario } from '../../model/usuario';
import { Reservacion } from '../../model/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  empresas: Observable<Empresa[]>;
  usuarios: Observable<Usuario[]>;
  reservaciones: Observable<Reservacion[]>;
  
  constructor(private http: HttpClient) { }
  urlApi ='';

  getEmpresa():Observable<Empresa[]>{
    this.urlApi ='http://localhost/dw_reservacion/backend/index.php/api/Empresa/getEmpresa';
    return this.http.get<Empresa[]>(this.urlApi);
  }

  getUsuario():Observable<Usuario[]>{
    this.urlApi ='http://localhost/dw_reservacion/backend/index.php/api/Usuario/getUsuario';
    return this.http.get<Usuario[]>(this.urlApi);
  }

  getReservacion():Observable<Reservacion[]>{
    this.urlApi ='http://localhost/dw_reservacion/backend/index.php/api/Reserva/getReserva';
    return this.http.get<Reservacion[]>(this.urlApi);
  }


}
