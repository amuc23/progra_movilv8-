import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoPageRoutingModule } from './carrito-routing.module';
import { CarritoPage } from './carrito.page';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    RouterModule // Asegúrate de que RouterModule esté importado aquí
  ],
  declarations: [CarritoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega los esquemas aquí
})
export class CarritoPageModule {}
