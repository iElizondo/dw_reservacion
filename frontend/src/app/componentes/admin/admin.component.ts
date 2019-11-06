import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ServicioService } from '../../servicio/api/servicio.service'
import { Empresa } from '../../model/empresa';
import { Usuario } from '../../model/usuario';
import { Reservacion } from '../../model/reservacion';

import { from } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  reservaciones: string[]=[];
  //reservaciones: Observable<Reservacion[]>;
  nEmpresa: String;
  usu: String;

  constructor(private apiService: ServicioService) { }

  ngOnInit() {
    this.reservaciones.push('1','1','1','1',);
    this.apiService.empresas = this.apiService.getEmpresa();
    this.apiService.usuarios = this.apiService.getUsuario();
    //this.reservaciones = this.apiService.getReservacion();
    
    this.apiService.getReservacion().subscribe(res=>console.log(res));
  }

}
