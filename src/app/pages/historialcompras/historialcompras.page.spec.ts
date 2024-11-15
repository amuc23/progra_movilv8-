import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialcomprasPage } from './historialcompras.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

class MockManejodbService {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  consultarRetiros(idUsuario: number) {
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

// Mock de ActivatedRoute para simular la funcionalidad de queryParams
class MockActivatedRoute {
  queryParams = of({});  // Simula un observable vacío para queryParams
}

describe('HistorialcomprasPage', () => {
  let component: HistorialcomprasPage;
  let fixture: ComponentFixture<HistorialcomprasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialcomprasPage],
      imports: [IonicModule.forRoot(), RouterModule],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: ActivatedRoute, useClass: MockActivatedRoute }  // Proveer el mock de ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA para componentes personalizados
    }).compileComponents();

    fixture = TestBed.createComponent(HistorialcomprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
