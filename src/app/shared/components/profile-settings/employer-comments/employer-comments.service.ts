import { Injectable } from '@angular/core';
import { Comment } from 'src/app/core/models/comment';

@Injectable({
  providedIn: 'root'
})
export class EmployerCommentsService {
  employerCommentsData: Comment[];

  constructor() {
    this.employerCommentsData = [
      { text: 'Comment 1', date: new Date().toISOString(), rating: 5, employerId: 1, userId: 1 },
      { text: 'Comment 2', date: new Date().toISOString(), rating: 4, employerId: 2, userId: 2  },
      { text: 'Comment 3', date: new Date().toISOString(), rating: 2, employerId: 3, userId: 3  },
      { text: 'Comment 4', date: new Date().toISOString(), rating: 1, employerId: 1, userId: 4  },
      { text: 'Comment 5', date: new Date().toISOString(), rating: 3, employerId: 3, userId: 5  }
    ];
  }

  getEmployerCommentsData(id: number): Comment[] {
    return this.employerCommentsData.filter(item => item.employerId === id);
  }
}
