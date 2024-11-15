import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { IonicModule } from '@ionic/angular';
import { AgregarjuegoPageRoutingModule } from './agregarjuego-routing.module';
import { AgregarjuegoPage } from './agregarjuego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Agregar FormsModule aquí
    IonicModule,
    AgregarjuegoPageRoutingModule,
  ],
  declarations: [AgregarjuegoPage],
})
export class AgregarjuegoPageModule {}
