import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar-correo',
  templateUrl: './validar-correo.page.html',
  styleUrls: ['./validar-correo.page.scss'],
})
export class ValidarCorreoPage implements OnInit {

  emailForm: FormGroup;
  showToast = false;

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  enviarMensaje() {
    if (this.emailForm.valid) {
      this.showToast = true; // Muestra el mensaje de éxito
    }
  }

}
