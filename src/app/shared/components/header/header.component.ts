import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerType: string;
  @Input() page: string;

  isSignInSignUpPage = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isSignInSignUpPage = this.router.url.indexOf('login') !== -1 || this.router.url.indexOf('signup') !== -1;
  }

  onLogOut(): void {
    this.authService.logOut();
  }

  isLoggedInUser(): boolean {
    return this.authService.isLoggedIn();
  }

}
