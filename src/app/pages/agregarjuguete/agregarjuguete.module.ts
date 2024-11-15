import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarjuguetePageRoutingModule } from './agregarjuguete-routing.module';
import { AgregarjuguetePage } from './agregarjuguete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Añadir ReactiveFormsModule
    IonicModule,
    AgregarjuguetePageRoutingModule
  ],
  declarations: [AgregarjuguetePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añadir CUSTOM_ELEMENTS_SCHEMA
})
export class AgregarjuguetePageModule {}
