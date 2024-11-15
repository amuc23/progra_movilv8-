import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambioclavePage } from './cambioclave.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importa FormsModule para ngModel
import { IonicModule } from '@ionic/angular';  // Importa IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock de los servicios
class MockManejodbService {
  cambiarContrasena(idUsuario: number, nuevaContrasena: string): Promise<void> {
    return Promise.resolve(); // Simula un cambio de contraseña exitoso
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string): Promise<void> {
    return Promise.resolve(); // Simula la presentación de una alerta
  }
}

// Mock del Router
class MockRouter {
  navigate = jasmine.createSpy('navigate'); // Simula la navegación
  getCurrentNavigation() {
    return { extras: { state: { usuario: { id_usuario: 1 } } } }; // Mock de getCurrentNavigation
  }
}

// Mock de ActivatedRoute
class MockActivatedRoute {
  queryParams = {
    subscribe: (callback: (params: any) => void) => callback({})
  };
}

describe('CambioclavePage', () => {
  let component: CambioclavePage;
  let fixture: ComponentFixture<CambioclavePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambioclavePage],
      imports: [FormsModule, IonicModule.forRoot()],  // Agrega FormsModule y IonicModule
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }, // Proveer el mock para ManejodbService
        { provide: AlertasService, useClass: MockAlertasService }, // Proveer el mock para AlertasService
        { provide: Router, useClass: MockRouter }, // Proveer el mock para Router
        { provide: ActivatedRoute, useClass: MockActivatedRoute } // Proveer el mock para ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para componentes personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(CambioclavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });

  // Puedes agregar más pruebas aquí para verificar la funcionalidad de validarContrasenas, etc.
});
