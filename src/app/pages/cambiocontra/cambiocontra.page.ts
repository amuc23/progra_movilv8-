import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';
import { ManejodbService } from 'src/app/services/manejodb.service';

@Component({
  selector: 'app-cambiocontra',
  templateUrl: './cambiocontra.page.html',
  styleUrls: ['./cambiocontra.page.scss'],
})
export class CambiocontraPage {
  claveActual: string = '';
  claveNueva: string = '';
  confirmPassword: string = '';
  claveCorrecta: boolean = false;
  errorMessage: string = '';

  // Definir la variable que contendrá los datos del usuario conectado
  arregloUsuarioConectado: any[] = [
    {
      id_usuario: '',
      rut_usuario: '',
      nombres_usuario: '',
      apellidos_usuario: '',
      username: '',
      clave: '',
      correo: '',
      token_recup_clave: '',
      foto_usuario: '',
      estado_user: '',
      userlogged: '',
      mantener_sesion: 0,
      id_rol: ''
    }
  ];

  // Patrón de validación para la nueva contraseña
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|`"'=-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\|`"'=-]{6,}$/;

  constructor(
    private router: Router,
    private bd: ManejodbService,
    private alertasService: AlertasService
  ) {}

  async verificarContrasenaActual() {
    await this.ValidarClaveUsuario();
    if (this.claveActual === this.arregloUsuarioConectado[0].clave) {
      this.claveCorrecta = true;
      this.errorMessage = ''; // Limpiar cualquier mensaje de error anterior
    } else {
      this.errorMessage = 'La contraseña actual es incorrecta';
    }
  }

  async cambiarContrasena() {
    // Eliminar espacios en blanco al inicio y al final de las contraseñas
    this.claveActual = this.claveActual.trim();
    this.claveNueva = this.claveNueva.trim();
    this.confirmPassword = this.confirmPassword.trim();

    if (this.claveNueva === this.claveActual) {
      this.errorMessage = 'La nueva contraseña no puede ser igual a la contraseña actual';
      return;
    }

    if (!this.passwordPattern.test(this.claveNueva)) {
      this.errorMessage = 'La nueva contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial';
      return;
    }

    if (this.claveNueva !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (/\s/.test(this.claveNueva)) {
      this.errorMessage = 'La clave no puede contener espacios en blanco.';
      return;
    }

    this.errorMessage = '';
    await this.bd.cambiarContrasena(this.arregloUsuarioConectado[0].id_usuario, this.claveNueva);
    this.alertasService.presentAlert('Listo', 'Contraseña cambiada con éxito');
    this.arregloUsuarioConectado = [];
    this.router.navigate(['/perfil']);
  }

  cancelar() {
    this.arregloUsuarioConectado = [];
    this.router.navigate(['/perfil']);
  }

  async ValidarClaveUsuario() {
    this.arregloUsuarioConectado = await this.bd.consultarUsuariosPorEstadoConectado();
  }
}

