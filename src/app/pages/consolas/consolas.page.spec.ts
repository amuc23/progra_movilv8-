import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsolasPage } from './consolas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importa CUSTOM_ELEMENTS_SCHEMA
import { of } from 'rxjs';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchConsolas() {
    return of([{ nombre_prod: 'Consola 1' }, { nombre_prod: 'Consola 2' }]);
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string): Promise<void> {
    return Promise.resolve();
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('ConsolasPage', () => {
  let component: ConsolasPage;
  let fixture: ComponentFixture<ConsolasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsolasPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService },
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
    }).compileComponents();

    fixture = TestBed.createComponent(ConsolasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
