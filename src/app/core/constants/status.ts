import { Status } from '../models/status';
import { StatusValue, StatusText } from '../enums/status';

export const statusList: Status[] = [
  { value: StatusValue.Available, text: StatusText.Available },
  { value: StatusValue.InProgress, text: StatusText.InProgress },
  { value: StatusValue.OutOfWork, text: StatusText.OutOfWork }
];
