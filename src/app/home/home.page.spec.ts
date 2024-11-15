import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { YouTubeService } from 'src/app/services/youtube.service';
import { ManejodbService } from '../services/manejodb.service';
import { AutenticacionService } from '../services/autenticacion.service';
import { ComicsService } from 'src/app/services/comics.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

// Mock de los servicios
class MockYouTubeService {
  openVideo(videoId: string) {}
}

class MockManejodbService {
  dbState() {
    return {
      subscribe: (callback: (data: boolean) => void) => callback(true)
    };
  }
  consultarUsuariosPorEstadoConectado() {
    return Promise.resolve([]);
  }
}

class MockAutenticacionService {
  cerrarSesion() {
    return Promise.resolve();
  }
}

class MockComicsService {
  getComics() {
    return of([]);
  }
}

class MockNavController {
  navigateForward(url: string) {}
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule, RouterTestingModule], // Agregar RouterTestingModule
      providers: [
        { provide: YouTubeService, useClass: MockYouTubeService },
        { provide: ManejodbService, useClass: MockManejodbService },
        { provide: AutenticacionService, useClass: MockAutenticacionService },
        { provide: ComicsService, useClass: MockComicsService },
        { provide: NavController, useClass: MockNavController }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA] // Agregar esquemas
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
