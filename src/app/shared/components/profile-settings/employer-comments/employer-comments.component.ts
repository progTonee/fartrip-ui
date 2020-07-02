import { Component, OnInit, Input } from '@angular/core';
import { EmployerCommentsService } from './employer-comments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employer-comments',
  templateUrl: './employer-comments.component.html',
  styleUrls: ['./employer-comments.component.scss']
})
export class EmployerCommentsComponent implements OnInit {
  formGroup: FormGroup;

  @Input() employerId: number;

  constructor(private fb: FormBuilder, private employerCommentService: EmployerCommentsService) {
    this.formGroup = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  isLeaveCommentOpen(): boolean {
    return this.employerCommentService.isLeaveCommentOpen();
  }

  getEmployerCommentsData(): Comment[] {
    return [];
  }

  onCancelCommentClick(): void {
    this.employerCommentService.setCommentOpen(false);
  }

}
