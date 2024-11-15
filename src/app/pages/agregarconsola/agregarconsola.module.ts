import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarconsolaPageRoutingModule } from './agregarconsola-routing.module';
import { AgregarconsolaPage } from './agregarconsola.page';

// Importes de Angular Material
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarconsolaPageRoutingModule,
    MatSelectModule,       // Módulo de Angular Material para selectores
    MatFormFieldModule,     // Módulo de Angular Material para campos de formulario
    MatInputModule          // Módulo de Angular Material para inputs
  ],
  declarations: [AgregarconsolaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  // Esquemas para suprimir errores de elementos o propiedades desconocidas
})
export class AgregarconsolaPageModule {}
