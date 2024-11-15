import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { IonicModule, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute y Router
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule, UrlTree } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class SQLiteMock {
  create() {
    return Promise.resolve({});
  }
}

class ManejodbServiceMock {
  dbState() {
    return of(true);
  }
  consultarUsuariosPorEstadoConectado() {
    return Promise.resolve([
      {
        id_usuario: '1',
        rut_usuario: '12345678-9',
        nombres_usuario: 'John',
        apellidos_usuario: 'Doe',
        username: 'johndoe',
        clave: 'password',
        correo: 'johndoe@example.com',
        token_recup_clave: '',
        foto_usuario: '',
        estado_user: '',
        userlogged: '1',
        mantener_sesion: 1,
        id_rol: '1'
      }
    ]);
  }
  MantenerSesionIniciada(username: string) {
    return Promise.resolve();
  }
  DesactivarMantenerSesionIniciada(username: string) {
    return Promise.resolve();
  }
}

class AutenticacionServiceMock {
  cerrarSesion() {
    return Promise.resolve();
  }
}

class NavControllerMock {
  navigateForward() {}
}

// Actualiza el mock de Router
const routerMock = {
  navigate: jasmine.createSpy('navigate'),
  createUrlTree: jasmine.createSpy('createUrlTree').and.returnValue({} as UrlTree),
  serializeUrl: jasmine.createSpy('serializeUrl').and.returnValue('/some-path'),
  navigateByUrl: jasmine.createSpy('navigateByUrl')
};

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [IonicModule.forRoot(), FormsModule, RouterModule],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        { provide: ManejodbService, useClass: ManejodbServiceMock },
        { provide: AutenticacionService, useClass: AutenticacionServiceMock },
        { provide: Router, useValue: routerMock },  // Usa el nuevo mock de Router aquí
        { provide: NavController, useClass: NavControllerMock },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
