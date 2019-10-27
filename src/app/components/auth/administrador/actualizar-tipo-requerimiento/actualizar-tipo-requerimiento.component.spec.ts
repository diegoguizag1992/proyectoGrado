import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTipoRequerimientoComponent } from './actualizar-tipo-requerimiento.component';

describe('ActualizarTipoRequerimientoComponent', () => {
  let component: ActualizarTipoRequerimientoComponent;
  let fixture: ComponentFixture<ActualizarTipoRequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarTipoRequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarTipoRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
