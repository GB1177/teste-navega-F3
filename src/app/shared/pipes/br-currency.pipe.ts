import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brCurrency',
  standalone: true,
})
export class BrCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    return (
      'R$ ' +
      value
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  }
}
