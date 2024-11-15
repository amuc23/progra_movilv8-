import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminresecnasPage } from './adminresecnas.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { RouterModule } from '@angular/router';  // Importa RouterModule para las pruebas
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminresecnasPage', () => {
  let component: AdminresecnasPage;
  let fixture: ComponentFixture<AdminresecnasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminresecnasPage],
      imports: [
        RouterModule.forRoot([]),  // Incluye RouterModule para manejar routerLink
      ],
      providers: [
        ManejodbService,
        SQLite
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]  // Agrega schemas para suprimir errores
    }).compileComponents();

    fixture = TestBed.createComponent(AdminresecnasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
