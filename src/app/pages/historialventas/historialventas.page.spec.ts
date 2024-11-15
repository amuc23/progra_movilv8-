import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialventasPage } from './historialventas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { of } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockManejodbService {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  CosultarVentasTotales() {
    return Promise.resolve([
      {
        id_venta: '1',
        fecha_venta: '2023-01-01',
        total: '100',
        estado_retiro: 'Pendiente',
        username: 'usuario1',
        id_usuario: '1',
        id_estado: '1'
      }
    ]);
  }
}

describe('HistorialventasPage', () => {
  let component: HistorialventasPage;
  let fixture: ComponentFixture<HistorialventasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialventasPage],
      imports: [IonicModule.forRoot(), RouterModule],  // Asegúrate de incluir IonicModule y RouterModule
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }  // Proveer un mock de ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para componentes personalizados
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialventasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
