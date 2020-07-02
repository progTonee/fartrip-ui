import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderDistance'
})
export class OrderDistancePipe implements PipeTransform {

  transform(distance: number): string {
    const kilometers = Math.floor(distance / 1000);
    const metters = distance % 1000;

    if (!kilometers) {
      return `${metters} m`;
    }
    if (!metters) {
      return `${kilometers} km`;
    }

    return `${kilometers} km ${metters} m`;
  }

}
