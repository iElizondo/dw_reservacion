import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServicioService } from '../../servicio/api/servicio.service';
import { Usuario } from '../../model/usuario'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  public usuario: Usuario;
  constructor(private formBuilder: FormBuilder, private data: ServicioService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      idUsuario: ["", [Validators.required]],
      idContrasena: ["",[Validators.required]]
    });
  }

  ingresar(){
    this.usuario= {
      usuario: this.formGroup.value.idUsuario,
      contrasena: this.formGroup.value.idContrasena
    }
    //console.log(this.usuario);
    
    //console.log(this.data.getLogin(this.usuario).subscribe(res=>console.log(res)));
  }

}
