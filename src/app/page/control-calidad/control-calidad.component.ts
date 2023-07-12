import { Component, OnInit } from '@angular/core';
import { Carne } from '../meat-characteristics/interface';
import { Router } from '@angular/router';
import { SistemaService } from 'src/app/services/sistema.service';
import { ControlCalidad } from './interface';


@Component({
  selector: 'app-control-calidad',
  templateUrl: './control-calidad.component.html',
  styleUrls: ['./control-calidad.component.css']
})
export class ControlCalidadComponent implements OnInit {
  carneEncontrada:Carne[]=[];
  cCalidadEnontrado:any[]=[];
  showAlert:boolean=false;
  controlCalidad:ControlCalidad={
    IDControl :0,
    IDCarne:0,
    FechaControl:new Date(),
    Resultado:''
  }

       
    constructor(
    private router: Router,
    private sistemaService: SistemaService
  ) {}
  
  ngOnInit(): void {
    this.obtenerCarnes();
    this.obtenerCCalidad();
  }
    obtenerCarnes(): void {
    this.sistemaService.obtenerCarne().subscribe(
      (carne: Carne[]) => {
        this.carneEncontrada = carne;
      },
      (error) => {
        console.error(error);
      }
    );
  }
    obtenerCCalidad(): void {
    this.sistemaService.obtenerCCalidad().subscribe(
      (controlCalidad: ControlCalidad[]) => {
        this.cCalidadEnontrado = controlCalidad;
        console.log(controlCalidad);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  registrarCCalidad():void{
    this.sistemaService.registrarCCalidad(this.controlCalidad)
    .subscribe(
      (response)=>{
        this.showAlert=true;
        setTimeout(()=>{
          this.hideAlert();
        },1000)
        console.log('Control de calidad Registrado',response);
      },
      (error)=>{
        console.error('Error al registrar el control de calidad',error)
      }
    )
  }
  hideAlert(): void {
    this.showAlert = false;
  }
}
