import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarjuegoPage } from './agregarjuego.page';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; // Importar IonicModule y NavController

class MockNavController {
  navigateForward() {}
  navigateBack() {}
}

describe('AgregarjuegoPage', () => {
  let component: AgregarjuegoPage;
  let fixture: ComponentFixture<AgregarjuegoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarjuegoPage],
      imports: [FormsModule, IonicModule.forRoot()],
      providers: [
        ManejodbService,
        CamaraService,
        AlertasSilenciosasService,
        SQLite,
        { provide: Router, useValue: { navigate: () => {} } },
        { provide: NavController, useClass: MockNavController }, // Proveer MockNavController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarjuegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
