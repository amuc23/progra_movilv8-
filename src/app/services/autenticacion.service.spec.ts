import { TestBed } from '@angular/core/testing';
import { AutenticacionService } from './autenticacion.service';
import { ManejodbService } from './manejodb.service';
import { Router } from '@angular/router';

// Mock de ManejodbService sin dependencia de SQLite
class MockManejodbService {
  actualizarEstadoUsuario2() {
    return Promise.resolve();
  }
  cerrarSesion() {
    return Promise.resolve();
  }
  obtenerUsuarioLogueado() {
    return Promise.resolve({ id_usuario: 1, nombre: 'Usuario' });
  }
}

describe('AutenticacionService', () => {
  let service: AutenticacionService;
  let bdService: ManejodbService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') }; // Mock de Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AutenticacionService,
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = TestBed.inject(AutenticacionService);
    bdService = TestBed.inject(ManejodbService);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
