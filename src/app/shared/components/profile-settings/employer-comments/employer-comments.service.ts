import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Comment } from 'src/app/core/models/comment';

@Injectable({
  providedIn: 'root'
})
export class EmployerCommentsService {
  comments: Comment[];
  leaveCommentOpen = false;

  constructor(private httpService: HttpService) {}

  loadComments(accountId: string): any {
    return this.httpService.getEmployeeComments(accountId)
      .subscribe(response => this.setComments(response));
  }

  setComments(comments) {
    this.comments = comments;
  }

  getComments(): Comment[] {
    return this.comments;
  }

  isLeaveCommentOpen(): boolean {
    return this.leaveCommentOpen;
  }

  setCommentOpen(leaveCommentOpen: boolean): void {
    this.leaveCommentOpen = leaveCommentOpen;
  }

}
