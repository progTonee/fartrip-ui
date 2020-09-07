import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatusValue, OrderStatusLabel } from '../enum/order.enum';

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
