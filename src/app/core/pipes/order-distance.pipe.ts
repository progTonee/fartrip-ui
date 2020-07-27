import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderDistance'
})
export class OrderDistancePipe implements PipeTransform {

  transform(distance: number): string {
    return `~${distance} km`;
  }

}
