import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { EmployerCommentsService } from '../employer-comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() data: Comment;

  constructor(private commentsService: EmployerCommentsService) {}

  ngOnInit(): void {}

  onDelete(): void {
    this.commentsService.deleteComment(this.data.id);
  }

}
