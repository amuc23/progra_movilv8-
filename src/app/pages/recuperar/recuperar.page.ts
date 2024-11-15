import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ManejodbService } from 'src/app/services/manejodb.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  nombreUsuario: string = '';
  respuestaSeguridad: string = '';
  errorMessage: string = '';
  usuarioValidado: boolean = false;
  usuarioVA: any;
  preguntaSeguridad: string = ''; // Pregunta de seguridad a mostrar

  constructor(private router: Router, private dbService: ManejodbService) {}

  ngOnInit() {}

  // Método para validar el nombre de usuario y cargar la pregunta de seguridad
  async validarUsuario() {
    try {
      const usuario = await this.dbService.consultarUsuarioPorNombre(this.nombreUsuario);
      
      if (usuario) {
        this.usuarioValidado = true;
        this.usuarioVA = usuario;
        this.errorMessage = '';
        
        // Obtén la pregunta de seguridad
        const seguridad = await this.dbService.consultarPreguntasSeguridad(usuario.id_usuario);
        if (seguridad) {
          this.preguntaSeguridad = seguridad.pregunta_seguridad;
        } else {
          this.errorMessage = 'No se encontró una pregunta de seguridad para este usuario.';
        }
      } else {
        this.errorMessage = 'Nombre de usuario no válido.';
        this.usuarioValidado = false;
      }
    } catch (error) {
      console.error(error);
      this.errorMessage = 'Error al validar el usuario.';
    }
  }

  // Método para validar la respuesta de seguridad
  async validarRespuesta() {
    if (this.respuestaSeguridad.trim() === '') {
      this.errorMessage = 'La respuesta no puede quedar vacía.';
      return;
    }

    const isValid = await this.dbService.validarRespuestaSeguridad(this.nombreUsuario, this.respuestaSeguridad.trim());

    if (!isValid) {
      this.errorMessage = 'Respuesta incorrecta.';
    } else {
      this.errorMessage = '';
      this.mandarUser(this.usuarioVA);
    }
  }

  // Método para enviar el usuario a la página de cambio de clave
  mandarUser(usuario: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        usuario: usuario,
      },
    };
    this.router.navigate(['/cambioclave'], navigationExtras);
  }

  // Método para cancelar y volver a la página de inicio de sesión
  cancelar() {
    this.router.navigate(['/login']);
  }
}
