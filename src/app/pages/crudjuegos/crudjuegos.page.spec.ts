import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudjuegosPage } from './crudjuegos.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing'; // Importar RouterTestingModule
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

class MockManejodbService {
  dbState() {
    return of(true);
  }
  fetchJuegos() {
    return of([]);
  }
}

class MockAlertasService {
  presentAlert(title: string, message: string) {}
}

describe('CrudjuegosPage', () => {
  let component: CrudjuegosPage;
  let fixture: ComponentFixture<CrudjuegosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule], // Configura IonicModule y RouterTestingModule
      declarations: [CrudjuegosPage],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AlertasService, useClass: MockAlertasService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega los esquemas necesarios
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudjuegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
