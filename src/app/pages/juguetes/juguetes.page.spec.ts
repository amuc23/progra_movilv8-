import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuguetesPage } from './juguetes.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock del ManejodbService
class MockManejodbService {
  dbState() {
    return of(true); // Simula que la base de datos está lista
  }

  fetchJuguetes() {
    return of([
      { nombre_prod: 'Juguete A' },
      { nombre_prod: 'Juguete B' }
    ]); // Simula un arreglo de juguetes
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

describe('JuguetesPage', () => {
  let component: JuguetesPage;
  let fixture: ComponentFixture<JuguetesPage>;
  let mockRouter: MockRouter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JuguetesPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Permitir componentes personalizados de Ionic
    }).compileComponents();

    fixture = TestBed.createComponent(JuguetesPage);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as unknown as MockRouter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a la página de juguete único al seleccionar un juguete', () => {
    const juguete = { nombre_prod: 'Juguete A' };
    component.irJugueteUnico(juguete);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/jugueteunico'], { state: { jugueteSelect: juguete } });
  });

  it('debería filtrar los juguetes según el término de búsqueda', () => {
    component.arregloJuguetes = [
      { nombre_prod: 'Juguete A' },
      { nombre_prod: 'Juguete B' },
      { nombre_prod: 'Otro Juguete' }
    ];
    
    component.buscarJuguete({ target: { value: 'juguete a' } });
    expect(component.juguetesFiltrados).toEqual([{ nombre_prod: 'Juguete A' }]);
  });
});
