import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComicdetallePage } from './comicdetalle.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComicsService } from 'src/app/services/comics.service';
import { RouterTestingModule } from '@angular/router/testing'; // Importar RouterTestingModule
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ComicdetallePage', () => {
  let component: ComicdetallePage;
  let fixture: ComponentFixture<ComicdetallePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule], // Agregar RouterTestingModule
      declarations: [ComicdetallePage],
      providers: [
        ComicsService,
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => '1'  // Cambia '1' por el ID que necesites para la prueba
            })
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar esquemas
    }).compileComponents();

    fixture = TestBed.createComponent(ComicdetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
