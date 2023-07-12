import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RegisterProveedorComponent } from './page/register-proveedor/register-proveedor.component';
import { MeatCharacteristicsComponent } from './page/meat-characteristics/meat-characteristics.component';
import { QuoteComponent } from './page/quote/quote.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FechaPipe } from './pipe/fecha.pipe';
import { CalendarioComponent } from './page/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ControlCalidadComponent } from './page/control-calidad/control-calidad.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    RegisterProveedorComponent,
    MeatCharacteristicsComponent,
    QuoteComponent,
    FechaPipe,
    CalendarioComponent,
    ControlCalidadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
