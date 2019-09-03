import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaRequerimientosComponent } from './respuesta-requerimientos.component';

describe('RespuestaRequerimientosComponent', () => {
  let component: RespuestaRequerimientosComponent;
  let fixture: ComponentFixture<RespuestaRequerimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaRequerimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
