import { Component, OnInit, Input } from '@angular/core';
import { EmployerCommentsService } from './employer-comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-comments',
  templateUrl: './employer-comments.component.html',
  styleUrls: ['./employer-comments.component.scss']
})
export class EmployerCommentsComponent implements OnInit {
  formGroup: FormGroup;

  @Input() employerId: number;

  constructor(
    private fb: FormBuilder,
    private employerCommentService: EmployerCommentsService,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.employerCommentService.loadComments(this.getEmployeeAccountId());
  }

  isLeaveCommentOpen(): boolean {
    return this.employerCommentService.isLeaveCommentOpen();
  }

  getComments(): Comment[] {
    return this.employerCommentService.getComments();
  }

  getEmployeeAccountId(): string {
    return this.router.url.split('/')[3];
  }

  onCancelCommentClick(): void {
    this.employerCommentService.setCommentOpen(false);
  }

  onSubmitComment(): void {
    this.employerCommentService.createComment(this.getEmployeeAccountId(), this.formGroup.value);
  }

}
