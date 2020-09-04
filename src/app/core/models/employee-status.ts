import { EmployeeStatusValue, EmployeeStatusText } from '../enums/employee-status';

export interface EmployeeStatus {
  text: EmployeeStatusText;
  value: EmployeeStatusValue;
}
