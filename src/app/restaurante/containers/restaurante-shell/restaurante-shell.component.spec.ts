import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteShellComponent } from './restaurante-shell.component';

describe('RestauranteShellComponent', () => {
  let component: RestauranteShellComponent;
  let fixture: ComponentFixture<RestauranteShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranteShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
