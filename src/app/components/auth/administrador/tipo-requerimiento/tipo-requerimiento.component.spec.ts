import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRequerimientoComponent } from './tipo-requerimiento.component';

describe('TipoRequerimientoComponent', () => {
  let component: TipoRequerimientoComponent;
  let fixture: ComponentFixture<TipoRequerimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoRequerimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
