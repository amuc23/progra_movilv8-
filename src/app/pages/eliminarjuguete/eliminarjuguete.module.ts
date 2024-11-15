import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EliminarjuguetePageRoutingModule } from './eliminarjuguete-routing.module';
import { EliminarjuguetePage } from './eliminarjuguete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarjuguetePageRoutingModule
  ],
  declarations: [EliminarjuguetePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar los esquemas
})
export class EliminarjuguetePageModule {}
