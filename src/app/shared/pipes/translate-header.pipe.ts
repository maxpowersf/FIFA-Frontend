import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateHeader'
})
export class TranslateHeaderPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value) {
      case 'name': return 'name';
      case 'year': return 'year';
      case 'noOfTeams': return 'nº teams';
      case 'tournamentTypeName': return 'tournament type';
      case 'confederationName': return 'confederation';
      default: return value;
    }
  }

}
