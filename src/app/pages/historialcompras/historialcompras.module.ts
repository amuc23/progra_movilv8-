import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HistorialcomprasPageRoutingModule } from './historialcompras-routing.module';
import { HistorialcomprasPage } from './historialcompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialcomprasPageRoutingModule,
    RouterModule  // Agrega RouterModule aquí
  ],
  declarations: [HistorialcomprasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA
})
export class HistorialcomprasPageModule {}
