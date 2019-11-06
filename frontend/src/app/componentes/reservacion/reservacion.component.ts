import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  
  public formGroup: FormGroup;

  aulas: String[]=[];
  agenda: String[]=[];
  reserva: String[]=[];
  color: string;

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.iniciarLogin();
    this.aulas.push('Aula 01','Aula 02','Aula 03','Aula 04');
    this.agenda.push('Martes','Miercoles','Jueves','Viernes','Sabado','Domingo','Lunes');
    this.reserva.push('1','2','3','4');
    this.color = "solicitada";
  }

  iniciarLogin(){
    this.formGroup = this.fromBuilder.group({
      aula: ["", [Validators.required]],
      fecha: ["", [Validators.required]]
    });
  }
}
