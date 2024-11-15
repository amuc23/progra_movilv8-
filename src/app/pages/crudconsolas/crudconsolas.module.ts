import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudconsolasPageRoutingModule } from './crudconsolas-routing.module';
import { CrudconsolasPage } from './crudconsolas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudconsolasPageRoutingModule
  ],
  declarations: [CrudconsolasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega esquemas
})
export class CrudconsolasPageModule {}
