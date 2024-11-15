import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudjuegosPageRoutingModule } from './crudjuegos-routing.module';
import { CrudjuegosPage } from './crudjuegos.page';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudjuegosPageRoutingModule,
    RouterModule // Asegúrate de que RouterModule esté importado aquí
  ],
  declarations: [CrudjuegosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega los esquemas necesarios
})
export class CrudjuegosPageModule {}
