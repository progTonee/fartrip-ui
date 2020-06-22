import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() data: Comment;

  constructor() {}

  ngOnInit(): void {}

  getCommentRating(): any[] {
    return new Array(this.data.rating).fill(null);
  }

}
