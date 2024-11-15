import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudjuguetesPageRoutingModule } from './crudjuguetes-routing.module';
import { CrudjuguetesPage } from './crudjuguetes.page';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudjuguetesPageRoutingModule,
    RouterModule // Asegúrate de que RouterModule esté importado aquí
  ],
  declarations: [CrudjuguetesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega esquemas
})
export class CrudjuguetesPageModule {}
