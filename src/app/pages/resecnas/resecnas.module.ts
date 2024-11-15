import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ResecnasPageRoutingModule } from './resecnas-routing.module';  // Asegúrate de que esté correctamente configurado
import { ResecnasPage } from './resecnas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResecnasPageRoutingModule,
    RouterModule  // Agrega RouterModule para que routerLink funcione
  ],
  declarations: [ResecnasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para soportar componentes personalizados
})
export class ResecnasPageModule {}
