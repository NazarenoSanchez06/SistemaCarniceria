import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  onLogin(): void {
    // Lógica de autenticación aquí...
    
    // Redireccionar al Dashboard
    this.router.navigate(['/dashboard']);
  }
  

}
