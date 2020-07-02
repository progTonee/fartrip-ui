import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatusValue, OrderStatusLabel } from '../enums/order';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(status: string): any {
    switch (status) {
      case OrderStatusValue.New: {
        return OrderStatusLabel.New;
      }
      case OrderStatusValue.InProgress: {
        return OrderStatusLabel.InProgress;
      }
      case OrderStatusValue.Completed: {
        return OrderStatusLabel.Completed;
      }
      case OrderStatusValue.Canceled: {
        return OrderStatusLabel.Canceled;
      }
    }
  }

}
