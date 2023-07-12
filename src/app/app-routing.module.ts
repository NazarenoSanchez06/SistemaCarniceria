import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/auth/login/login.component';
import { DashboardComponent } from '../app/page/dashboard/dashboard.component';
import { MeatCharacteristicsComponent } from '../app/page/meat-characteristics/meat-characteristics.component';
import { RegisterProveedorComponent } from '../app/page/register-proveedor/register-proveedor.component';
import { CalendarioComponent } from './page/calendario/calendario.component';
import { ControlCalidadComponent } from './page/control-calidad/control-calidad.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meat-characteristics', component: MeatCharacteristicsComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'register-proveedor', component: RegisterProveedorComponent },
  { path: 'control-calidad', component: ControlCalidadComponent },
  { path: '**', redirectTo: '/login' } // Redirigir cualquier ruta no coincidente a LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  
export class AppRoutingModule { }
