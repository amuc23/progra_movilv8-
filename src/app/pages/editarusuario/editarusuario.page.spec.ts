import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarusuarioPage } from './editarusuario.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

const SQLiteMock = {
  create: () => Promise.resolve({ /* mock implementation if needed */ })
};

describe('EditarusuarioPage', () => {
  let component: EditarusuarioPage;
  let fixture: ComponentFixture<EditarusuarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarusuarioPage],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        IonicModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { queryParams: of({}) }
        },
        { provide: SQLite, useValue: SQLiteMock }  // Use the SQLite mock here
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarusuarioPage);
    component = fixture.componentInstance;
    component.usuarioLlego = {};  // Initialize with an empty object
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

