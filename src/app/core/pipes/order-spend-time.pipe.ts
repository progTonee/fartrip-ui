import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSpendTime'
})
export class OrderSpendTimePipe implements PipeTransform {

  transform(spendTimeSeconds: number): string {
    let days;
    let hours = Math.floor((spendTimeSeconds / 3600));
    const minutes = (Math.floor((spendTimeSeconds / 60))) % 60;

    if (hours > 24) {
      days = Math.floor(hours / 24);
      hours =  hours - (days * 24);

      return `~${days} days ${hours} hours ${minutes} minutes`;
    }

    if (hours === 0) {
      return `~${minutes} minutes`;
    } else {
      if (minutes === 0) {
        return `~${hours} hours`;
      }

      return `~${hours} hours ${minutes} minutes`;
    }
  }

}
