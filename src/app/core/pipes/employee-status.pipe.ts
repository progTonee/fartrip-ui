import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeStatusText, EmployeeStatusValue } from '../enum/employee-status.enum';

@Pipe({
  name: 'employeeStatus'
})
export class EmployeeStatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case EmployeeStatusValue.Available: {
        return EmployeeStatusText.Available;
      }
      case EmployeeStatusValue.InProgress: {
        return EmployeeStatusText.InProgress;
      }
      case EmployeeStatusValue.OutOfWork: {
        return EmployeeStatusText.OutOfWork;
      }
    }
  }

}
