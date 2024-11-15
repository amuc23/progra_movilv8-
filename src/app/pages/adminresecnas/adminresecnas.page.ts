import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { Resecnascrud } from 'src/app/services/resecnascrud';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminresecnas',
  templateUrl: './adminresecnas.page.html',
  styleUrls: ['./adminresecnas.page.scss'],
})
export class AdminresecnasPage implements OnInit {
  arregloResecnasPalCrud: Resecnascrud[] = [];

  constructor(
    private bd: ManejodbService,
    private router: Router,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    this.bd.dbState().subscribe((data) => {
      if (data) {
        this.traeLaWa2();
      }
    });
  }

  async traeLaWa2() {
    this.arregloResecnasPalCrud = await this.bd.obtenerResecnas();
  }

  async eliminarResecnaConMotivo(resecna: Resecnascrud) {
    const alert = await this.alertController.create({
      header: `Eliminar reseña de "${resecna.nombre_prod}"`,
      message: `Ingresa el motivo para eliminar la reseña de "${resecna.nombre_prod}"`,
      inputs: [
        {
          name: 'motivo',
          type: 'text',
          placeholder: 'Escribe el motivo de la eliminación',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: async (data) => {
            const motivo = data.motivo;
            if (motivo) {
              await this.bd.banearResecna(
                resecna.id_resecna,
                resecna.id_usuario,
                motivo
              );
              this.arregloResecnasPalCrud = this.arregloResecnasPalCrud.filter(
                (r) => r.id_resecna !== resecna.id_resecna
              );
            }
          },
        },
      ],
    });
    await alert.present();
  }
}
