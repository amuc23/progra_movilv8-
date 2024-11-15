import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JuegosPage } from './juegos.page';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

// Mock del ManejodbService
class MockManejodbService {
  dbState() {
    return {
      subscribe: (callback: (data: boolean) => void) => callback(true) // Simula que la base de datos está lista
    };
  }

  fetchJuegos() {
    return of([
      { nombre_prod: 'Juego A' },
      { nombre_prod: 'Juego B' }
    ]); // Simula un arreglo de juegos
  }
}

// Mock del AlertasService
class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

// Mock del Router
class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('JuegosPage', () => {
  let component: JuegosPage;
  let fixture: ComponentFixture<JuegosPage>;
  let mockRouter: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuegosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Añadir CUSTOM_ELEMENTS_SCHEMA para evitar errores de componentes no reconocidos
    }).compileComponents();

    fixture = TestBed.createComponent(JuegosPage);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as unknown as MockRouter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a la página de juego único al seleccionar un juego', () => {
    const juego = { nombre_prod: 'Juego A' };
    component.irJuegoUnico(juego);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/juegounico'], { state: { juegoSelect: juego } });
  });

  it('debería filtrar los juegos según el término de búsqueda', () => {
    component.arregloJuegos = [
      { nombre_prod: 'Juego A' },
      { nombre_prod: 'Juego B' },
      { nombre_prod: 'Otro Juego' }
    ];
    
    component.buscarJuego({ target: { value: 'juego a' } });
    expect(component.juegosFiltrados).toEqual([{ nombre_prod: 'Juego A' }]);
  });
});
