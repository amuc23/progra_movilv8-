import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarjuegoPage } from './eliminarjuego.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  eliminarJuegos(id: number) {
    return Promise.resolve();
  }
}

describe('EliminarjuegoPage', () => {
  let component: EliminarjuegoPage;
  let fixture: ComponentFixture<EliminarjuegoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarjuegoPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
            getCurrentNavigation: () => ({ extras: { state: { juegoSelect: {} } } }),
          },
        },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agregamos esta línea
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
