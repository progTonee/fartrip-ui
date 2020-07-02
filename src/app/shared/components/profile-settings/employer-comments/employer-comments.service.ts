import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployerCommentsService {
  leaveCommentOpen = false;

  constructor() {}

  isLeaveCommentOpen(): boolean {
    return this.leaveCommentOpen;
  }

  setCommentOpen(leaveCommentOpen: boolean): void {
    this.leaveCommentOpen = leaveCommentOpen;
  }

}
