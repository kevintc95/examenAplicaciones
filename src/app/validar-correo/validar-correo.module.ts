import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidarCorreoPageRoutingModule } from './validar-correo-routing.module';

import { ValidarCorreoPage } from './validar-correo.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidarCorreoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ValidarCorreoPage]
})
export class ValidarCorreoPageModule {}
