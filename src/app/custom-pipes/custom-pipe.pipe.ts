import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: any, times: number = 1): string {
    return '-'.repeat(times) + value + '-'.repeat(times);
  }
}
