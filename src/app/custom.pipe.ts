import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('in pipe ', value);
    if(value) {

      return value.toUpperCase();
    } else
    return null;

  }

}
