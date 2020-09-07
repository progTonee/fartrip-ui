import { Component, OnInit } from '@angular/core';
import { EmployeeCommentsService } from './employee-comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/app/core/models/comment.model';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-employee-comments',
  templateUrl: './employee-comments.component.html',
  styleUrls: ['./employee-comments.component.scss']
})
export class EmployeeCommentsComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeCommentService: EmployeeCommentsService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.formGroup = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.employeeCommentService.loadComments(this.getEmployeeAccountId());
  }

  isLeaveCommentOpen(): boolean {
    return this.employeeCommentService.isLeaveCommentOpen();
  }

  getComments(): Comment[] {
    return this.employeeCommentService.getComments();
  }

  getEmployeeAccountId(): string {
    if (this.localStorageService.get('role') === 'USER') {
      return this.router.url.split('/')[3];
    } else {
      return this.localStorageService.get('id');
    }
  }

  onCancelCommentClick(): void {
    this.employeeCommentService.setCommentOpen(false);
  }

  onSubmitComment(): void {
    this.employeeCommentService.createComment(this.getEmployeeAccountId(), this.formGroup.value);
  }

}
