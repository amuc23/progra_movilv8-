import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarjuguetePage } from './eliminarjuguete.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('EliminarjuguetePage', () => {
  let component: EliminarjuguetePage;
  let fixture: ComponentFixture<EliminarjuguetePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarjuguetePage],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
        IonicModule.forRoot() // Asegura que IonicModule esté configurado
      ],
      providers: [
        ManejodbService,
        SQLite,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar esquemas
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarjuguetePage);
    component = fixture.componentInstance;

    // Simulación de datos de juguete para la prueba
    component.jugueteLlego = {
      id_producto: 1,
      nombre_prod: 'Juguete de prueba',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
