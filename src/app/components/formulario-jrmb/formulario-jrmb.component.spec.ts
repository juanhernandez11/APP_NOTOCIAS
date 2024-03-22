import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJrmbComponent } from './formulario-jrmb.component';

describe('FormularioJrmbComponent', () => {
  let component: FormularioJrmbComponent;
  let fixture: ComponentFixture<FormularioJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
