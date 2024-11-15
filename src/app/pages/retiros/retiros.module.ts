import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RetirosPageRoutingModule } from './retiros-routing.module';
import { RetirosPage } from './retiros.page';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetirosPageRoutingModule,
    RouterModule   // Agrega RouterModule aquí
  ],
  declarations: [RetirosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Asegúrate de incluir CUSTOM_ELEMENTS_SCHEMA
})
export class RetirosPageModule {}
