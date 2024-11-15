import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { AdminresecnasPageRoutingModule } from './adminresecnas-routing.module';
import { AdminresecnasPage } from './adminresecnas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,  // Asegúrate de que RouterModule esté incluido aquí
    AdminresecnasPageRoutingModule
  ],
  declarations: [AdminresecnasPage]
})
export class AdminresecnasPageModule {}
