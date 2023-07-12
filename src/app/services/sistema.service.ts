import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../page/register-proveedor/interface';
import { Carne } from '../page/meat-characteristics/interface';
import { ControlCalidad } from '../page/control-calidad/interface';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {
  private baseUrl = 'http://localhost:7000/';

  constructor(private http: HttpClient) { }

  buscarProveedor(id: number): Observable<Proveedor> {
    const url = `${this.baseUrl}proveedores/${id}`;
    return this.http.get<Proveedor>(url);
  }
// proveedor
  registrarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    const url=`${this.baseUrl}proveedores`
    return this.http.post<Proveedor>(url, proveedor);
  }

  obtenerProveedores(): Observable<Proveedor[]> {
    const url=`${this.baseUrl}proveedores`
    return this.http.get<Proveedor[]>(url);
  }
// carne
  registrarCarne(carne: Carne): Observable<Carne> {
    const url=`${this.baseUrl}carnes`
    return this.http.post<Carne>(url, carne);
  }

  obtenerCarne(): Observable<Carne[]> {
    const url=`${this.baseUrl}carnes`
    return this.http.get<Carne[]>(url);
  }
  //ccalidad
  registrarCCalidad(controlCalidad: ControlCalidad): Observable<ControlCalidad> {
    const url=`${this.baseUrl}control-calidad`
    return this.http.post<ControlCalidad>(url, controlCalidad);
  }

  obtenerCCalidad(): Observable<ControlCalidad[]> {
    const url=`${this.baseUrl}control-calidad`
    return this.http.get<ControlCalidad[]>(url);
  }
}
