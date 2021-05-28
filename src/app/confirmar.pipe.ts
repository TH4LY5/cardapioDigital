import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'confirmar'
})
export class ConfirmarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
