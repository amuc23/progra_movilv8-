import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgregarusuarioPageRoutingModule } from './agregarusuario-routing.module';
import { AgregarusuarioPage } from './agregarusuario.page';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,       // Incluye ReactiveFormsModule
    IonicModule,
    AgregarusuarioPageRoutingModule,
    MatInputModule,            // Importa MatInputModule
    MatSelectModule,           // Importa MatSelectModule
    MatFormFieldModule         // Importa MatFormFieldModule
  ],
  declarations: [AgregarusuarioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA
})
export class AgregarusuarioPageModule {}
