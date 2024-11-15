import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarconsolaPage } from './editarconsola.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
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

// Mock para NavController
class MockNavController {
  navigateForward() {
    return Promise.resolve(); // Simula una navegación sin errores
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          consolaSelect: { id_producto: 1, nombre_prod: 'Consola 1', precio_prod: 300, stock_prod: 5, descripcion_prod: 'Descripción 1', foto_prod: 'foto1.jpg', estatus: 1 }
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

describe('EditarconsolaPage', () => {
  let component: EditarconsolaPage;
  let fixture: ComponentFixture<EditarconsolaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        IonicModule.forRoot() // Importación de IonicModule para simular los componentes de Ionic
      ],
      declarations: [EditarconsolaPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Mock para ManejodbService
        { provide: CamaraService, useClass: MockCamaraService }, // Mock para CamaraService
        { provide: NavController, useClass: MockNavController }, // Mock para NavController
        { provide: Router, useClass: MockRouter }, // Mock para Router
        { provide: ActivatedRoute, useClass: MockActivatedRoute } // Mock para ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar ambos esquemas
    }).compileComponents();

    fixture = TestBed.createComponent(EditarconsolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });
});

