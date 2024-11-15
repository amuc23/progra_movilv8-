import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudusuariosPageRoutingModule } from './crudusuarios-routing.module';
import { CrudusuariosPage } from './crudusuarios.page';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudusuariosPageRoutingModule,
    RouterModule // Asegúrate de importar RouterModule aquí
  ],
  declarations: [CrudusuariosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega ambos esquemas
})
export class CrudusuariosPageModule {}
