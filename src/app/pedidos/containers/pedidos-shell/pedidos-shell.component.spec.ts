import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosShellComponent } from './pedidos-shell.component';

describe('PedidosShellComponent', () => {
  let component: PedidosShellComponent;
  let fixture: ComponentFixture<PedidosShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
