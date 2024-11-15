import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegounicoPage } from './juegounico.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('JuegounicoPage', () => {
  let component: JuegounicoPage;
  let fixture: ComponentFixture<JuegounicoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegounicoPage],
      imports: [
        HttpClientTestingModule, // Simulación de llamadas HTTP
        FormsModule, // Para soportar [(ngModel)]
        ReactiveFormsModule // Soporte para formularios reactivos
      ],
      providers: [
        ManejodbService,
        AlertasService,
        SQLite, // Añadir SQLite como proveedor
        { provide: Router, useValue: { navigate: () => {} } }, // Simulación de Router
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } } // Simulación de ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Permitir componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(JuegounicoPage);
    component = fixture.componentInstance;

    // Configuración de valores predeterminados para evitar que propiedades no definidas causen errores
    component.juegoLlego = {
      id_producto: 1,
      nombre_prod: 'Juego de prueba',
      precio_prod: 20,
      foto_prod: 'ruta/foto.jpg' // Valor de ejemplo para foto_prod
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
