import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { JugueteunicoPageRoutingModule } from './jugueteunico-routing.module';
import { JugueteunicoPage } from './jugueteunico.page';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule para ngModel en el textarea
    IonicModule,
    RouterModule, // Importa RouterModule para que routerLink funcione
    JugueteunicoPageRoutingModule
  ],
  declarations: [JugueteunicoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega ambos esquemas
})
export class JugueteunicoPageModule {}
