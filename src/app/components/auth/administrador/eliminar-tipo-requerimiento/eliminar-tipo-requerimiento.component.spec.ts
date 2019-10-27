import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoRequerimientoComponent } from './eliminar-tipo-requerimiento.component';

describe('EliminarTipoRequerimientoComponent', () => {
  let component: EliminarTipoRequerimientoComponent;
  let fixture: ComponentFixture<EliminarTipoRequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarTipoRequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTipoRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
