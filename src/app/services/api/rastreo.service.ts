import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RastreoInterface } from 'src/app/models/rastreo.interface';
import { ResponseInterface } from 'src/app/models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class RastreoService {

  url: string = 'https://api-star-routing.onrender.com/';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    // Aquí agregamos el token a las cabeceras
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': token || ''
    });
  }

  getRastreoByPaquete(id: any): Observable<RastreoInterface> {
    let address = this.url + 'rastreo/paquete/' + id;
    const headers = this.getHeaders();
    return this.http.get<RastreoInterface>(address, { headers });
  }

  postRastreo(form: RastreoInterface): Observable<ResponseInterface> {
    let address = this.url + 'rastreo';
    const headers = this.getHeaders();
    return this.http.post<ResponseInterface>(address, form, { headers });
  }

  putRastreo(id: any): Observable<ResponseInterface> {
    let address = this.url + 'rastreo/' + id;
    const headers = this.getHeaders();
    return this.http.put<ResponseInterface>(address, id, { headers });
  }

  deleteRastreo(id: any): Observable<ResponseInterface> {
    let addres = this.url + 'rastreo/' + id.idPaquete;
    const headers = this.getHeaders();
    return this.http.delete<ResponseInterface>(addres, { headers });
  }
}
