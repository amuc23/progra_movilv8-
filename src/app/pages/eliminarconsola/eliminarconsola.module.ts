import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Agrega CUSTOM_ELEMENTS_SCHEMA
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EliminarconsolaPageRoutingModule } from './eliminarconsola-routing.module';
import { EliminarconsolaPage } from './eliminarconsola.page';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarconsolaPageRoutingModule,
    RouterModule   // Agrega RouterModule aquí
  ],
  declarations: [EliminarconsolaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para evitar errores con componentes personalizados
})
export class EliminarconsolaPageModule {}
