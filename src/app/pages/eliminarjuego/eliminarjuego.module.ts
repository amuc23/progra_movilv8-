import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EliminarjuegoPageRoutingModule } from './eliminarjuego-routing.module';
import { EliminarjuegoPage } from './eliminarjuego.page';
import { MatSelectModule } from '@angular/material/select';  // Agregamos MatSelectModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarjuegoPageRoutingModule,
    MatSelectModule  // Agregamos MatSelectModule aquí
  ],
  declarations: [EliminarjuegoPage]
})
export class EliminarjuegoPageModule {}
