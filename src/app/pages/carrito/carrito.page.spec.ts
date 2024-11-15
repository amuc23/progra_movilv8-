import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoPage } from './carrito.page';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

// Mock de ManejodbService con database y executeSql correctamente configurados
class MockManejodbService {
  database = {
    executeSql: (query: string, params: any[]) => {
      if (query.includes("WHERE d.id_venta = ? AND (p.estatus = 0)")) {
        return Promise.resolve({
          rows: {
            length: 1,
            item: (index: number) => ({
              id_producto: 1,
              nombre_prod: 'Producto sin stock',
            })
          }
        });
      }
      return Promise.resolve({ rows: { length: 0, item: (index: number) => ({}) } });
    }
  };

  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  verificarOCrearVenta(idUsuario: number) {
    return Promise.resolve(1);
  }
  obtenerCarroPorUsuario(idVenta: number) {
    return Promise.resolve([]);
  }
  agregarCantidad(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  restarCantidad(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  preciofinal(idVenta: number) {
    return Promise.resolve(0);
  }
  eliminarProductoDelCarrito(idVenta: number, idProducto: number) {
    return Promise.resolve();
  }
  borrarProductosSinStock() {
    return Promise.resolve();
  }
}

describe('CarritoPage', () => {
  let component: CarritoPage;
  let fixture: ComponentFixture<CarritoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoPage],
      imports: [RouterTestingModule],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useValue: { presentAlert: jasmine.createSpy('presentAlert') } },
        ChangeDetectorRef
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call borrarProductosSinStock and handle products without stock', async () => {
    await component.borrarProductosSinStock();
    expect(component['alertasService'].presentAlert).toHaveBeenCalledWith('ÉXITO', 'Productos sin stock eliminados del carrito');
  });
});
