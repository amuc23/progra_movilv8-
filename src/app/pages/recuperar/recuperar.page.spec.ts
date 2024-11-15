import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPage } from './recuperar.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule
import { IonicModule } from '@ionic/angular';  // Asegúrate de importar IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockManejodbService {
  consultarUsuarioPorNombre(nombreUsuario: string) {
    return Promise.resolve(null); // Simula que el usuario no existe
  }
}

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecuperarPage],
      imports: [
        FormsModule,         // Asegúrate de agregar FormsModule aquí
        IonicModule.forRoot() // Agrega IonicModule.forRoot() aquí
      ],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Asegúrate de incluir CUSTOM_ELEMENTS_SCHEMA
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar error si el usuario no existe', async () => {
    component.nombreUsuario = 'usuarioNoExistente';
    await component.validarUsuario();
    expect(component.errorMessage).toBe('Nombre de usuario no válido.');
  });
});
