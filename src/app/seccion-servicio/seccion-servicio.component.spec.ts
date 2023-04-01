import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionServicioComponent } from './seccion-servicio.component';

describe('SeccionServicioComponent', () => {
  let component: SeccionServicioComponent;
  let fixture: ComponentFixture<SeccionServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
