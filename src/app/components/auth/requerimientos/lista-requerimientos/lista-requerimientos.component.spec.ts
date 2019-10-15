import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRequerimientosComponent } from './lista-requerimientos.component';

describe('ListaRequerimientosComponent', () => {
  let component: ListaRequerimientosComponent;
  let fixture: ComponentFixture<ListaRequerimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRequerimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
