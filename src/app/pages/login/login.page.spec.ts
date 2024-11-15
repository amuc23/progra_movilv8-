import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { NavController, Platform, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

class MockManejodbService {
  crearBD() { return Promise.resolve(); }
  dbState() { return of(true); }
  fetchUsuarios() { return of([]); }
  consultarUsuariosPorMantenerSesion() { return Promise.resolve([]); }
  consultarUsuariosLoggin(user: string, clave: string) { return Promise.resolve(true); }
  validarUsuarioBaneado(user: string) { return Promise.resolve(false); }
  actualizarEstadoUsuario(user: string) { return Promise.resolve(); }
}

class MockAlertasSilenciosasService {
  presentSilentToast(message: string, duration: number) {}
}

class MockAutenticacionService {
  cerrarSesion() {}
}

// Mock NavController para evitar errores de subscribe
class MockNavController {
  navigateForward() {}
  navigateRoot() {}
  navigateBack() {}
}

// Mock Platform para soportar `subscribeWithPriority`
class MockPlatform {
  backButton = {
    subscribeWithPriority: (priority: number, fn: () => void) => ({ unsubscribe: () => {} })
  };
}

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasSilenciosasService, useClass: MockAlertasSilenciosasService },
        { provide: AutenticacionService, useClass: MockAutenticacionService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: Platform, useClass: MockPlatform },
        { provide: NavController, useClass: MockNavController } // Agregar MockNavController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería establecer loginError en true si el usuario o contraseña están vacíos', async () => {
    component.usernameunlogged = '';
    component.password = '';
    
    await component.loggin(component.usernameunlogged, component.password);
    expect(component.loginError).toBeTrue();
  });

  it('debería llamar al método loggin sin errores con credenciales válidas', async () => {
    component.usernameunlogged = 'usuarioPrueba';
    component.password = 'Prueba@1234';
    
    await component.loggin(component.usernameunlogged, component.password);
    expect(component.loginError).toBeFalse();
  });
});
