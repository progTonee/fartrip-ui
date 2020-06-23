import { EmployerStatus } from '../models/employer-status';
import { EmployerStatusValue, EmployerStatusText } from '../enums/employer-status';

export const employerStatusList: EmployerStatus[] = [
  { value: EmployerStatusValue.Available, text: EmployerStatusText.Available },
  { value: EmployerStatusValue.InProgress, text: EmployerStatusText.InProgress },
  { value: EmployerStatusValue.OutOfWork, text: EmployerStatusText.OutOfWork }
];
