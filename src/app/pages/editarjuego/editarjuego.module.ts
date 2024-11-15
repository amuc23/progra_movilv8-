import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { EditarjuegoPageRoutingModule } from './editarjuego-routing.module';
import { EditarjuegoPage } from './editarjuego.page';

// Importaciones de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Asegúrate de incluir ReactiveFormsModule aquí
    IonicModule,
    EditarjuegoPageRoutingModule,
    MatInputModule,        // Importa MatInputModule
    MatSelectModule,       // Importa MatSelectModule
    MatFormFieldModule     // Importa MatFormFieldModule
  ],
  declarations: [EditarjuegoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega ambos esquemas para manejar componentes personalizados
})
export class EditarjuegoPageModule {}
