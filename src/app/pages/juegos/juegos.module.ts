import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { JuegosPageRoutingModule } from './juegos-routing.module';
import { JuegosPage } from './juegos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,  // Asegúrate de incluir RouterModule
    JuegosPageRoutingModule
  ],
  declarations: [JuegosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
})
export class JuegosPageModule {}
