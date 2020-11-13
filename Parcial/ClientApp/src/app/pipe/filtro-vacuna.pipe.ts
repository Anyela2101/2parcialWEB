import { Pipe, PipeTransform } from '@angular/core';
import { Vacuna } from '../controlVacuna/models/vacuna';

@Pipe({
  name: 'filtroVacunas'
})
export class FiltroVacunaPipe implements PipeTransform {

  transform(vacunas: Vacuna[], searchText: string): any {
    if (searchText == null) return vacunas;
    return vacunas.filter(v=>v.nombreVacuna.toLowerCase().indexOf(searchText.toLowerCase())!==-1);
  }

}
