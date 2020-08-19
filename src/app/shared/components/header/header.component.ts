import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LOGOUT_REQUEST } from 'src/app/ngrx/actions/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() headerType: string;
  @Input() page: string;

  isSignInSignUpPage = false;

  constructor(private router: Router, private authService: AuthService, private store: Store) {}

  ngOnInit(): void {
    this.isSignInSignUpPage = this.router.url.indexOf('login') !== -1 || this.router.url.indexOf('signup') !== -1;
  }

  onLogOut(): void {
    this.store.dispatch(LOGOUT_REQUEST());
  }

  isLoggedInUser(): boolean {
    return this.authService.isLoggedIn();
  }

}
