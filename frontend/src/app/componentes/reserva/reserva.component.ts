import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  hInicio: String[]=[];
  hFin: String[]=[];

  constructor() { }

  ngOnInit() {
    this.hInicio.push('8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00');
    this.hFin.push('9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00');
  }

}
