import { Component, OnInit, Input } from '@angular/core';
import { EmployerCommentsService } from './employer-comments.service';
import { Comment } from 'src/app/core/models/comment';

@Component({
  selector: 'app-employer-comments',
  templateUrl: './employer-comments.component.html',
  styleUrls: ['./employer-comments.component.scss']
})
export class EmployerCommentsComponent implements OnInit {

  @Input() employerId = 1;

  constructor(private employerCommentsService: EmployerCommentsService) {}

  ngOnInit(): void {}

  getEmployerCommentsData(): Comment[] {
    return this.employerCommentsService.getEmployerCommentsData(this.employerId);
  }

}
