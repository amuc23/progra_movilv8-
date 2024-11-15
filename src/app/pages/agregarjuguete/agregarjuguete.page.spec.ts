import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarjuguetePage } from './agregarjuguete.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { CamaraService } from 'src/app/services/camara.service';
import { Router } from '@angular/router';

// Mock Services
class MockManejodbService {
  agregarJuguetes(nombre: string, precio: number, stock: number, descripcion: string, urlImagen: string) {
    return Promise.resolve();
  }
}

class MockCamaraService {
  takePicture() {
    return Promise.resolve('assets/img/test_image.jpg');
  }
}

class MockNavController {
  navigateForward = jasmine.createSpy('navigateForward');
}

describe('AgregarjuguetePage', () => {
  let component: AgregarjuguetePage;
  let fixture: ComponentFixture<AgregarjuguetePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarjuguetePage],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule
      ],
      providers: [
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: CamaraService, useClass: MockCamaraService },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
        { provide: NavController, useClass: MockNavController } // Proveedor Mock de NavController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarjuguetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
