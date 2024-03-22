import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerJrmbComponent } from './spinner-jrmb.component';

describe('SpinnerJrmbComponent', () => {
  let component: SpinnerJrmbComponent;
  let fixture: ComponentFixture<SpinnerJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
