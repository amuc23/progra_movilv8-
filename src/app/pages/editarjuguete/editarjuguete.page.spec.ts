import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarjuguetePage } from './editarjuguete.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('EditarjuguetePage', () => {
  let component: EditarjuguetePage;
  let fixture: ComponentFixture<EditarjuguetePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarjuguetePage],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        IonicModule.forRoot(),       // Add IonicModule
        FormsModule,                 // Add FormsModule
        ReactiveFormsModule,         // Add ReactiveFormsModule
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule
      ],
      providers: [
        ManejodbService,
        CamaraService,
        SQLite,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add CUSTOM_ELEMENTS_SCHEMA
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarjuguetePage);
    component = fixture.componentInstance;

    // Simulate toy data for the test
    component.jugueteLlego = {
      nombre_prod: 'Juguete de prueba',
      precio_prod: 100,
      descripcion_prod: 'Descripción de prueba',
      stock_prod: 10,
      foto_prod: null,
      estatus: '1'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
