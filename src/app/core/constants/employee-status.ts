import { EmployeeStatus } from '../models/employee-status';
import { EmployeeStatusValue, EmployeeStatusText } from '../enums/employee-status';

export const employeeStatusList: EmployeeStatus[] = [
  { value: EmployeeStatusValue.Available, text: EmployeeStatusText.Available },
  { value: EmployeeStatusValue.InProgress, text: EmployeeStatusText.InProgress },
  { value: EmployeeStatusValue.OutOfWork, text: EmployeeStatusText.OutOfWork }
];
