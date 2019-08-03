import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateHeader'
})
export class TranslateHeaderPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value) {
      case 'name': return 'nombre';
      case 'year': return 'año';
      case 'noOfTeams': return 'nº equipos';
      case 'tournamentTypeName': return 'tipo de torneo';
      case 'confederationName': return 'confederación';
      default: return value;
    }
  }

}
