import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarconsolaPageRoutingModule } from './editarconsola-routing.module';
import { EditarconsolaPage } from './editarconsola.page';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    EditarconsolaPageRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [EditarconsolaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar ambos esquemas
})
export class EditarconsolaPageModule {}
