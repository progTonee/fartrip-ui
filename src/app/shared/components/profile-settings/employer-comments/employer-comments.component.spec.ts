import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCommentsComponent } from './employer-comments.component';

describe('EmployerCommentsComponent', () => {
  let component: EmployerCommentsComponent;
  let fixture: ComponentFixture<EmployerCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
