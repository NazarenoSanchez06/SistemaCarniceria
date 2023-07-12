import { Component } from '@angular/core';
import { Proveedor } from './interface';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-register-proveedor',
  templateUrl: './register-proveedor.component.html',
  styleUrls: ['./register-proveedor.component.css']
})
export class RegisterProveedorComponent  {
  showAlert: boolean = false;
  proveedor: Proveedor = {
    IDProveedor: 0,
    Nombre: '',
    Direccion: '',
    Telefono: '',
    DNI: '',
    Email: ''
  };
  
  constructor(private sistemaService: SistemaService) {}

  registrarProveedor(): void {
    this.sistemaService.registrarProveedor(this.proveedor)
      .subscribe(
        (response) => {
          this.showAlert = true;
          setTimeout(() => {
            this.hideAlert();
          }, 1000);
          console.log('Proveedor registrado:', response);
        },
        (error) => {
          console.error('Error al registrar el proveedor:', error);
        }
      );
  }

  hideAlert(): void {
    this.showAlert = false;
  }
}
