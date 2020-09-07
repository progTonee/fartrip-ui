import { EmployeeStatusValue, EmployeeStatusText } from '../enum/employee-status.enum';

export interface EmployeeStatus {
  text: EmployeeStatusText;
  value: EmployeeStatusValue;
}
