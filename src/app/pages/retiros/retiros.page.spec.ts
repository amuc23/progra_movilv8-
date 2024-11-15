import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetirosPage } from './retiros.page';
import { IonicModule } from '@ionic/angular';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute

class SQLiteMock {
  create() {
    return Promise.resolve({});
  }
}

class ManejodbServiceMock {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }

  consultarRetiros(idUser: number) {
    return Promise.resolve([
      {
        id_venta: '1',
        fecha_venta: '2024-11-08',
        total: '100',
        estado_retiro: 'pendiente',
        username: 'test_user',
        id_usuario: idUser,
        id_estado: '1',
      },
    ]);
  }
}

describe('RetirosPage', () => {
  let component: RetirosPage;
  let fixture: ComponentFixture<RetirosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetirosPage],
      imports: [IonicModule.forRoot(), FormsModule, RouterModule],
      providers: [
        { provide: SQLite, useClass: SQLiteMock },
        { provide: ManejodbService, useClass: ManejodbServiceMock },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }  // Proveer un mock de ActivatedRoute
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(RetirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
