import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../ngrx';
import { RouterTestingModule } from '@angular/router/testing';
import { materialModules } from '../../modules/material/material';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        StoreModule.forRoot(reducers),
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        ...materialModules
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('Should contains "Login" and "Sign Up" buttons when headerType is "welcome"', () => {
    const linksText = ['Sign In', 'Sign Up'];

    fixture.componentInstance.headerType = 'welcome';
    fixture.detectChanges();

    const componentElement = fixture.nativeElement;
    const links = componentElement.querySelectorAll('.header-link');

    expect(links.length).toEqual(2);

    links.forEach(link => expect(linksText.includes(link.innerText)).toBeTruthy());
  });

  it ('Should contains "Settings" and "Log Out" buttons when headerType is "user" or "employee"', () => {
    const linksText = ['Settings', 'Log out'];

    fixture.componentInstance.headerType = 'user';
    fixture.detectChanges();

    const componentElement = fixture.nativeElement;
    const links = componentElement.querySelectorAll('.header-link');

    expect(links.length).toEqual(2);

    links.forEach(link => expect(linksText.includes(link.innerText)).toBeTruthy());
  });

});
