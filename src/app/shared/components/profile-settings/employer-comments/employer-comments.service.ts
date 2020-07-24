import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Comment } from 'src/app/core/models/comment';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmployerCommentsService {
  comments: Comment[];
  leaveCommentOpen = false;

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {}

  loadComments(employeeAccountId: string): any {
    return this.httpService.getEmployeeComments(employeeAccountId)
      .subscribe(response => this.setComments(response));
  }

  createComment(emplyeeAccountId: string, comment: Comment): void {
    this.httpService.createEmployeeComment(emplyeeAccountId, this.localStorageService.get('id'), comment)
      .subscribe(response => this.setComment(response));
  }

  setComments(comments) {
    this.comments = comments;
  }

  setComment(comment) {
    this.comments.unshift(comment);
  }

  getComments(): Comment[] {
    return this.comments.reverse();
  }

  isLeaveCommentOpen(): boolean {
    return this.leaveCommentOpen;
  }

  setCommentOpen(leaveCommentOpen: boolean): void {
    this.leaveCommentOpen = leaveCommentOpen;
  }

}
