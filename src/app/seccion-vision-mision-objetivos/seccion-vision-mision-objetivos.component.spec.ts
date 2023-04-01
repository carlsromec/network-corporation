import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionVisionMisionObjetivosComponent } from './seccion-vision-mision-objetivos.component';

describe('SeccionVisionMisionObjetivosComponent', () => {
  let component: SeccionVisionMisionObjetivosComponent;
  let fixture: ComponentFixture<SeccionVisionMisionObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionVisionMisionObjetivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionVisionMisionObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
