import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarusuarioPage } from './eliminarusuario.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EliminarusuarioPage', () => {
  let component: EliminarusuarioPage;
  let fixture: ComponentFixture<EliminarusuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarusuarioPage],
      imports: [
        HttpClientTestingModule // Simulación de llamadas HTTP
      ],
      providers: [
        ManejodbService,
        AlertasService,
        SQLite, // Proveedor de SQLite para evitar NullInjectorError
        { provide: Router, useValue: { navigate: () => {} } }, // Simulación de Router
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } } // Simulación de ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Permitir componentes personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarusuarioPage);
    component = fixture.componentInstance;

    // Asignar valores predeterminados para usuarioLlego para evitar propiedades no definidas
    component.usuarioLlego = {
      id_usuario: 1,
      username: 'usuario_prueba',
      foto_usuario: 'ruta/foto.jpg' // Valor de ejemplo para foto_usuario
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
