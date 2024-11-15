import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugueteunicoPage } from './jugueteunico.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// Mock del servicio ManejodbService
class MockManejodbService {
  dbState() {
    return of(true);
  }
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  consultarJuguetePorId(id: number) {
    return Promise.resolve({ id_producto: id, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' });
  }
  obtenerResecnas2(idProducto: number) {
    return Promise.resolve([]);
  }
  consultarProdsCarro(idProducto: number, idVenta: number | null) {
    return Promise.resolve(false);
  }
  verificarOCrearVenta(idUsuario: number) {
    return Promise.resolve(1);
  }
  agregarDetalleVenta(idVenta: number, precio: number, idProducto: number) {
    return Promise.resolve();
  }
  preciofinal(idVenta: number) {
    return Promise.resolve();
  }
  agregarResecnas(reseña: string, idUsuario: number, idProducto: number) {
    return Promise.resolve();
  }
  consultarResecnaPorIdProductoYUsuario(idProducto: number, idUsuario: number) {
    return Promise.resolve(null);
  }
  agregarFav(idUsuario: number, idProducto: number) {
    return Promise.resolve();
  }
  quitarFav(idProducto: number, idUsuario: number) {
    return Promise.resolve();
  }
}

// Mock para NavController
class MockNavController {
  navigateForward() {
    return Promise.resolve(); // Simula una navegación sin errores
  }
}

// Mock para Router con serializeUrl
class MockRouter {
  navigate = jasmine.createSpy('navigate');
  createUrlTree = jasmine.createSpy('createUrlTree').and.returnValue('/mock-url'); 
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  serializeUrl = jasmine.createSpy('serializeUrl').and.returnValue('/mock-url'); // Agrega serializeUrl
}

describe('JugueteunicoPage', () => {
  let component: JugueteunicoPage;
  let fixture: ComponentFixture<JugueteunicoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [JugueteunicoPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useValue: { presentAlert: () => {} } },
        { provide: NavController, useClass: MockNavController }, // Usa el mock de NavController
        { provide: Router, useClass: MockRouter }, // Usa el mock actualizado de Router
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
            snapshot: { params: {} },
            getCurrentNavigation: () => ({
              extras: { state: { jugueteSelect: { id_producto: 1, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' } } }
            })
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(JugueteunicoPage);
    component = fixture.componentInstance;
    component.jugueteLlego = { id_producto: 1, nombre_prod: 'Juguete de Prueba', foto_prod: 'ruta/de/imagen.jpg' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
