import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Asegúrate de que IonicModule esté importado
import { ConsolasPageRoutingModule } from './consolas-routing.module';
import { ConsolasPage } from './consolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Incluye IonicModule
    ConsolasPageRoutingModule
  ],
  declarations: [ConsolasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para componentes personalizados
})
export class ConsolasPageModule {}
