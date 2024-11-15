import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ManejodbService } from './services/manejodb.service';

// Mock del ManejodbService
class MockManejodbService {
  dbState() {
    return {
      subscribe: (callback: (data: boolean) => void) => callback(true) // Simula que la base de datos está lista
    };
  }

  async consultarUsuariosPorEstadoConectado() {
    return [{ id_rol: 1 }]; // Simula un usuario conectado con rol 1
  }
}

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: Router, useValue: { events: { subscribe: () => {} }, url: '/login' } } // Mock del Router
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

