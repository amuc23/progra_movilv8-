import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarconsolaPage } from './eliminarconsola.page';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importa CUSTOM_ELEMENTS_SCHEMA

class MockManejodbService {
  dbState() {
    return of(true);
  }
  eliminarConsola(id: number) {
    return Promise.resolve();
  }
}

describe('EliminarconsolaPage', () => {
  let component: EliminarconsolaPage;
  let fixture: ComponentFixture<EliminarconsolaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarconsolaPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate'), getCurrentNavigation: () => ({ extras: { state: { consolaSelect: {} } } }) } },
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA aquí
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarconsolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
