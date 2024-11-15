import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';  // Asegúrate de que esté importado aquí
import { RegistroPage } from './registro.page';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,  // Importa el módulo de enrutamiento aquí
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
