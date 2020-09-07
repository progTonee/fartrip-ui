import { EmployeeStatus } from '../models/employee-status.model';
import { EmployeeStatusValue, EmployeeStatusText } from '../enum/employee-status.enum';

export const employeeStatusList: EmployeeStatus[] = [
  { value: EmployeeStatusValue.Available, text: EmployeeStatusText.Available },
  { value: EmployeeStatusValue.InProgress, text: EmployeeStatusText.InProgress },
  { value: EmployeeStatusValue.OutOfWork, text: EmployeeStatusText.OutOfWork }
];
