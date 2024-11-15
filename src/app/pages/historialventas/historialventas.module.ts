import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Importa RouterModule

import { HistorialventasPageRoutingModule } from './historialventas-routing.module';
import { HistorialventasPage } from './historialventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialventasPageRoutingModule,
    RouterModule   // Asegúrate de agregar RouterModule aquí
  ],
  declarations: [HistorialventasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para soportar componentes personalizados
})
export class HistorialventasPageModule {}
