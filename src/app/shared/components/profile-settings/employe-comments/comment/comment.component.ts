import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { EmployeeCommentsService } from '../employee-comments.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() data: Comment;

  constructor(private commentsService: EmployeeCommentsService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  getRole(): string {
    return this.localStorageService.get('role').toLowerCase();
  }

  onDelete(): void {
    this.commentsService.deleteComment(this.data.id);
  }

}
