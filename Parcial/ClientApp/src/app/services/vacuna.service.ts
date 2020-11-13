import { Injectable, Inject } from '@angular/core';
import {Vacuna} from '../controlVacuna/models/vacuna';
import {HttpClient} from '@angular/common/http';
import {tap, map, catchError} from 'rxjs/operators';
import {HandleHttpErrorService} from '../@base/handle-http-error.service';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VacunaService {
  baseUrl:string
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { 
    this.baseUrl =baseUrl;
  }

  get(): Observable<Vacuna[]> {
    return this.http.get<Vacuna[]>(this.baseUrl + 'api/Vacuna')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Vacuna[]>('Consultar Vacuna', null))
        );
 }

 post(vacuna: Vacuna): Observable<Vacuna> {
  return this.http.post<Vacuna>(this.baseUrl + 'api/Vacuna', vacuna)
      .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Vacuna>('Registrar Vacuna', null))
      );
}
}
