import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComicdetallePageRoutingModule } from './comicdetalle-routing.module';
import { ComicdetallePage } from './comicdetalle.page';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicdetallePageRoutingModule,
    RouterModule // Asegúrate de que RouterModule esté importado aquí
  ],
  declarations: [ComicdetallePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega esquemas
})
export class ComicdetallePageModule {}
