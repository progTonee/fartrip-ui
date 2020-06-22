import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOrderComponent } from './available-order.component';

describe('AvailableOrderComponent', () => {
  let component: AvailableOrderComponent;
  let fixture: ComponentFixture<AvailableOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
