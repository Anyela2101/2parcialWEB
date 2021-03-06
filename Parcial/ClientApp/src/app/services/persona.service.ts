import {Inject, Injectable } from '@angular/core';
import {Persona} from '../controlVacuna/models/persona';
import {HttpClient} from '@angular/common/http';
import {tap, map, catchError} from 'rxjs/operators';
import {HandleHttpErrorService} from '../@base/handle-http-error.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  baseUrl:string
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl =baseUrl;
  }
  get(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.baseUrl + 'api/Persona')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Persona[]>('Consultar Persona', null))
        );
 }

  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl + 'api/Persona', persona)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Persona>('Registrar Persona', null))
        );
  }

  buscarPersona(identificacion:string): Observable<Persona>{
    return this.http.get<Persona>(this.baseUrl +'api/Persona/'+identificacion)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Persona>('buscar', null))
    );
  }
}
