import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';
import { User } from '../../../../../core/models/user';
import { UsersService } from 'src/app/modules/user/users.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() data: Comment;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  getCommentRating(): any[] {
    return new Array(this.data.rating).fill(null);
  }

  getCommentDate(): string {
    const date = new Date(this.data.date);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  getUserData(): User {
    return this.usersService.getUserData(this.data.userId);
  }

}
