import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersData: User[];

  constructor() {
    this.usersData = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
      { id: 4, name: 'User 4' },
      { id: 5, name: 'User 5' },
    ];
  }

  getUserData(id: number): User {
    return this.usersData.find(user => user.id === id);
  }
}
