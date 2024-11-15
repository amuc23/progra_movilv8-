import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarusuarioPage } from './agregarusuario.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertasService } from 'src/app/services/alertas.service';
import { CamaraService } from 'src/app/services/camara.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarusuarioPage', () => {
  let component: AgregarusuarioPage;
  let fixture: ComponentFixture<AgregarusuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarusuarioPage],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule
      ],
      providers: [
        ManejodbService,
        AlertasService,
        CamaraService,
        SQLite,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
