import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSpentTime'
})
export class OrderSpentTimePipe implements PipeTransform {

  transform(spentTimeSeconds: number): string {
    let days;
    let hours = Math.floor((spentTimeSeconds / 3600));
    const minutes = (Math.floor((spentTimeSeconds / 60))) % 60;

    if (hours > 24) {
      days = Math.floor(hours / 24);
      hours =  hours - (days * 24);

      return `${days} days ${hours} hours ${minutes} minutes`;
    }

    if (hours === 0) {
      return `${minutes} minutes`;
    } else {
      return `${hours} hours ${minutes} minutes`;
    }
  }

}
