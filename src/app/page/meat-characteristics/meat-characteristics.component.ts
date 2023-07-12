import { Component } from '@angular/core';
import { Carne } from './interface';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-meat-characteristics',
  templateUrl: './meat-characteristics.component.html',
  styleUrls: ['./meat-characteristics.component.css']
})
export class MeatCharacteristicsComponent {
  showAlert:boolean=false;
  carnes:Carne={
    IDCarne:0,
    Tipo:'',
    Procedencia:'',
    FechaRecepcion:new Date(),
    nombreDeCorte:''
  }
  constructor(private sistemaService:SistemaService){}
  registrarCarne():void{
    this.sistemaService.registrarCarne(this.carnes)
    .subscribe(
      (response)=>{
        this.showAlert=true;
        setTimeout(()=>{
          this.hideAlert();
        },1000)
        console.log('Carne registrada',response);
      },
      (error)=>{
        console.error('Error al registrar la carne',error)
      }
    )
  }
  hideAlert(): void {
    this.showAlert = false;
  }

}
