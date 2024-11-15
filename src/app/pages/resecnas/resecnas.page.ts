import { Component, OnInit } from '@angular/core';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resecnas',
  templateUrl: './resecnas.page.html',
  styleUrls: ['./resecnas.page.scss'],
})
export class ResecnasPage implements OnInit {
  resecnas: any[] = [];
  resecnasBaneadas: any[] = [];

  constructor(private manejodbService: ManejodbService, private alertController: AlertController) {}

  async ngOnInit() {
    await this.cargarResecnas();
    await this.cargarResecnasBaneadas();
  }

  async cargarResecnas() {
    const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
    if (idUsuario) {
      this.resecnas = await this.manejodbService.obtenerResecnasUsuario(idUsuario);
    }
  }

  async cargarResecnasBaneadas() {
    const idUsuario = await this.manejodbService.obtenerIdUsuarioLogueado();
    if (idUsuario) {
      this.resecnasBaneadas = await this.manejodbService.obtenerResecnasBaneadasConDetalles(idUsuario);
    }
  }
  

  async eliminarResecna(idResecna: string) {
    await this.manejodbService.eliminarResecnauser(idResecna);
    this.resecnas = this.resecnas.filter(resecna => resecna.id_resecna !== idResecna);
  }

  async eliminarResecnaBaneada(id_suspencion: string) {
    try {
      const eliminado = await this.manejodbService.eliminarResecnaBaneadauser(id_suspencion);
      if (eliminado) {
        await this.cargarResecnasBaneadas(); // Recarga la lista de reseñas baneadas si se elimina correctamente
      }
    } catch (error) {
      this.presentAlertError(error); // Muestra la alerta con el mensaje de error específico
    }
  }

  async presentAlertError(error: any) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: `No se pudo eliminar la reseña baneada. Detalles del error: ${error.message || error}`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
