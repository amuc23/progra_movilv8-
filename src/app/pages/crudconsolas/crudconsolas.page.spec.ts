import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudconsolasPage } from './crudconsolas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { IonicModule, NavController } from '@ionic/angular'; // Importar IonicModule y NavController
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// Mock del servicio ManejodbService
class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchConsolas() {
    return of([
      { id_producto: 1, nombre_prod: 'Consola 1', precio_prod: 300, stock_prod: 5, descripcion_prod: 'Descripción 1', foto_prod: 'foto1.jpg', estatus: 1, id_categoria: 1 },
      { id_producto: 2, nombre_prod: 'Consola 2', precio_prod: 400, stock_prod: 10, descripcion_prod: 'Descripción 2', foto_prod: 'foto2.jpg', estatus: 1, id_categoria: 2 }
    ]);
  }
}

// Mock para NavController
class MockNavController {
  navigateForward() {
    return Promise.resolve(); // Simula la navegación sin errores
  }
  navigateBack() {
    return Promise.resolve();
  }
  goRoot() {
    return Promise.resolve();
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
}

describe('CrudconsolasPage', () => {
  let component: CrudconsolasPage;
  let fixture: ComponentFixture<CrudconsolasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      declarations: [CrudconsolasPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: NavController, useClass: MockNavController }, // Usa el mock de NavController
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudconsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
