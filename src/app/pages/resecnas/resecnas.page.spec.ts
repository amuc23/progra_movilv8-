import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResecnasPage } from './resecnas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';  // Agrega RouterModule

class MockManejodbService {
  obtenerIdUsuarioLogueado() {
    return Promise.resolve(1);
  }
  obtenerResecnasUsuario(idUsuario: number) {
    return Promise.resolve([
      {
        id: '1',
        texto: 'Reseña de ejemplo',
        fecha: '2023-01-01',
      }
    ]);
  }
  eliminarResecnasUsuario(idR: number) {
    return Promise.resolve();
  }
}

describe('ResecnasPage', () => {
  let component: ResecnasPage;
  let fixture: ComponentFixture<ResecnasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResecnasPage],
      imports: [RouterModule, RouterModule.forRoot([])],  // Agrega RouterModule para routerLink
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Agrega CUSTOM_ELEMENTS_SCHEMA
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResecnasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
