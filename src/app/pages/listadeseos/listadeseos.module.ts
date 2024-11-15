import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule

import { ListadeseosPageRoutingModule } from './listadeseos-routing.module';
import { ListadeseosPage } from './listadeseos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadeseosPageRoutingModule,
    RouterModule  // Agrega RouterModule aquí
  ],
  declarations: [ListadeseosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Asegúrate de agregar CUSTOM_ELEMENTS_SCHEMA
})
export class ListadeseosPageModule {}
