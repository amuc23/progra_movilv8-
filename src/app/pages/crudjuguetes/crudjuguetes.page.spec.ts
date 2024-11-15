import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudjuguetesPage } from './crudjuguetes.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('CrudjuguetesPage', () => {
  let component: CrudjuguetesPage;
  let fixture: ComponentFixture<CrudjuguetesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule], // Configura IonicModule y RouterTestingModule
      declarations: [CrudjuguetesPage],
      providers: [
        ManejodbService,
        SQLite
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agrega esquemas
    }).compileComponents();

    fixture = TestBed.createComponent(CrudjuguetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
