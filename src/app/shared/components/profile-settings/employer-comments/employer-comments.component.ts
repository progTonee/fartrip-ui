import { Component, OnInit } from '@angular/core';
import { EmployerCommentsService } from './employer-comments.service';

@Component({
  selector: 'app-employer-comments',
  templateUrl: './employer-comments.component.html',
  styleUrls: ['./employer-comments.component.scss']
})
export class EmployerCommentsComponent implements OnInit {

  constructor(public employerCommentsService: EmployerCommentsService) {}

  ngOnInit(): void {}

}
