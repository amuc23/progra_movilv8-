import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'; // Muestra más de una tarjeta parcialmente visible
import { YouTubeService } from 'src/app/services/youtube.service'; // Asegúrate de que la ruta sea correcta
import { ManejodbService } from '../services/manejodb.service';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { ComicsService } from 'src/app/services/comics.service'; // Importamos el servicio de cómics
import { AlertasService } from 'src/app/services/alertas.service'; // Servicio de alertas

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  slideOpts = {
    slidesPerView: 1.9, // Muestra más de una tarjeta parcialmente visible
    spaceBetween: 4,    // Espacio entre las tarjetas
    centeredSlides: true,
    loop: true,         // Hace que las tarjetas no se repitan en un bucle
  };

  private swiper: Swiper | null = null;

  // COLECCIONES DE PRODUCTOS
  colec_juegos = [
    { nomJ: 'Hollow Knight', precioJ: '$15.000', imgJ: 'assets/img/juegos/caratula-hollow.jpeg', videoId: 'y2EwIKVMTuU' },
    { nomJ: 'Megaman11', precioJ: '$30.000', imgJ: 'assets/img/juegos/caratula-megaman11.jpeg', videoId: 'sEjxVfWzgVI' },
    { nomJ: 'Skyrim', precioJ: '$20.000', imgJ: 'assets/img/juegos/Skyrim_Cover.jpeg', videoId: 'JSRtYpNRoN0&t=9s' },
    { nomJ: 'Lies of pi', precioJ: '$40.000', imgJ: 'assets/img/juegos/caratula-liesofp.jpeg', videoId: 'TYr1x25Z1Ak' },
    { nomJ: 'Kakarot', precioJ: '$50.900', imgJ: 'assets/img/juegos/dbz-kakaroto-portada.jpeg', videoId: 's0Xe1ggWDUI' },
    { nomJ: 'Gears Of War', precioJ: '$54.000', imgJ: 'assets/img/juegos/gears of wars.jpeg', videoId: 'wy8LRlS1SCc' }
  ];

  colec_consolas = [
    { nomC: 'Ps2', precioC: '$150.000', imgC: 'assets/img/consolas/ps2-consola.jpeg', videoId: 'Hvcps5dFzfc' },
    { nomC: '2dsXL', precioC: '$210.000', imgC: 'assets/img/consolas/2dsXL-consola.jpeg', videoId: '6ua8CRQaBv4' },
    { nomC: 'Switch', precioC: '$400.000', imgC: 'assets/img/consolas/nintendosw-1.jpeg', videoId: 'iS-1tDfLxRQ' },
    { nomC: 'Ps4', precioC: '$400.000', imgC: 'assets/img/consolas/ps4-1.jpeg', videoId: 'NygHJeiVg10' },
    { nomC: 'Sega Genesis', precioC: '$80.000', imgC: 'assets/img/consolas/sega-genesis-consola.jpeg', videoId: '3YcRcXiuYOg' },
    { nomC: 'Wii', precioC: '$120.000', imgC: 'assets/img/consolas/wii-1.jpeg', videoId: 'mBOaO7QTFMQ' }
  ];

  colec_juguetes = [
    { nomJT: 'Batman', precioJT: '$550.000', imgJT: 'assets/img/juguetes/Batman-juguete.jpg', videoId: 'ofZFAqnlVvY' },
    { nomJT: 'C. Sanders', precioJT: '$20.000', imgJT: 'assets/img/juguetes/coronel-juguete.jpg', videoId: 'joDwiMy8TT4' },
    { nomJT: 'Kirby Amiibo', precioJT: '$85.000', imgJT: 'assets/img/juguetes/akirby-juguete.jpeg', videoId: '8WPw9U_7PXE' },
    { nomJT: 'Kratos', precioJT: '$40.000', imgJT: 'assets/img/juguetes/Kratos2.jpg', videoId: 'JJ1arWpbFmM' },
    { nomJT: 'Samus', precioJT: '$50.600', imgJT: 'assets/img/juguetes/samus1.jpg', videoId: 'jNbGAq_44sQ' },
    { nomJT: 'Spiderman', precioJT: '$50.99', imgJT: 'assets/img/juguetes/spiderman-juguete.jpg', videoId: 'MlbYeIxjSSI' }
  ];

  colec_comics: any[] = []; // Aquí se cargarán los cómics desde el servicio

  arregloUsuarioConectado: any[] = [];

  constructor(
    private youtubeService: YouTubeService,
    private comicsService: ComicsService,
    private bd: ManejodbService,
    private router: Router,
    private autenticacionService: AutenticacionService,
    private alertService: AlertasService // Servicio de alertas
  ) { }

  async ngAfterViewInit() {
    await this.consultarUsuarios(); // Carga el usuario conectado
    this.loadComics(); // Carga de cómics al inicializar la vista
    this.mostrarNotificacionesPendientes(); // Mostrar notificaciones pendientes
  }

  verTrailer(videoId: string) {
    this.youtubeService.openVideo(videoId);
  }

  async loadComics() {
    try {
      const storedComics = localStorage.getItem('comics');
      if (storedComics) {
        this.colec_comics = JSON.parse(storedComics);
      } else {
        const res = await this.comicsService.getComics().toPromise();
        this.colec_comics = res;
        localStorage.setItem('comics', JSON.stringify(res));
      }

      if (!this.swiper) {
        setTimeout(() => {
          this.swiper = new Swiper('.swiper-container', this.slideOpts);
        }, 100); // Espera un poco para que el DOM esté listo
      }
    } catch (error) {
      console.error('Error al cargar cómics:', error);
    }
  }

  async consultarUsuarios() {
    try {
      this.arregloUsuarioConectado = await this.bd.consultarUsuariosPorEstadoConectado();
    } catch (error) {
      console.error('Error al consultar usuarios por estado:', error);
    }
  }

  mostrarNotificacionesPendientes() {
    const usuarioLogueadoId = this.arregloUsuarioConectado[0]?.id_usuario;

    if (!usuarioLogueadoId) return;

    // Filtrar y mostrar notificaciones pendientes para el usuario actual
    const notificacionesUsuario = this.bd.notificacionesPendientes.filter(
      notificacion => notificacion.idUsuario === usuarioLogueadoId
    );

    notificacionesUsuario.forEach(notificacion => {
      // Mostrar cada notificación usando el servicio de alertas
      this.alertService.presentAlert('Notificación', notificacion.mensaje);
    });

    // Remover las notificaciones mostradas del arreglo
    this.bd.notificacionesPendientes = this.bd.notificacionesPendientes.filter(
      notificacion => notificacion.idUsuario !== usuarioLogueadoId
    );
  }

  async cerrarSesion() {
    try {
      await this.autenticacionService.cerrarSesion(); // Llama a cerrar sesión manualmente
      this.arregloUsuarioConectado = []; // Limpiar el arreglo después de cerrar sesión
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
