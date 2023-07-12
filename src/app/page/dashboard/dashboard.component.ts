import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { Router } from '@angular/router';
import { Proveedor } from '../register-proveedor/interface';
import { SistemaService } from 'src/app/services/sistema.service';
import { Carne } from '../meat-characteristics/interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  proveedorId: number = 0;
  proveedorEncontrado: Proveedor | undefined;
  proveedoresEncontrados: Proveedor[] = [];
  carneEncontrada:Carne[]=[];
  carneGrafica:number=this.carneEncontrada.length;
  proveedorGrafica:number=this.proveedoresEncontrados.length;
  
  constructor(
    private router: Router,
    private sistemaService: SistemaService
  ) {}

  ngOnInit(): void {
    this.obtenerProveedores();
    this.obtenerCarnes();
  }

  public doughnutChartLabels: string[] = [
    'Carnes',
    'Proveedores',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [this.carneGrafica, this.proveedorGrafica],

       },
    ],
  };
  public containerStyle = {
    width: '450px',
    height: '450px',
  };
  public doughnutChartType: ChartType = 'doughnut';

  public canvasStyle = {
    width: '200px',
    height: '200px',
  };
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
  onRoutes(route:string): void {
    if (route=="register-proveedor") {
      this.router.navigate(['/register-proveedor']);
    }else if (route=="meat-characteristics") {
      this.router.navigate(['/meat-characteristics']);
    } else if(route=="calendario"){
      this.router.navigate(['/calendario']);
    } else if(route=="control-calidad"){
      this.router.navigate(['/control-calidad'])
    }
  }
  buscarProveedor(): void {
    if (this.proveedorId) {
      this.sistemaService.buscarProveedor(this.proveedorId).subscribe(
        (proveedor: Proveedor) => {
          this.proveedorEncontrado = proveedor;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Ingrese un ID de proveedor válido');
    }
  }
  obtenerProveedores(): void {
    this.sistemaService.obtenerProveedores().subscribe(
      (proveedores: Proveedor[]) => {
        this.proveedoresEncontrados = proveedores;
        this.proveedorGrafica = this.proveedoresEncontrados.length;
        this.actualizarChartData();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  obtenerCarnes(): void {
    this.sistemaService.obtenerCarne().subscribe(
      (carne: Carne[]) => {
        this.carneEncontrada = carne;
        this.carneGrafica = this.carneEncontrada.length;
        this.actualizarChartData();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  actualizarPagina(): void {
    location.reload();
  }
  actualizarChartData(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: [this.carneGrafica, this.proveedorGrafica] }],
    };
  }
}
