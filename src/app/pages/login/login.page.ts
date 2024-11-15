import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertasSilenciosasService } from 'src/app/services/alertasilenciosa.service';
import { ManejodbService } from 'src/app/services/manejodb.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { AlertasService } from 'src/app/services/alertas.service'; // Importa AlertasService


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usernameunlogged: string = "";
  password: string = "";
  loginError: boolean = false;
  usuarioBaneadoError: boolean = false;

  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|`"'=-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\|`"'=-]{6,}$/;

  userpalalerta: any;

  arregloUsuarios: any[] = [
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
      id_rol: ''
    }
  ];

  constructor(private router: Router, 
              private bd: ManejodbService, 
              private silentalert: AlertasSilenciosasService,
              private alertasService: AlertasService, // Inyecta AlertasService 
              private autenticacion: AutenticacionService,
              private platform: Platform) {}

  async ionViewWillEnter() {
    await this.verificarSesionActivaOcerrarSesion();
    this.resetFields();

    // Manejar el evento de botón físico de retroceso
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.router.url === '/login') {
        // Bloquear la acción de retroceso en esta página
      }
    });
  }

  async ngOnInit() {
    this.userpalalerta = '';
    this.resetFields();
    await this.bd.crearBD();
    this.bd.dbState().subscribe(data => {
      if (data) {
        this.bd.fetchUsuarios().subscribe(res => {
          this.arregloUsuarios = res;
        });
      }
    });
  }

  async verificarSesionActivaOcerrarSesion() {
    const usuariosMantenerSesion = await this.bd.consultarUsuariosPorMantenerSesion();

    if (usuariosMantenerSesion.length === 0) {
      this.autenticacion.cerrarSesion();
    } else {
      const usuario = usuariosMantenerSesion[0];
      this.usernameunlogged = usuario.username;
      this.password = usuario.clave;
      await this.loggin(this.usernameunlogged, this.password);
    }
  }

  async loggin(user: string, clave: string) {
    if (user.trim() === '' || clave.trim() === '') {
        this.loginError = true;
        return;
    }

    await this.bd.consultarUsuariosLoggin(user, clave).then(async (found) => {
        this.userpalalerta = user;

        if (found && this.passwordPattern.test(clave)) {
            const isBaneado = await this.bd.validarUsuarioBaneado(user);
            if (!isBaneado) {
                // El usuario no está baneado, continúa con el inicio de sesión
                this.bd.actualizarEstadoUsuario(user).then(() => {
                    this.router.navigate(['/home']);
                    this.alertauser(this.userpalalerta);
                    this.resetFields();
                    this.loginError = false;
                    this.usuarioBaneadoError = false;
                }).catch(error => {
                    this.loginError = true;
                    this.resetFields();
                });
            } else {
                // El usuario está baneado, muestra el motivo del ban
                await this.weonbaneao(user);
                this.usuarioBaneadoError = true;
                this.loginError = false;
                this.resetFields();
            }
        } else {
            this.loginError = true;
            this.usuarioBaneadoError = false;
            this.resetFields();
        }
    }).catch(error => {
        this.loginError = true;
        this.usuarioBaneadoError = false;
        this.resetFields();
    });
  }

  async weonbaneao(user: string) {
    const motivo = await this.bd.consultarSuspencionUsuario(user);
    if (motivo) {
      await this.alertasService.presentAlert("Usuario Baneado", `Motivo de suspensión: ${motivo}`);
    } else {
      await this.alertasService.presentAlert("Usuario Baneado", "Su cuenta ha sido baneada.");
    }
  }

  alertauser(x: any) {
    this.silentalert.presentSilentToast(`Bienvenido ${x}`, 2000);
  }

  resetFields() {
    this.usernameunlogged = "";
    this.password = "";
  }
}
