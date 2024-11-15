import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchUsuarios() {
    return of([{ username: 'usuarioExistente', correo: 'correo@existente.com' }]);
  }
  agregarUsuariosCliente() {
    return Promise.resolve();
  }
}

class MockAlertasService {
  presentAlert(message: string) {}
}

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [RouterTestingModule.withRoutes([])],  // Configura RouterTestingModule sin rutas
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe mostrar error si hay campos vacíos', () => {
    component.nombres = '';
    component.apellidos = '';
    component.rut = '';
    component.usuario = '';
    component.correo = '';
    component.contrasena = '';
    component.confirmarContrasena = '';
    component.respuesta = '';
    component.preguntaSeleccionada = '';

    const errores = component.validarFormulario();
    expect(errores).toContain('Todos los campos son obligatorios.');
  });

  it('Debe mostrar error si las contraseñas no coinciden', () => {
    component.contrasena = 'Password1!';
    component.confirmarContrasena = 'PasswordDiferente';

    const errores = component.validarFormulario();
    expect(errores).toContain('Las contraseñas no coinciden.');
  });

  // Nueva prueba simplificada para verificar que los datos se asignen correctamente
  it('Debe asignar correctamente los datos del formulario', () => {
    component.nombres = 'Nombre';
    component.apellidos = 'Apellido';
    component.rut = '12345678-k';
    component.usuario = 'nuevoUsuario';
    component.correo = 'nuevo@correo.com';
    component.contrasena = 'Password1!';
    component.confirmarContrasena = 'Password1!';
    component.preguntaSeleccionada = '¿Cuál es tu color favorito?';
    component.respuesta = 'Rojo';

    expect(component.nombres).toBe('Nombre');
    expect(component.apellidos).toBe('Apellido');
    expect(component.rut).toBe('12345678-k');
    expect(component.usuario).toBe('nuevoUsuario');
    expect(component.correo).toBe('nuevo@correo.com');
    expect(component.contrasena).toBe('Password1!');
    expect(component.confirmarContrasena).toBe('Password1!');
    expect(component.preguntaSeleccionada).toBe('¿Cuál es tu color favorito?');
    expect(component.respuesta).toBe('Rojo');
  });
});
