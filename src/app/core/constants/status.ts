import { EmployerStatus } from '../models/employer-status';
import { EmployeeStatusValue, EmployeeStatusText } from '../enums/employee-status';

export const employerStatusList: EmployerStatus[] = [
  { value: EmployeeStatusValue.Available, text: EmployeeStatusText.Available },
  { value: EmployeeStatusValue.InProgress, text: EmployeeStatusText.InProgress },
  { value: EmployeeStatusValue.OutOfWork, text: EmployeeStatusText.OutOfWork }
];
