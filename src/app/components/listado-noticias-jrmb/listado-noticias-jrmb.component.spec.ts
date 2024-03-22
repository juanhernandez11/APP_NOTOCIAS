import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasJrmbComponent } from './listado-noticias-jrmb.component';

describe('ListadoNoticiasJrmbComponent', () => {
  let component: ListadoNoticiasJrmbComponent;
  let fixture: ComponentFixture<ListadoNoticiasJrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoNoticiasJrmbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoNoticiasJrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
