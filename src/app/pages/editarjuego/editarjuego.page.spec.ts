import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarjuegoPage } from './editarjuego.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule para los inputs
import { IonicModule, NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// Mocks de los servicios
class MockManejodbService {
  modificarConsola(id: number, nombre: string, precio: number, stock: number, descripcion: string, foto: string, estatus: string) {
    return Promise.resolve(); // Simula la modificación exitosa de una consola
  }

  dbState() {
    return of(true); // Simula que la base de datos está lista
  }
}

class MockCamaraService {
  takePicture() {
    return Promise.resolve('foto_mock.jpg'); // Simula la toma de una foto
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          juegoSelect: { id_producto: 1, nombre_prod: 'Juego 1', precio_prod: 300, stock_prod: 5, descripcion_prod: 'Descripción 1', foto_prod: 'foto1.jpg', estatus: 1 }
        }
      }
    };
  }
}

class MockActivatedRoute {
  queryParams = {
    subscribe: (callback: (params: any) => void) => callback({})
  };
}

describe('EditarjuegoPage', () => {
  let component: EditarjuegoPage;
  let fixture: ComponentFixture<EditarjuegoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        IonicModule.forRoot() // Importación de IonicModule para simular los componentes de Ionic
      ],
      declarations: [EditarjuegoPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Mock para ManejodbService
        { provide: CamaraService, useClass: MockCamaraService }, // Mock para CamaraService
        { provide: NavController, useClass: MockRouter }, // Mock para NavController
        { provide: Router, useClass: MockRouter }, // Mock para Router
        { provide: ActivatedRoute, useClass: MockActivatedRoute } // Mock para ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar ambos esquemas
    }).compileComponents();

    fixture = TestBed.createComponent(EditarjuegoPage);
    component = fixture.componentInstance;

    // Simulación de datos del juego para evitar errores
    component.juegoLlego = {
      id_producto: 1,
      nombre_prod: 'Juego de prueba',
      precio_prod: 100,
      descripcion_prod: 'Descripción del juego de prueba',
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
