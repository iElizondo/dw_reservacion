import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  private fromBuilder: FormBuilder;

  constructor() { }

  ngOnInit() {
    this.iniciarLogin();
  }

  iniciarLogin(){
    this.formGroup = this.fromBuilder.group({
      idCorreo: ["", [Validators.required]],
      idContrasena: ["", [Validators.required]]
    });
  };
}
