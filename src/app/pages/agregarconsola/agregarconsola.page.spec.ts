import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarconsolaPage } from './agregarconsola.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock de NavController para evitar problemas con 'subscribe'
class MockNavController {
  navigateForward = jasmine.createSpy('navigateForward');
  navigateBack = jasmine.createSpy('navigateBack');
}

describe('AgregarconsolaPage', () => {
  let component: AgregarconsolaPage;
  let fixture: ComponentFixture<AgregarconsolaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarconsolaPage],
      imports: [IonicModule.forRoot()],
      providers: [
        ManejodbService,
        CamaraService,
        AlertasService,
        SQLite,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: NavController, useClass: MockNavController } // Usa el mock de NavController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarconsolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
