import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de que FormsModule esté importado
import { IonicModule } from '@ionic/angular';

import { RecuperarPageRoutingModule } from './recuperar-routing.module';
import { RecuperarPage } from './recuperar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // FormsModule es necesario para ngModel
    IonicModule,
    RecuperarPageRoutingModule
  ],
  declarations: [RecuperarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Asegúrate de incluir CUSTOM_ELEMENTS_SCHEMA
})
export class RecuperarPageModule {}
